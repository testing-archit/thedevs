import 'dotenv/config';
import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';
import { cookie } from '@elysiajs/cookie';
import { readFileSync } from 'fs';
import { join } from 'path';
import { createServer } from 'http';
import { renderLandingPage } from './pages/landing.js';
import { renderLoginPage } from './pages/login.js';
import { renderSignupPage } from './pages/signup.js';
import { renderDashboardPage } from './pages/dashboard.js';
import { createUser, findUserByEmail, verifyPassword, createSession, validateSession, deleteSession } from './services/auth.js';

const app = new Elysia()
    .use(html())
    .use(cookie())
    .derive(async ({ cookie: { session } }) => {
        // Get current user from session
        const sessionToken = session.value as string | undefined;
        let user = null;
        if (sessionToken) {
            user = await validateSession(sessionToken);
        }
        return { user };
    })
    .get('/', async ({ user }) => {
        // Redirect authenticated users to dashboard
        if (user) {
            return new Response(null, {
                status: 302,
                headers: { 'Location': '/dashboard' }
            });
        }
        return renderLandingPage();
    })
    .get('/dashboard', async ({ user }) => {
        if (!user) {
            return new Response(null, {
                status: 302,
                headers: { 'Location': '/login' }
            });
        }
        return renderDashboardPage(user);
    })
    .get('/login', async ({ user }) => {
        // Redirect authenticated users to dashboard
        if (user) {
            return new Response(null, {
                status: 302,
                headers: { 'Location': '/dashboard' }
            });
        }
        return renderLoginPage();
    })
    .get('/signup', async ({ user }) => {
        // Redirect authenticated users to dashboard
        if (user) {
            return new Response(null, {
                status: 302,
                headers: { 'Location': '/dashboard' }
            });
        }
        return renderSignupPage();
    })
    .get('/logo.png', () => {
        try {
            const logoPath = join(process.cwd(), 'logo.png');
            const logo = readFileSync(logoPath);
            return new Response(logo, {
                headers: { 'Content-Type': 'image/png' }
            });
        } catch {
            return new Response('Not Found', { status: 404 });
        }
    })
    .post('/api/auth/signup', async ({ body, cookie: { session } }) => {
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

            // Return dashboard page HTML directly (HTMX will swap it)
            return renderDashboardPage(user);
        } catch (error) {
            console.error('Signup error:', error);
            return renderSignupPage('Something went wrong. Please try again.');
        }
    })

    .post('/api/auth/login', async ({ body, cookie: { session } }) => {
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

            // Return dashboard page HTML directly (HTMX will swap it)
            return renderDashboardPage(user);
        } catch (error) {
            console.error('Login error:', error);
            return renderLoginPage('Something went wrong. Please try again.');
        }
    })

    .post('/api/auth/logout', async ({ cookie: { session } }) => {
        const sessionToken = session.value as string | undefined;
        if (sessionToken) {
            await deleteSession(sessionToken);
            session.remove();
        }
        // Return landing page HTML directly (HTMX will swap it)
        return renderLandingPage();
    })
    .get('/health', () => ({ status: 'ok', stack: 'BETH', timestamp: new Date().toISOString() }));

const port = parseInt(process.env.PORT || '3000');

// Start server using Node.js HTTP server
const server = createServer(async (req, res) => {
    try {
        // Read request body if present
        let body: Buffer | undefined;
        if (req.method !== 'GET' && req.method !== 'HEAD') {
            const chunks: Buffer[] = [];
            for await (const chunk of req) {
                chunks.push(chunk);
            }
            body = Buffer.concat(chunks);
        }

        // Create Web API Request object
        const url = `http://${req.headers.host || 'localhost'}${req.url || '/'}`;
        const request = new Request(url, {
            method: req.method,
            headers: req.headers as HeadersInit,
            body: body?.length ? body : undefined,
        });

        // Handle request with Elysia
        const response = await app.fetch(request);
        
        // Copy response headers
        response.headers.forEach((value, key) => {
            res.setHeader(key, value);
        });
        
        res.statusCode = response.status;
        
        // Handle response body
        if (response.body) {
            const buffer = await response.arrayBuffer();
            res.write(Buffer.from(buffer));
        }
        res.end();
    } catch (err) {
        console.error('Server error:', err);
        if (!res.headersSent) {
            res.statusCode = 500;
            res.end('Internal Server Error');
        }
    }
});

server.listen(port, () => {
    console.log(`🚀 The Devs is running at http://localhost:${port}`);
    console.log('📦 Stack: Node.js + ElysiaJS + TailwindCSS + HTMX');
    console.log('🗄️  Database: Neon PostgreSQL + Drizzle ORM');
});

export type App = typeof app;
