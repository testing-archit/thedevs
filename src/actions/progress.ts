'use server';

import { db } from '@/db';
import { userProgress } from '@/db/schema';
import { eq, and } from 'drizzle-orm';
import { getCurrentUser } from '@/lib/auth';
import { revalidatePath } from 'next/cache';

export async function updateProblemProgress(problemId: string, status: 'attempted' | 'solved') {
    const user = await getCurrentUser();

    if (!user) {
        return { error: 'You must be logged in to track progress' };
    }

    try {
        // Check if progress exists
        const existing = await db.query.userProgress.findFirst({
            where: and(
                eq(userProgress.userId, user.id),
                eq(userProgress.problemId, problemId)
            )
        });

        if (existing) {
            // Update existing progress
            await db.update(userProgress)
                .set({
                    status,
                    updatedAt: new Date()
                })
                .where(eq(userProgress.id, existing.id));
        } else {
            // Create new progress entry
            await db.insert(userProgress).values({
                userId: user.id,
                problemId,
                status
            });
        }

        //  Revalidate relevant paths
        revalidatePath('/dashboard');
        revalidatePath('/problems');

        return { success: true };
    } catch (error) {
        console.error('Update progress error:', error);
        return { error: 'Failed to update progress' };
    }
}

export async function getUserProgress() {
    const user = await getCurrentUser();

    if (!user) {
        return { attempted: 0, solved: 0, total: 0 };
    }

    try {
        const progress = await db.query.userProgress.findMany({
            where: eq(userProgress.userId, user.id)
        });

        const stats = {
            attempted: progress.filter(p => p.status === 'attempted').length,
            solved: progress.filter(p => p.status === 'solved').length,
            total: progress.length
        };

        return stats;
    } catch (error) {
        console.error('Get progress error:', error);
        return { attempted: 0, solved: 0, total: 0 };
    }
}

export async function getProblemStatus(problemId: string) {
    const user = await getCurrentUser();

    if (!user) {
        return null;
    }

    try {
        const progress = await db.query.userProgress.findFirst({
            where: and(
                eq(userProgress.userId, user.id),
                eq(userProgress.problemId, problemId)
            )
        });

        return progress?.status || null;
    } catch (error) {
        console.error('Get problem status error:', error);
        return null;
    }
}
