import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';
import { cookie } from '@elysiajs/cookie';
import { renderLandingPage } from './pages/landing.js';
import { renderLoginPage } from './pages/login.js';
import { renderSignupPage } from './pages/signup.js';
import { createUser, findUserByEmail, verifyPassword, createSession, validateSession, deleteSession } from './services/auth.js';

const app = new Elysia()
    .use(html())
    .use(cookie())
    .get('/', () => renderLandingPage())
    .get('/login', () => renderLoginPage())
    .get('/signup', () => renderSignupPage())
    .get('/logo.png', ({ set }) => {
        try {
            const fs = await import('fs');
            const path = await import('path');
            const logoPath = path.join(process.cwd(), 'logo.png');
            const logo = fs.readFileSync(logoPath);
            set.headers['Content-Type'] = 'image/png';
            return new Response(logo, {
                headers: { 'Content-Type': 'image/png' }
            });
        } catch {
            set.status = 404;
            return 'Not Found';
        }
    })
    .post('/api/auth/signup', async ({ body, cookie: { session }, set }) => {
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

    .post('/api/auth/login', async ({ body, cookie: { session }, set }) => {
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

    .post('/api/auth/logout', async ({ cookie: { session }, set }) => {
        const sessionToken = session.value as string | undefined;
        if (sessionToken) {
            await deleteSession(sessionToken);
            session.remove();
        }
        set.redirect = '/';
        return;
    })
    .get('/health', () => ({ status: 'ok', stack: 'BETH', timestamp: new Date().toISOString() }))
    .listen(process.env.PORT || 3000);

console.log(`🚀 The Devs is running at http://localhost:${app.server?.port}`);
console.log('📦 Stack: Node.js + ElysiaJS + TailwindCSS + HTMX');
console.log('🗄️  Database: Neon PostgreSQL + Drizzle ORM');

export type App = typeof app;
