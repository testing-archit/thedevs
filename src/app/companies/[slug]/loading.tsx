import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ProblemRowSkeleton } from '@/components/Skeletons';

export default function CompanyDetailLoading() {
    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={null} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 animate-pulse">
                        <div className="h-4 bg-white/5 rounded w-32 mb-4" />
                        <div className="flex items-center space-x-6">
                            <div className="w-20 h-20 rounded-2xl bg-white/5" />
                            <div>
                                <div className="h-10 bg-white/5 rounded w-64 mb-2" />
                                <div className="h-6 bg-white/5 rounded w-48" />
                            </div>
                        </div>
                    </div>

                    <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="bg-white/5 border-b border-white/10">
                                    <tr>
                                        <th className="px-8 py-5 font-semibold">Status</th>
                                        <th className="px-8 py-5 font-semibold">Problem Title</th>
                                        <th className="px-8 py-5 font-semibold">Difficulty</th>
                                        <th className="px-8 py-5 font-semibold">Topic</th>
                                        <th className="px-8 py-5 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {[...Array(6)].map((_, i) => (
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
