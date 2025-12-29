// Dashboard Page - For Authenticated Users
import { BaseLayout } from '../components/BaseLayout.js';
import { Navbar } from '../components/Navbar.js';
import { Footer } from '../components/Footer.js';

interface User {
    id: string;
    name: string;
    email: string;
    course?: string | null;
    specialization?: string | null;
    yearOfStudy?: number | null;
    subscription?: string;
}

export function renderDashboardPage(user: User): string {
    const content = `
        ${Navbar(user)}
        <main class="pt-24 pb-16 min-h-screen">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <!-- Welcome Section -->
                <div class="mb-12">
                    <h1 class="text-4xl md:text-5xl font-bold mb-4">
                        Welcome back, <span class="gradient-text">${user.name}</span>!
                    </h1>
                    <p class="text-xl text-gray-400">
                        Ready to ace your placements? Let's start practicing!
                    </p>
                </div>

                <!-- User Info Card -->
                <div class="glass-card rounded-2xl p-6 mb-8">
                    <h2 class="text-2xl font-bold mb-4">Your Profile</h2>
                    <div class="grid md:grid-cols-2 gap-4">
                        <div>
                            <p class="text-gray-400 text-sm mb-1">Email</p>
                            <p class="text-white font-medium">${user.email}</p>
                        </div>
                        ${user.course ? `
                        <div>
                            <p class="text-gray-400 text-sm mb-1">Course</p>
                            <p class="text-white font-medium">${user.course}</p>
                        </div>
                        ` : ''}
                        ${user.specialization ? `
                        <div>
                            <p class="text-gray-400 text-sm mb-1">Specialization</p>
                            <p class="text-white font-medium">${user.specialization}</p>
                        </div>
                        ` : ''}
                        ${user.yearOfStudy ? `
                        <div>
                            <p class="text-gray-400 text-sm mb-1">Year of Study</p>
                            <p class="text-white font-medium">Year ${user.yearOfStudy}</p>
                        </div>
                        ` : ''}
                        <div>
                            <p class="text-gray-400 text-sm mb-1">Subscription</p>
                            <p class="text-white font-medium">
                                <span class="px-3 py-1 rounded-full ${user.subscription === 'pro' ? 'bg-primary/20 text-primary' : 'bg-gray-700 text-gray-300'}">
                                    ${user.subscription === 'pro' ? 'Pro' : 'Free'}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Quick Stats -->
                <div class="grid md:grid-cols-3 gap-6 mb-8">
                    <div class="glass-card rounded-xl p-6">
                        <div class="text-3xl font-bold gradient-text mb-2">0</div>
                        <div class="text-gray-400">Problems Solved</div>
                    </div>
                    <div class="glass-card rounded-xl p-6">
                        <div class="text-3xl font-bold gradient-text mb-2">0</div>
                        <div class="text-gray-400">Submissions</div>
                    </div>
                    <div class="glass-card rounded-xl p-6">
                        <div class="text-3xl font-bold gradient-text mb-2">0%</div>
                        <div class="text-gray-400">Success Rate</div>
                    </div>
                </div>

                <!-- Coming Soon Section -->
                <div class="glass-card rounded-2xl p-8 text-center">
                    <div class="max-w-2xl mx-auto">
                        <h2 class="text-3xl font-bold mb-4">Practice Problems Coming Soon!</h2>
                        <p class="text-gray-400 text-lg mb-6">
                            We're working hard to bring you the best collection of Previous Year Questions from top companies.
                        </p>
                        <div class="flex flex-wrap justify-center gap-4">
                            <div class="px-4 py-2 bg-primary/20 rounded-lg text-primary font-medium">📚 Problem Sets</div>
                            <div class="px-4 py-2 bg-primary/20 rounded-lg text-primary font-medium">🏢 Company Wise</div>
                            <div class="px-4 py-2 bg-primary/20 rounded-lg text-primary font-medium">📊 Progress Tracking</div>
                            <div class="px-4 py-2 bg-primary/20 rounded-lg text-primary font-medium">⚡ Code Execution</div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        ${Footer()}
    `;

    return BaseLayout({
        title: 'Dashboard | The Devs',
        description: 'Your placement preparation dashboard',
        content
    });
}

