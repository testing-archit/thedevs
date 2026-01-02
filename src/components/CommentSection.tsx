'use client';

import { useState, useTransition } from 'react';
import { createComment, toggleUpvote, deleteComment } from '@/actions/comments';
import { toast } from 'sonner';

interface Comment {
    id: string;
    content: string;
    createdAt: Date;
    user: {
        id: string;
        name: string;
        email: string;
    };
    upvotes: number;
    hasUpvoted: boolean;
}

interface CommentSectionProps {
    problemId: string;
    initialComments: Comment[];
    currentUserId?: string;
}

export function CommentSection({ problemId, initialComments, currentUserId }: CommentSectionProps) {
    const [comments, setComments] = useState(initialComments);
    const [newComment, setNewComment] = useState('');
    const [isPending, startTransition] = useTransition();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!newComment.trim()) return;

        startTransition(async () => {
            const result = await createComment(problemId, newComment);

            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success('Comment posted!');
                setNewComment('');
                // Refresh page to show new comment
                window.location.reload();
            }
        });
    };

    const handleUpvote = async (commentId: string) => {
        if (!currentUserId) {
            toast.error('Please login to upvote');
            return;
        }

        startTransition(async () => {
            const result = await toggleUpvote(commentId);

            if (result.error) {
                toast.error(result.error);
            } else {
                // Optimistic update
                setComments(comments.map(c =>
                    c.id === commentId
                        ? { ...c, upvotes: c.upvotes + (result.upvoted ? 1 : -1), hasUpvoted: result.upvoted || false }
                        : c
                ));
            }
        });
    };

    const handleDelete = async (commentId: string) => {
        if (!confirm('Are you sure you want to delete this comment?')) return;

        startTransition(async () => {
            const result = await deleteComment(commentId);

            if (result.error) {
                toast.error(result.error);
            } else {
                toast.success('Comment deleted');
                setComments(comments.filter(c => c.id !== commentId));
            }
        });
    };

    return (
        <div className="glass-card rounded-3xl p-8 border border-white/10">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Discussion ({comments.length})
            </h2>

            {/* Comment Form */}
            {currentUserId ? (
                <form onSubmit={handleSubmit} className="mb-8">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Share your thoughts, solutions, or ask for help..."
                        className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors resize-none"
                        rows={4}
                        disabled={isPending}
                    />
                    <div className="flex justify-end mt-3">
                        <button
                            type="submit"
                            disabled={isPending || !newComment.trim()}
                            className="px-6 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isPending ? 'Posting...' : 'Post Comment'}
                        </button>
                    </div>
                </form>
            ) : (
                <div className="mb-8 p-4 bg-white/5 border border-white/10 rounded-lg text-center">
                    <p className="text-gray-400">
                        <a href="/login" className="text-primary hover:underline">Login</a> to join the discussion
                    </p>
                </div>
            )}

            {/* Comments List */}
            <div className="space-y-6">
                {comments.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        <svg className="w-16 h-16 mx-auto mb-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <p>No comments yet. Be the first to share your thoughts!</p>
                    </div>
                ) : (
                    comments.map((comment) => (
                        <div key={comment.id} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                            <div className="flex items-start space-x-4">
                                {/* Upvote Button */}
                                <button
                                    onClick={() => handleUpvote(comment.id)}
                                    disabled={!currentUserId || isPending}
                                    className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${comment.hasUpvoted
                                            ? 'bg-primary/20 text-primary'
                                            : 'bg-white/5 text-gray-400 hover:bg-white/10'
                                        } ${!currentUserId ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    <svg className="w-5 h-5" fill={comment.hasUpvoted ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                                    </svg>
                                    <span className="text-sm font-semibold">{comment.upvotes}</span>
                                </button>

                                {/* Comment Content */}
                                <div className="flex-1">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center space-x-2">
                                            <span className="font-semibold text-gray-200">{comment.user.name}</span>
                                            <span className="text-gray-500 text-sm">•</span>
                                            <span className="text-gray-500 text-sm">
                                                {new Date(comment.createdAt).toLocaleDateString()}
                                            </span>
                                        </div>

                                        {/* Delete Button (own comments only) */}
                                        {currentUserId === comment.user.id && (
                                            <button
                                                onClick={() => handleDelete(comment.id)}
                                                disabled={isPending}
                                                className="text-gray-500 hover:text-red-500 transition-colors"
                                            >
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        )}
                                    </div>
                                    <p className="text-gray-300 whitespace-pre-wrap">{comment.content}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
