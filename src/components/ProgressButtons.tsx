'use client';

import { useState, useTransition } from 'react';
import { updateProblemProgress } from '@/actions/progress';
import { toast } from 'sonner';

interface ProgressButtonsProps {
    problemId: string;
    initialStatus: 'attempted' | 'solved' | null;
}

export function ProgressButtons({ problemId, initialStatus }: ProgressButtonsProps) {
    const [status, setStatus] = useState<'attempted' | 'solved' | null>(initialStatus);
    const [isPending, startTransition] = useTransition();

    const handleStatusChange = (newStatus: 'attempted' | 'solved') => {
        startTransition(async () => {
            const result = await updateProblemProgress(problemId, newStatus);

            if (result.error) {
                toast.error(result.error);
            } else {
                setStatus(newStatus);
                toast.success(newStatus === 'solved' ? '🎉 Problem marked as solved!' : '📝 Problem marked as attempted');
            }
        });
    };

    return (
        <div className="flex items-center space-x-3">
            <button
                onClick={() => handleStatusChange('attempted')}
                disabled={isPending}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${status === 'attempted'
                        ? 'bg-yellow-500/20 border-2 border-yellow-500 text-yellow-500'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300'
                    } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span>Attempted</span>
            </button>

            <button
                onClick={() => handleStatusChange('solved')}
                disabled={isPending}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${status === 'solved'
                        ? 'bg-green-500/20 border-2 border-green-500 text-green-500'
                        : 'bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300'
                    } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Solved</span>
            </button>
        </div>
    );
}
