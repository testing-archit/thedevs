import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { cookie } from '@elysiajs/cookie';
import { readFileSync } from 'fs';
import { join } from 'path';
import { renderLandingPage } from '../src/pages/landing.js';
import { renderLoginPage } from '../src/pages/login.js';
import { renderSignupPage } from '../src/pages/signup.js';
import { createUser, findUserByEmail, verifyPassword, createSession, deleteSession } from '../src/services/auth.js';

const app = new Elysia()
    .use(html())
    .use(cookie())
    .get('/logo.png', () => {
        try {
            const filePath = join(process.cwd(), 'logo.png');
            const content = readFileSync(filePath);
            return new Response(content, {
                headers: { 'Content-Type': 'image/png' }
            });
        } catch (error) {
            console.error('Error serving logo:', error);
            return new Response('Not Found', { status: 404 });
        }
    })
    .get('/', () => renderLandingPage())
    .get('/index', () => renderLandingPage())
    .get('/login', () => renderLoginPage())
    .get('/signup', () => renderSignupPage())
    .post('/api/auth/signup', async ({ body, set, cookie: { session } }) => {
        const { name, email, password, confirmPassword, course, specialization, yearOfStudy } = body as {
            name: string; email: string; password: string; confirmPassword: string;
            course: string; specialization: string; yearOfStudy: string;
        };

        if (password !== confirmPassword) {
            return renderSignupPage('Passwords do not match');
        }

        if (password.length < 8) {
            return renderSignupPage('Password must be at least 8 characters');
        }

        const existingUser = await findUserByEmail(email);
        if (existingUser) {
            return renderSignupPage('An account with this email already exists');
        }

        try {
            const user = await createUser({
                email,
                password,
                name,
                course,
                specialization,
                yearOfStudy: parseInt(yearOfStudy)
            });
            const sessionData = await createSession(user.id);

            session.set({
                value: sessionData.token,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60
            });
            set.redirect = '/';
            return;
        } catch (error) {
            console.error('Signup error:', error);
            return renderSignupPage('Something went wrong. Please try again.');
        }
    })
    .post('/api/auth/login', async ({ body, set, cookie: { session } }) => {
        const { email, password } = body as { email: string; password: string };

        const user = await findUserByEmail(email);
        if (!user) {
            return renderLoginPage('Invalid email or password');
        }

        const isValid = await verifyPassword(password, user.passwordHash);
        if (!isValid) {
            return renderLoginPage('Invalid email or password');
        }

        try {
            const sessionData = await createSession(user.id);
            session.set({
                value: sessionData.token,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60
            });
            set.redirect = '/';
            return;
        } catch (error) {
            console.error('Login error:', error);
            return renderLoginPage('Something went wrong. Please try again.');
        }
    })
    .post('/api/auth/logout', async ({ set, cookie: { session } }) => {
        const sessionToken = session.value as string | undefined;
        if (sessionToken) {
            await deleteSession(sessionToken);
            session.remove();
        }
        set.redirect = '/';
        return;
    })
    .get('/health', () => ({
        status: 'ok',
        stack: 'BETH',
        platform: 'Vercel',
        timestamp: new Date().toISOString()
    }))
    .get('/api/health', () => ({
        status: 'ok',
        stack: 'BETH',
        platform: 'Vercel',
        timestamp: new Date().toISOString()
    }));

export default async (req: Request) => {
    return app.handle(req);
};

