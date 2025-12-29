import 'dotenv/config';
import app from './app.js';

const port = parseInt(process.env.PORT || '3000');

app.listen(port, () => {
    console.log(`🚀 The Devs is running at http://localhost:${port}`);
    console.log('📦 Stack: Express + HTMX');
    console.log('🗄️  Database: Neon PostgreSQL + Drizzle ORM');
});
