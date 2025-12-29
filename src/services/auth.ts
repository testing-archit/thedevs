import { db, users, sessions } from '../db/index.js';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcryptjs';

export async function hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
}

export function generateSessionToken(): string {
    return crypto.randomUUID() + '-' + crypto.randomUUID();
}
interface CreateUserParams {
    email: string;
    password: string;
    name: string;
    course?: string;
    specialization?: string;
    yearOfStudy?: number;
}

export async function createUser({ email, password, name, course, specialization, yearOfStudy }: CreateUserParams) {
    const passwordHash = await hashPassword(password);

    const [user] = await db.insert(users).values({
        email: email.toLowerCase(),
        passwordHash,
        name,
        course,
        specialization,
        yearOfStudy
    }).returning();

    return user;
}

export async function findUserByEmail(email: string) {
    const [user] = await db.select().from(users).where(eq(users.email, email.toLowerCase()));
    return user;
}

export async function createSession(userId: string) {
    const token = generateSessionToken();
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    const [session] = await db.insert(sessions).values({
        userId,
        token,
        expiresAt
    }).returning();

    return session;
}

export async function validateSession(token: string) {
    const [session] = await db.select()
        .from(sessions)
        .where(eq(sessions.token, token));

    if (!session || session.expiresAt < new Date()) {
        return null;
    }

    const [user] = await db.select()
        .from(users)
        .where(eq(users.id, session.userId));

    return user;
}

export async function deleteSession(token: string) {
    await db.delete(sessions).where(eq(sessions.token, token));
}
