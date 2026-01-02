import { db } from '@/db';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';
import { ProblemsTable } from '@/components/ProblemsTable';

export const metadata = {
    title: 'All Problems | The Devs',
    description: 'Browse all placement preparation problems',
};

export default async function AllProblemsPage() {
    const user = await getCurrentUser();
    const allProblems = await db.query.problems.findMany({
        with: {
            company: true,
            topic: true,
        },
    });

    // Transform for client component
    const problemsData = allProblems.map((p) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        difficulty: p.difficulty as 'easy' | 'medium' | 'hard',
        companyName: p.company?.name || 'General',
        topicName: p.topic?.name || 'General',
        isPremium: p.isPremium,
    }));

    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={user} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            All <span className="gradient-text">Problems</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Practice previous year questions from all companies and topics.
                        </p>
                    </div>

                    {allProblems.length === 0 ? (
                        <div className="text-center py-24 glass-card rounded-3xl">
                            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <p className="text-gray-400 text-lg mb-2">No problems found in the database.</p>
                            <p className="text-sm text-gray-500 italic">Visit the companies page to seed some test data.</p>
                        </div>
                    ) : (
                        <ProblemsTable problems={problemsData} />
                    )}
                </div>
            </div>

            <Footer />
        </main>
    );
}
