import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import { renderLandingPage } from './pages/landing.js';
import { renderLoginPage } from './pages/login.js';
import { renderSignupPage } from './pages/signup.js';
import { renderDashboardPage } from './pages/dashboard.js';
import { createUser, findUserByEmail, verifyPassword, createSession, validateSession, deleteSession } from './services/auth.js';

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Auth Middleware
app.use(async (req, res, next) => {
    const sessionToken = req.cookies.session;
    if (sessionToken) {
        const user = await validateSession(sessionToken);
        if (user) {
            (req as any).user = user;
        }
    }
    next();
});

// Routes
app.get('/', (req, res) => {
    if ((req as any).user) {
        return res.redirect('/dashboard');
    }
    res.send(renderLandingPage());
});

app.get('/dashboard', (req, res) => {
    if (!(req as any).user) {
        return res.redirect('/login');
    }
    res.send(renderDashboardPage((req as any).user));
});

app.get('/login', (req, res) => {
    if ((req as any).user) return res.redirect('/dashboard');
    res.send(renderLoginPage());
});

app.get('/signup', (req, res) => {
    if ((req as any).user) return res.redirect('/dashboard');
    res.send(renderSignupPage());
});

app.get('/logo.png', (req, res) => {
    res.sendFile(process.cwd() + '/logo.png');
});

// API Routes
app.post('/api/auth/signup', async (req, res) => {
    const { name, email, password, confirmPassword, course, specialization, yearOfStudy } = req.body;

    if (password !== confirmPassword) return res.send(renderSignupPage('Passwords do not match'));
    if (password.length < 8) return res.send(renderSignupPage('Password must be at least 8 characters'));

    const existing = await findUserByEmail(email);
    if (existing) return res.send(renderSignupPage('An account with this email already exists'));

    try {
        const user = await createUser({ email, password, name, course, specialization, yearOfStudy: parseInt(yearOfStudy) });
        const session = await createSession(user.id);

        res.cookie('session', session.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.send(renderDashboardPage(user));
    } catch (e) {
        console.error(e);
        res.send(renderSignupPage('Something went wrong. Please try again.'));
    }
});

app.post('/api/auth/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await findUserByEmail(email);

    if (!user || !(await verifyPassword(password, user.passwordHash))) {
        return res.send(renderLoginPage('Invalid email or password'));
    }

    try {
        const session = await createSession(user.id);
        res.cookie('session', session.token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });
        res.send(renderDashboardPage(user));
    } catch (e) {
        res.send(renderLoginPage('Something went wrong. Please try again.'));
    }
});

app.post('/api/auth/logout', async (req, res) => {
    if (req.cookies.session) {
        await deleteSession(req.cookies.session);
        res.clearCookie('session');
    }
    res.send(renderLandingPage());
});

app.get('/health', (req, res) => {
    res.json({ status: 'ok', stack: 'Express+HTMX', timestamp: new Date() });
});

export default app;
