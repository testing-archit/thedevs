import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProblemRowSkeleton } from '@/components/Skeletons';

export default function ProblemsLoading() {
    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={null} />

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

                    {/* Skeleton Filters */}
                    <div className="glass-card rounded-2xl p-6 border border-white/10 mb-6">
                        <div className="grid md:grid-cols-3 gap-4 animate-pulse">
                            <div>
                                <div className="h-4 bg-white/5 rounded w-16 mb-2" />
                                <div className="h-10 bg-white/5 rounded" />
                            </div>
                            <div>
                                <div className="h-4 bg-white/5 rounded w-20 mb-2" />
                                <div className="h-10 bg-white/5 rounded" />
                            </div>
                            <div>
                                <div className="h-4 bg-white/5 rounded w-16 mb-2" />
                                <div className="h-10 bg-white/5 rounded" />
                            </div>
                        </div>
                    </div>

                    {/* Skeleton Table */}
                    <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="px-8 py-5 font-semibold">Status</th>
                                        <th className="px-8 py-5 font-semibold">Problem Title</th>
                                        <th className="px-8 py-5 font-semibold">Difficulty</th>
                                        <th className="px-8 py-5 font-semibold">Company</th>
                                        <th className="px-8 py-5 font-semibold">Topic</th>
                                        <th className="px-8 py-5 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[...Array(8)].map((_, i) => (
                                        <ProblemRowSkeleton key={i} />
                                    ))}
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
