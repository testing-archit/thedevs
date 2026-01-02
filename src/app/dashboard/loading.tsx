import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function DashboardLoading() {
    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={null} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 animate-pulse">
                        <div className="h-12 bg-white/5 rounded w-64 mb-4" />
                        <div className="h-6 bg-white/5 rounded w-96" />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[...Array(3)].map((_, i) => (
                            <div key={i} className="glass-card rounded-2xl p-8 animate-pulse">
                                <div className="h-16 bg-white/5 rounded mb-4" />
                                <div className="h-4 bg-white/5 rounded w-32" />
                            </div>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {[...Array(4)].map((_, i) => (
                            <div key={i} className="glass-card rounded-2xl p-6 animate-pulse">
                                <div className="h-24 bg-white/5 rounded" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
