import { db } from '@/db';
import { topics, problems } from '@/db/schema';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';

export const metadata = {
    title: 'Browse Topics | The Devs',
    description: 'Browse problems by topic category',
};

export default async function TopicsPage() {
    const user = await getCurrentUser();
    const allTopics = await db.query.topics.findMany({
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
                            Browse by <span className="gradient-text">Topics</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Master each concept with curated problems from top companies.
                        </p>
                    </div>

                    {allTopics.length === 0 ? (
                        <div className="text-center py-24 glass-card rounded-3xl">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-lg mb-2">Topics are being organized!</p>
                            <p className="text-sm text-gray-500 italic">Check back soon as we categorize problems by topic.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {allTopics.map((topic) => (
                                <Link
                                    key={topic.id}
                                    href={`/topics/${topic.id}`}
                                    className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
                                >
                                    <div className="mb-4">
                                        <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                                            {topic.name}
                                        </h2>
                                        <p className="text-sm text-gray-400">
                                            {topic.problems.length} problem{topic.problems.length !== 1 ? 's' : ''}
                                        </p>
                                    </div>

                                    {topic.description && (
                                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                                            {topic.description}
                                        </p>
                                    )}

                                    <div className="flex items-center text-primary font-semibold text-sm">
                                        Practice Now
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
