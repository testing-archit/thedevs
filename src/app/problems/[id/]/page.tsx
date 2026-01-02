import { db } from '@/db';
import { problems, companies, topics } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const problem = await db.query.problems.findFirst({
        where: eq(problems.id, id),
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

export default async function ProblemDetailsPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const user = await getCurrentUser();
    const problem = await db.query.problems.findFirst({
        where: eq(problems.id, id),
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
                        <Link href={`/companies/${problem.companyId}`} className="text-primary hover:underline mb-4 inline-block flex items-center">
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

                        <div className="space-y-8">
                            <div className="glass-card rounded-3xl p-8 border border-primary/30 relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                                <div className="relative z-10 text-center">
                                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3">Code Editor</h3>
                                    <p className="text-gray-400 mb-6"> Our interactive code editor is coming soon! You will be able to solve and test your solutions directly in the browser.</p>
                                    <div className="space-y-3">
                                        <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                                            <div className="w-2/3 h-full bg-primary/50 animate-pulse"></div>
                                        </div>
                                        <p className="text-xs text-primary font-medium uppercase tracking-wider">Implementation in progress</p>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-card rounded-3xl p-8 border border-white/10">
                                <h3 className="text-xl font-bold mb-6 flex items-center">
                                    <svg className="w-5 h-5 mr-3 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Stats & Info
                                </h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-gray-400">Acceptance Rate</span>
                                        <span className="font-medium">68.4%</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-gray-400">Total Solved</span>
                                        <span className="font-medium">1,245</span>
                                    </div>
                                    <div className="flex justify-between items-center py-3 border-b border-white/5">
                                        <span className="text-gray-400">Avg. Time</span>
                                        <span className="font-medium">25 mins</span>
                                    </div>
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
