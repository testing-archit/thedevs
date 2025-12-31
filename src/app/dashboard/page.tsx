import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
    title: 'Dashboard | The Devs',
    description: 'Your placement preparation dashboard',
};

export default async function DashboardPage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect('/login');
    }

    return (
        <main className="min-h-screen flex flex-col">
            <Navbar user={user} />

            <div className="flex-grow pt-24 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Welcome Section */}
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Welcome back, <span className="gradient-text">{user.name}</span>!
                        </h1>
                        <p className="text-xl text-gray-400">
                            Ready to ace your placements? Let's start practicing!
                        </p>
                    </div>

                    {/* User Info Card */}
                    <div className="glass-card rounded-2xl p-6 mb-8">
                        <h2 className="text-2xl font-bold mb-4">Your Profile</h2>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Email</p>
                                <p className="text-white font-medium">{user.email}</p>
                            </div>
                            {user.course && (
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Course</p>
                                    <p className="text-white font-medium">{user.course}</p>
                                </div>
                            )}
                            {user.specialization && (
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Specialization</p>
                                    <p className="text-white font-medium">{user.specialization}</p>
                                </div>
                            )}
                            {user.yearOfStudy && (
                                <div>
                                    <p className="text-gray-400 text-sm mb-1">Year of Study</p>
                                    <p className="text-white font-medium">Year {user.yearOfStudy}</p>
                                </div>
                            )}
                            <div>
                                <p className="text-gray-400 text-sm mb-1">Subscription</p>
                                <p className="text-white font-medium">
                                    <span className={`px-3 py-1 rounded-full text-sm ${user.subscription === 'pro'
                                            ? 'bg-primary/20 text-primary'
                                            : 'bg-gray-700 text-gray-300'
                                        }`}>
                                        {user.subscription === 'pro' ? 'Pro' : 'Free'}
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        <StatCard value="0" label="Problems Solved" />
                        <StatCard value="0" label="Submissions" />
                        <StatCard value="0%" label="Success Rate" />
                    </div>

                    {/* Coming Soon Section */}
                    <div className="glass-card rounded-2xl p-8 text-center">
                        <div className="max-w-2xl mx-auto">
                            <h2 className="text-3xl font-bold mb-4">Practice Problems Coming Soon!</h2>
                            <p className="text-gray-400 text-lg mb-6">
                                We're working hard to bring you the best collection of Previous Year Questions from top companies.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <FeatureTag text="📚 Problem Sets" />
                                <FeatureTag text="🏢 Company Wise" />
                                <FeatureTag text="📊 Progress Tracking" />
                                <FeatureTag text="⚡ Code Execution" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function StatCard({ value, label }: { value: string; label: string }) {
    return (
        <div className="glass-card rounded-xl p-6">
            <div className="text-3xl font-bold gradient-text mb-2">{value}</div>
            <div className="text-gray-400">{label}</div>
        </div>
    );
}

function FeatureTag({ text }: { text: string }) {
    return (
        <div className="px-4 py-2 bg-primary/20 rounded-lg text-primary font-medium">
            {text}
        </div>
    );
}
