import { db } from '@/db';
import { companies, problems } from '@/db/schema';
import { count, eq } from 'drizzle-orm';
import Link from 'next/link';
import Image from 'next/image';
import { seedData } from '@/actions/seed';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';

export default async function CompaniesPage() {
    const user = await getCurrentUser();
    const allCompanies = await db.query.companies.findMany({
        with: {
            problems: true,
        },
    });

    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={user} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Discover <span className="gradient-text">Companies</span>
                            </h1>
                            <p className="text-xl text-gray-400">
                                Practice previous year questions from your target companies.
                            </p>
                        </div>

                        {allCompanies.length === 0 && (
                            <form action={async () => {
                                'use server';
                                await seedData();
                            }}>
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                                >
                                    🌱 Seed Test Data
                                </button>
                            </form>
                        )}
                    </div>

                    {allCompanies.length === 0 ? (
                        <div className="text-center py-24 glass-card rounded-3xl">
                            <p className="text-gray-400 text-lg mb-4">No companies found in the database.</p>
                            <p className="text-sm text-gray-500 italic">Click the "Seed Test Data" button above to populate some example companies.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {allCompanies.map((company) => (
                                <Link
                                    key={company.id}
                                    href={`/companies/${company.id}`}
                                    className="group relative glass-card rounded-2xl p-8 hover:border-primary/50 transition-all duration-300"
                                >
                                    <div className="flex items-center space-x-4 mb-6">
                                        <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden p-2 group-hover:scale-110 transition-transform">
                                            {company.logoUrl ? (
                                                <img
                                                    src={company.logoUrl}
                                                    alt={company.name}
                                                    className="w-full h-full object-contain filter "
                                                />
                                            ) : (
                                                <span className="text-2xl font-bold text-primary">{company.name[0]}</span>
                                            )}
                                        </div>
                                        <div>
                                            <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">{company.name}</h2>
                                            <p className="text-gray-400 text-sm">
                                                {company.problems.length} Problems
                                            </p>
                                        </div>
                                    </div>

                                    <p className="text-gray-400 line-clamp-2 mb-6">
                                        {company.description || `Prepare for ${company.name} placements with curated PYQs.`}
                                    </p>

                                    <div className="flex items-center text-primary font-semibold text-sm">
                                        View Problems
                                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
