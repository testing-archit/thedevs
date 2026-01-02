import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CompanyCardSkeleton } from '@/components/Skeletons';

export default function CompaniesLoading() {
    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={null} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Browse <span className="gradient-text">Companies</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Practice previous year questions from top tech companies.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[...Array(6)].map((_, i) => (
                            <CompanyCardSkeleton key={i} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
