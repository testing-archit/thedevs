import { db } from '@/db';
import { companies, problems, topics } from '@/db/schema';
import { seedData } from '@/actions/seed';
import Link from 'next/link';

export const dynamic = 'force-dynamic';


async function forceReseed() {
    'use server';

    // Delete all existing data
    await db.delete(problems);
    await db.delete(companies);
    await db.delete(topics);

    // Re-seed with new comprehensive data
    await seedData();
}

export default async function ForceReseedPage() {
    return (
        <div className="min-h-screen bg-dark text-white flex items-center justify-center p-4">
            <div className="max-w-2xl w-full">
                <div className="glass-card rounded-3xl p-12 text-center border border-red-500/30">
                    <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-8">
                        <svg className="w-12 h-12 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-bold mb-4">
                        Force <span className="text-red-500">Re-Seed</span>
                    </h1>

                    <div className="mb-8 space-y-4">
                        <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-left">
                            <p className="text-yellow-400 font-semibold mb-2">⚠️ Warning</p>
                            <p className="text-sm text-gray-400">
                                This will DELETE all existing companies, topics, and problems, then re-seed with comprehensive detailed problem descriptions.
                            </p>
                        </div>

                        <div className="p-6 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-left">
                            <h3 className="font-bold mb-3 text-blue-400">📦 New Data Includes:</h3>
                            <ul className="space-y-2 text-sm text-gray-300">
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span><strong>Full Problem Statements:</strong> Multi-paragraph detailed descriptions</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span><strong>Examples:</strong> Input/output examples with explanations</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span><strong>Constraints:</strong> Detailed constraint lists for each problem</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span><strong>Hints:</strong> Helpful hints to guide solving</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-primary mr-2">✓</span>
                                    <span><strong>12+ Problems:</strong> From Google, Amazon, Microsoft, Meta, Apple</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <form action={forceReseed} className="space-y-4">
                        <button
                            type="submit"
                            className="w-full px-8 py-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl font-semibold hover:shadow-lg hover:shadow-red-500/30 transition-all text-lg"
                        >
                            🔄 Clear & Re-Seed Database
                        </button>

                        <Link
                            href="/companies"
                            className="block px-8 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                        >
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}
