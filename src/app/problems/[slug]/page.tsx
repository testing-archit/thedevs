import { db } from '@/db';
import { problems, companies, topics } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';
import { notFound } from 'next/navigation';
import { ProblemTimer } from '@/components/ProblemTimer';
import { FeatureItem, StatRow } from '@/components/ProblemHelpers';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const problem = await db.query.problems.findFirst({
        where: eq(problems.slug, slug),
        with: {
            company: true,
        },
    });

    if (!problem) {
        return {
            title: 'Problem Not Found | The Devs',
        };
    }

    return {
        title: `${problem.title} - ${problem.company?.name || 'Problem'} | The Devs`,
        description: problem.description.substring(0, 160),
    };
}

export default async function ProblemDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const user = await getCurrentUser();
    const problem = await db.query.problems.findFirst({
        where: eq(problems.slug, slug),
        with: {
            company: true,
            topic: true,
        },
    });

    if (!problem) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={user} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12">
                        <Link href={`/companies/${problem.company?.slug}`} className="text-primary hover:underline mb-4 inline-block flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to {problem.company?.name} Problems
                        </Link>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div>
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${problem.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' :
                                        problem.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-500' :
                                            'bg-red-500/10 text-red-500'
                                        }`}>
                                        {problem.difficulty}
                                    </span>
                                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/5 text-gray-400">
                                        {problem.topic?.name}
                                    </span>
                                </div>
                                <h1 className="text-4xl md:text-5xl font-bold mb-4">{problem.title}</h1>
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="text-right hidden md:block">
                                    <p className="text-sm text-gray-500">Company</p>
                                    <p className="font-semibold">{problem.company?.name}</p>
                                </div>
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center overflow-hidden p-2 border border-white/10">
                                    {problem.company?.logoUrl ? (
                                        <img src={problem.company.logoUrl} alt={problem.company.name} className="w-full h-full object-contain" />
                                    ) : (
                                        <span className="text-xl font-bold text-primary">{problem.company?.name[0]}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass-card rounded-3xl p-8 border border-white/10">
                                <h2 className="text-2xl font-bold mb-6 flex items-center">
                                    <svg className="w-6 h-6 mr-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                    Description
                                </h2>
                                <div className="prose prose-invert max-w-none text-gray-300">
                                    {problem.description.split('\n').map((line, i) => (
                                        <p key={i} className="mb-4">{line}</p>
                                    ))}
                                </div>

                                {problem.constraints && (
                                    <div className="mt-12">
                                        <h3 className="text-xl font-bold mb-4">Constraints</h3>
                                        <ul className="list-disc list-inside space-y-2 text-gray-400">
                                            {problem.constraints.split('\n').map((c, i) => (
                                                <li key={i}>{c}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="space-y-6">
                            {/* Code Editor Coming Soon - PROMINENT */}
                            <div className="glass-card rounded-2xl p-6 border-2 border-primary/40 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative overflow-hidden">
                                {/* Animated background */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 animate-pulse"></div>

                                <div className="relative z-10">
                                    <div className="flex items-start mb-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mr-4 flex-shrink-0">
                                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold mb-1 flex items-center">
                                                Code Editor Coming Soon!
                                                <span className="ml-2 px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">In Progress</span>
                                            </h3>
                                            <p className="text-sm text-gray-400">We're building something amazing</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-4">
                                        <FeatureItem text="Multi-language support (C++, Python, Java, JavaScript)" />
                                        <FeatureItem text="Real-time code execution with test cases" />
                                        <FeatureItem text="Syntax highlighting & auto-completion" />
                                        <FeatureItem text="Save your solutions automatically" />
                                        <FeatureItem text="Compare with optimal solutions" />
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-xs">
                                            <span className="text-gray-400">Development Progress</span>
                                            <span className="text-primary font-bold">65%</span>
                                        </div>
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500 animate-pulse"
                                                style={{ width: '65%' }}
                                            ></div>
                                        </div>
                                        <p className="text-xs text-gray-500 italic text-center pt-1">
                                            ⚡ Expected launch: Q1 2026
                                        </p>
                                    </div>

                                    {/* Call to action */}
                                    <div className="mt-4 p-3 bg-white/5 rounded-lg border border-white/10">
                                        <p className="text-xs text-gray-400 text-center">
                                            💡 For now, practice solving on your local IDE and we'll notify you when the editor is ready!
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Timer Component */}
                            <ProblemTimer />

                            {/* Problem Stats */}
                            <div className="glass-card rounded-2xl p-6 border border-white/10">
                                <h3 className="font-bold mb-4 flex items-center">
                                    <svg className="w-5 h-5 mr-2 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                    </svg>
                                    Problem Stats
                                </h3>
                                <div className="space-y-4">
                                    <StatRow label="Acceptance Rate" value="68.4%" />
                                    <StatRow label="Total Solved" value="1,245" />
                                    <StatRow label="Average Time" value="25 mins" />
                                    <StatRow label="Your Status" value="Not Attempted" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
