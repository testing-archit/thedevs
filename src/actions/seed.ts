'use server';

import { db } from '@/db';
import { companies, problems, topics } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function seedData() {
    try {
        // 1. Create Topics
        const [dsa] = await db.insert(topics).values({
            name: 'Data Structures & Algorithms',
            slug: 'dsa',
            description: 'Core problem solving'
        }).onConflictDoNothing().returning();
        const [systemDesign] = await db.insert(topics).values({
            name: 'System Design',
            slug: 'system-design',
            description: 'Architecting scalable systems'
        }).onConflictDoNothing().returning();

        // 2. Create Companies
        const [google] = await db.insert(companies).values({
            name: 'Google',
            slug: 'google',
            description: 'Search engine giant',
            logoUrl: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png',
            industry: 'Tech'
        }).onConflictDoNothing().returning();

        const [amazon] = await db.insert(companies).values({
            name: 'Amazon',
            slug: 'amazon',
            description: 'E-commerce and cloud giant',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
            industry: 'Tech'
        }).onConflictDoNothing().returning();

        const [microsoft] = await db.insert(companies).values({
            name: 'Microsoft',
            slug: 'microsoft',
            description: 'Software and technology corporation',
            logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
            industry: 'Tech'
        }).onConflictDoNothing().returning();

        // 3. Create Problems
        if (google && dsa) {
            await db.insert(problems).values([
                {
                    title: 'Two Sum',
                    slug: 'two-sum',
                    description: 'Find two numbers that add up to a target.',
                    difficulty: 'easy',
                    topicId: dsa.id,
                    companyId: google.id,
                },
                {
                    title: 'LRU Cache',
                    slug: 'lru-cache',
                    description: 'Design a Least Recently Used (LRU) cache.',
                    difficulty: 'medium',
                    topicId: dsa.id,
                    companyId: google.id,
                }
            ]).onConflictDoNothing();
        }

        if (amazon && dsa) {
            await db.insert(problems).values([
                {
                    title: 'Number of Islands',
                    slug: 'number-of-islands',
                    description: 'Given an m x n 2D binary grid which represents a map of lands and waters, return the number of islands.',
                    difficulty: 'medium',
                    topicId: dsa.id,
                    companyId: amazon.id,
                }
            ]).onConflictDoNothing();
        }

        return { success: true };
    } catch (error) {
        console.error('Seeding error:', error);
        return { success: false, error: String(error) };
    }
}
