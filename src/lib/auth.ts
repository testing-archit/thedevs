import { cookies } from 'next/headers';
import { db } from '@/db';
import { users, sessions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { cache } from 'react';

export const getCurrentUser = cache(async () => {
    const cookieStore = await cookies();
    const token = cookieStore.get('session_token')?.value;

    if (!token) return null;

    const session = await db.query.sessions.findFirst({
        where: eq(sessions.token, token),
        with: {
            user: true
        }
    });

    if (!session) return null;

    if (new Date(session.expiresAt) < new Date()) {
        return null;
    }

    return session.user;
});
