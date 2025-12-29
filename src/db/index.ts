import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './schema.js';

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    console.error('❌ DATABASE_URL environment variable is missing!');
    console.error('Please ensure it is set in your Vercel Project Settings.');
    throw new Error('DATABASE_URL environment variable is not set');
}

const client = postgres(connectionString, {
    ssl: 'require',
    max: 10,
});

export const db = drizzle(client, { schema });
export * from './schema';
