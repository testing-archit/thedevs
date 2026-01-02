import { db } from '@/db';
import { seedData } from '@/actions/seed';
import { redirect } from 'next/navigation';
import { companies } from '@/db/schema';

async function handleSeed() {
    'use server';
    await seedData();
}

export default async function AdminSeedPage() {
    // Check if already seeded
    const existingCompanies = await db.select().from(companies);
    const isSeeded = existingCompanies.length > 0;

    return (
        <div className="min-h-screen bg-dark text-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <div className="glass-card rounded-3xl p-12 text-center border border-white/10">
                    <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                        <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-bold mb-4">
                        Database <span className="gradient-text">Seeding</span>
                    </h1>

                    {isSeeded ? (
                        <div className="space-y-6">
                            <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-xl">
                                <p className="text-green-400 font-semibold mb-2">✅ Database Already Seeded!</p>
                                <p className="text-sm text-gray-400">
                                    Found {existingCompanies.length} companies in the database
                                </p>
                            </div>

                            <div className="space-y-3">
                                <a
                                    href="/companies"
                                    className="block px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all"
                                >
                                    Browse Companies
                                </a>
                                <a
                                    href="/problems"
                                    className="block px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                                >
                                    Browse Problems
                                </a>
                                <a
                                    href="/topics"
                                    className="block px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                                >
                                    Browse Topics
                                </a>
                            </div>
                        </div>
                    ) : (
                        <div className="space-y-6">
                            <p className="text-xl text-gray-400 mb-8">
                                Click the button below to populate the database with sample problems from top tech companies.
                            </p>

                            <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-left">
                                <h3 className="font-bold mb-3 text-blue-400">📦 What will be added:</h3>
                                <ul className="space-y-2 text-sm text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">✓</span>
                                        <span><strong>5 Companies:</strong> Google, Amazon, Microsoft, Meta, Apple</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">✓</span>
                                        <span><strong>8 Topics:</strong> Arrays, Strings, Hash Tables, DP, Trees, Graphs, Linked Lists, System Design</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-primary mr-2">✓</span>
                                        <span><strong>12+ Problems:</strong> Full descriptions, constraints, hints, and test cases</span>
                                    </li>
                                </ul>
                            </div>

                            <form action={handleSeed}>
                                <button
                                    type="submit"
                                    className="w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all text-lg"
                                >
                                    🌱 Seed Database Now
                                </button>
                            </form>

                            <p className="text-xs text-gray-500 italic">
                                This is safe to run and will only add data if it doesn't already exist.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
