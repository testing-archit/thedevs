'use server';

import { db } from '@/db';
import { users, sessions } from '@/db/schema';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import bcrypt from 'bcryptjs';
import { randomBytes } from 'crypto';

// @ts-ignore
export async function login(prevState: any, formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    if (!email || !password) {
        return { error: 'Please fill in all fields' };
    }

    try {
        const user = await db.query.users.findFirst({
            where: eq(users.email, email),
        });

        if (!user) {
            return { error: 'Invalid credentials' };
        }

        const isValid = await bcrypt.compare(password, user.passwordHash);

        if (!isValid) {
            return { error: 'Invalid credentials' };
        }

        await createSession(user.id);
    } catch (error) {
        console.error('Login error:', error);
        return { error: 'Something went wrong. Please try again.' };
    }

    redirect('/dashboard');
}

// @ts-ignore
export async function signup(prevState: any, formData: FormData) {
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const course = formData.get('course') as string;
    const specialization = formData.get('specialization') as string;
    const yearOfStudy = parseInt(formData.get('yearOfStudy') as string);
    const confirmPassword = formData.get('confirmPassword') as string;

    if (!name || !email || !password || !course || !specialization || !yearOfStudy) {
        return { error: 'Please fill in all fields' };
    }

    if (password !== confirmPassword) {
        return { error: 'Passwords do not match' };
    }

    try {
        const existingUser = await db.query.users.findFirst({
            where: eq(users.email, email),
        });

        if (existingUser) {
            return { error: 'User with this email already exists' };
        }

        const passwordHash = await bcrypt.hash(password, 10);

        const [newUser] = await db.insert(users).values({
            email,
            passwordHash,
            name,
            course,
            specialization,
            yearOfStudy,
            role: 'student',
            subscription: 'free',
        }).returning();

        await createSession(newUser.id);
    } catch (error) {
        console.error('Signup error:', error);
        return { error: 'Something went wrong. Please try again.' };
    }

    redirect('/dashboard');
}

export async function logout() {
    const cookieStore = await cookies();
    const token = cookieStore.get('session_token')?.value;

    if (token) {
        await db.delete(sessions).where(eq(sessions.token, token));
        cookieStore.delete('session_token');
    }

    redirect('/');
}

async function createSession(userId: string) {
    const token = randomBytes(64).toString('hex');
    const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000); // 30 days

    await db.insert(sessions).values({
        userId,
        token,
        expiresAt,
    });

    const cookieStore = await cookies();
    cookieStore.set('session_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        expires: expiresAt,
    });
}
