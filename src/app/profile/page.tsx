import { getCurrentUser } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export const metadata = {
    title: 'Profile | The Devs',
    description: 'Your student profile and progress',
};

export default async function ProfilePage() {
    const user = await getCurrentUser();

    if (!user) {
        redirect('/login');
    }

    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={user} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Your <span className="gradient-text">Profile</span>
                        </h1>
                        <p className="text-xl text-gray-400">
                            Track your progress and manage your account.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Profile Info */}
                        <div className="lg:col-span-2 space-y-6">
                            <div className="glass-card rounded-2xl p-8 border border-white/10">
                                <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                                        <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                                            {user.name}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                        <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                                            {user.email}
                                        </div>
                                    </div>
                                    {user.course && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Course</label>
                                            <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                                                {user.course}
                                            </div>
                                        </div>
                                    )}
                                    {user.specialization && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Specialization</label>
                                            <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                                                {user.specialization}
                                            </div>
                                        </div>
                                    )}
                                    {user.yearOfStudy && (
                                        <div>
                                            <label className="block text-sm font-medium text-gray-400 mb-2">Year of Study</label>
                                            <div className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white">
                                                Year {user.yearOfStudy}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Recent Activity - Coming Soon */}
                            <div className="glass-card rounded-2xl p-8 border border-primary/20">
                                <h2 className="text-2xl font-bold mb-4">📊 Recent Activity</h2>
                                <div className="text-center py-12">
                                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                    </div>
                                    <p className="text-gray-400 mb-2">Activity tracking coming soon!</p>
                                    <p className="text-sm text-gray-500">We'll show your submission history, practice streaks, and more.</p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Subscription */}
                            <div className="glass-card rounded-2xl p-6 border border-white/10">
                                <h3 className="font-bold mb-4">Subscription</h3>
                                <div className={`px-4 py-3 rounded-lg text-center font-medium ${user.subscription === 'pro'
                                    ? 'bg-gradient-to-r from-primary to-secondary text-white'
                                    : 'bg-gray-700 text-gray-300'
                                    }`}>
                                    {user.subscription === 'pro' ? '⭐ Pro Member' : '🆓 Free Tier'}
                                </div>
                                {user.subscription !== 'pro' && (
                                    <p className="text-sm text-gray-400 mt-4 text-center">
                                        Upgrade to Pro for advanced features
                                    </p>
                                )}
                            </div>

                            {/* Stats */}
                            <div className="glass-card rounded-2xl p-6 border border-white/10">
                                <h3 className="font-bold mb-4">Your Stats</h3>
                                <div className="space-y-4">
                                    <StatItem label="Problems Solved" value="0" />
                                    <StatItem label="Total Submissions" value="0" />
                                    <StatItem label="Success Rate" value="0%" />
                                    <StatItem label="Current Streak" value="0 days" />
                                </div>
                            </div>

                            {/* Coming Soon Badge */}
                            <div className="glass-card rounded-2xl p-6 border border-secondary/20 bg-gradient-to-br from-secondary/5 to-transparent">
                                <h3 className="font-bold mb-2 flex items-center">
                                    <span className="text-2xl mr-2">🚀</span>
                                    Coming Soon
                                </h3>
                                <ul className="text-sm text-gray-400 space-y-2">
                                    <li className="flex items-center">
                                        <span className="text-secondary mr-2">→</span>
                                        Profile customization
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-secondary mr-2">→</span>
                                        Achievement badges
                                    </li>
                                    <li className="flex items-center">
                                        <span className="text-secondary mr-2">→</span>
                                        Study groups
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

function StatItem({ label, value }: { label: string; value: string }) {
    return (
        <div className="flex justify-between items-center py-2 border-b border-white/5 last:border-0">
            <span className="text-gray-400 text-sm">{label}</span>
            <span className="font-bold text-primary">{value}</span>
        </div>
    );
}
