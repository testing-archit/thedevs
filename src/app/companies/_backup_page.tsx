import { db } from '@/db';
import { companies, problems } from '@/db/schema';
import { count, eq } from 'drizzle-orm';
import Link from 'next/link';
import Image from 'next/image';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';

export const metadata = {
    title: 'Browse Companies | The Devs',
    description: 'Practice previous year questions from top tech companies',
};

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
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Discover <span className="gradient-text">Companies</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Practice previous year questions from your target companies.
                        </p>
                    </div>

                    {allCompanies.length === 0 ? (
                        <div className="text-center py-24 glass-card rounded-3xl">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-lg mb-2">Companies are being added!</p>
                            <p className="text-sm text-gray-500">Check back soon as we add more companies and problems to the platform.</p>
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
