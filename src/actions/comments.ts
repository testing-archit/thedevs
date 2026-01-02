'use server';

import { db } from '@/db';
import { comments, commentVotes } from '@/db/schema';
import { eq, and, desc } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function createComment(problemId: string, content: string) {
    const user = await getCurrentUser();

    if (!user) {
        return { error: 'You must be logged in to comment' };
    }

    if (!content.trim()) {
        return { error: 'Comment cannot be empty' };
    }

    try {
        await db.insert(comments).values({
            userId: user.id,
            problemId,
            content: content.trim()
        });

        revalidatePath(`/problems/${problemId}`);

        return { success: true };
    } catch (error) {
        console.error('Create comment error:', error);
        return { error: 'Failed to create comment' };
    }
}

export async function getComments(problemId: string) {
    try {
        const allComments = await db.query.comments.findMany({
            where: eq(comments.problemId, problemId),
            with: {
                user: {
                    columns: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                votes: true
            },
            orderBy: [desc(comments.createdAt)]
        });

        const user = await getCurrentUser();

        // Add hasUpvoted flag for each comment
        const commentsWithVotes = allComments.map(comment => ({
            ...comment,
            hasUpvoted: user ? comment.votes.some(v => v.userId === user.id) : false,
            upvotes: comment.votes.length
        }));

        return commentsWithVotes;
    } catch (error) {
        console.error('Get comments error:', error);
        return [];
    }
}

export async function toggleUpvote(commentId: string) {
    const user = await getCurrentUser();

    if (!user) {
        return { error: 'You must be logged in to upvote' };
    }

    try {
        // Check if user already upvoted
        const existing = await db.query.commentVotes.findFirst({
            where: and(
                eq(commentVotes.userId, user.id),
                eq(commentVotes.commentId, commentId)
            )
        });

        if (existing) {
            // Remove upvote
            await db.delete(commentVotes).where(eq(commentVotes.id, existing.id));
        } else {
            // Add upvote
            await db.insert(commentVotes).values({
                userId: user.id,
                commentId
            });
        }

        revalidatePath('/problems');

        return { success: true, upvoted: !existing };
    } catch (error) {
        console.error('Toggle upvote error:', error);
        return { error: 'Failed to toggle upvote' };
    }
}

export async function deleteComment(commentId: string) {
    const user = await getCurrentUser();

    if (!user) {
        return { error: 'You must be logged in to delete comments' };
    }

    try {
        const comment = await db.query.comments.findFirst({
            where: eq(comments.id, commentId)
        });

        if (!comment) {
            return { error: 'Comment not found' };
        }

        if (comment.userId !== user.id) {
            return { error: 'You can only delete your own comments' };
        }

        // Delete all votes first
        await db.delete(commentVotes).where(eq(commentVotes.commentId, commentId));

        // Delete comment
        await db.delete(comments).where(eq(comments.id, commentId));

        revalidatePath('/problems');

        return { success: true };
    } catch (error) {
        console.error('Delete comment error:', error);
        return { error: 'Failed to delete comment' };
    }
}
