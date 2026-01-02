import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function ProblemDetailLoading() {
    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={null} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12 animate-pulse">
                        <div className="h-4 bg-white/5 rounded w-48 mb-4" />

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-6 bg-white/5 rounded-full w-16" />
                                    <div className="h-6 bg-white/5 rounded-full w-24" />
                                </div>
                                <div className="h-12 bg-white/5 rounded w-96 mb-4" />
                            </div>

                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-xl bg-white/5" />
                            </div>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2 space-y-8">
                            <div className="glass-card rounded-3xl p-8 border border-white/10 animate-pulse">
                                <div className="h-6 bg-white/5 rounded w-32 mb-6" />
                                <div className="space-y-4">
                                    <div className="h-4 bg-white/5 rounded w-full" />
                                    <div className="h-4 bg-white/5 rounded w-full" />
                                    <div className="h-4 bg-white/5 rounded w-3/4" />
                                    <div className="h-4 bg-white/5 rounded w-full" />
                                    <div className="h-4 bg-white/5 rounded w-5/6" />
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="glass-card rounded-2xl p-6 border-2 border-primary/40 animate-pulse">
                                <div className="h-48 bg-white/5 rounded" />
                            </div>

                            <div className="glass-card rounded-2xl p-6 border border-white/10 animate-pulse">
                                <div className="h-40 bg-white/5 rounded" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
