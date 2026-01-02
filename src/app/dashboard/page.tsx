import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import Link from 'next/link';
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

                    {/* Quick Access Cards */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <QuickAccessCard
                                title="Browse Problems"
                                description="Practice from our collection of PYQs"
                                href="/problems"
                                icon={
                                    <svg className="w-8 h-8text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                }
                            />
                            <QuickAccessCard
                                title="Companies"
                                description="Explore company-wise problems"
                                href="/companies"
                                icon={
                                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                    </svg>
                                }
                            />
                            <QuickAccessCard
                                title="Topics"
                                description="Practice by topic category"
                                href="/topics"
                                icon={
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                }
                            />
                        </div>
                    </div>

                    {/* Coming Soon Section - More Focused */}
                    <div className="grid md:grid-cols-2 gap-6">
                        <ComingSoonCard
                            title="⚡ Code Execution"
                            description="Run and test your code directly in the browser with real-time feedback"
                            progress={65}
                        />
                        <ComingSoonCard
                            title="🏆 Leaderboards"
                            description="Compete with peers and track your ranking on the platform"
                            progress={30}
                        />
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

function QuickAccessCard({ title, description, href, icon }: { title: string; description: string; href: string; icon: React.ReactNode }) {
    return (
        <Link href={href} className="group glass-card rounded-2xl p-6 hover:border-primary/50 transition-all duration-300">
            <div className="mb-4 group-hover:scale-110 transition-transform">
                {icon}
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="flex items-center text-primary font-semibold text-sm">
                Explore
                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
            </div>
        </Link>
    );
}

function ComingSoonCard({ title, description, progress }: { title: string; description: string; progress: number }) {
    return (
        <div className="glass-card rounded-2xl p-6 border border-primary/20">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-400 text-sm mb-4">{description}</p>
            <div className="space-y-2">
                <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Implementation Progress</span>
                    <span className="text-primary font-medium">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );
}

