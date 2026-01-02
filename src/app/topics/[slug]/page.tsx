import { db } from '@/db';
import { topics, problems } from '@/db/schema';
import { eq } from 'drizzle-orm';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const topic = await db.query.topics.findFirst({
        where: eq(topics.slug, slug),
    });

    if (!topic) {
        return {
            title: 'Topic Not Found | The Devs',
        };
    }

    return {
        title: `${topic.name} Problems | The Devs`,
        description: topic.description || `Practice ${topic.name} problems from top companies`,
    };
}

export default async function TopicProblemsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const user = await getCurrentUser();
    const topic = await db.query.topics.findFirst({
        where: eq(topics.slug, slug),
        with: {
            problems: {
                with: {
                    company: true
                }
            },
        },
    });

    if (!topic) {
        notFound();
    }

    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={user} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <Link href="/topics" className="text-primary hover:underline mb-4 inline-block flex items-center">
                            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Topics
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            <span className="gradient-text">{topic.name}</span> Problems
                        </h1>
                        <p className="text-xl text-gray-400">
                            {topic.description || `Practice ${topic.name} problems from various companies.`}
                        </p>
                    </div>

                    <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="px-8 py-5 font-semibold">Status</th>
                                        <th className="px-8 py-5 font-semibold">Problem Title</th>
                                        <th className="px-8 py-5 font-semibold">Difficulty</th>
                                        <th className="px-8 py-5 font-semibold">Company</th>
                                        <th className="px-8 py-5 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {topic.problems.length === 0 ? (
                                        <tr>
                                            <td colSpan={5} className="px-8 py-12 text-center text-gray-500">
                                                No problems found for this topic yet.
                                            </td>
                                        </tr>
                                    ) : (
                                        topic.problems.map((problem) => (
                                            <tr key={problem.id} className="hover:bg-white/[0.02] transition-colors group">
                                                <td className="px-8 py-5">
                                                    <div className="w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center">
                                                        <div className="w-2 h-2 rounded-full bg-white/10"></div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-5">
                                                    <Link href={`/problems/${problem.slug}`} className="font-medium text-lg hover:text-primary transition-colors">
                                                        {problem.title}
                                                    </Link>
                                                </td>
                                                <td className="px-8 py-5">
                                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${problem.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' :
                                                        problem.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-500' :
                                                            'bg-red-500/10 text-red-500'
                                                        }`}>
                                                        {problem.difficulty}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-5 text-gray-400">
                                                    {problem.company?.name || 'General'}
                                                </td>
                                                <td className="px-8 py-5 text-right">
                                                    <Link
                                                        href={`/problems/${problem.slug}`}
                                                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all group-hover:scale-110"
                                                    >
                                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                                                        </svg>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
