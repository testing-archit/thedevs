'use client';

import { useActionState } from 'react';
import { signup } from '@/actions/auth';
import { SubmitButton } from './SubmitButton';
import Link from 'next/link';
import Image from 'next/image';

const initialState = {
    error: '',
};

export function SignupForm() {
    const [state, formAction] = useActionState(signup, initialState);

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <div className="glass-card rounded-2xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/">
                        <Image src="/logo.png" alt="The Devs" width={64} height={64} className="h-16 w-auto mx-auto mb-4" />
                    </Link>
                    <h1 className="text-2xl font-bold">Create Account</h1>
                    <p className="text-gray-400 mt-2">Start your placement prep journey</p>
                </div>

                {state?.error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">
                        {state.error}
                    </div>
                )}

                <form action={formAction} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Bennett Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder="you@bennett.edu.in"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-2">Course</label>
                            <select
                                id="course"
                                name="course"
                                required
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            >
                                <option value="">Select</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="BCA">BCA</option>
                                <option value="MCA">MCA</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="BBA">BBA</option>
                                <option value="MBA">MBA</option>
                            </select>
                        </div>
                        <div>
                            <label htmlFor="yearOfStudy" className="block text-sm font-medium text-gray-300 mb-2">Year</label>
                            <select
                                id="yearOfStudy"
                                name="yearOfStudy"
                                required
                                className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            >
                                <option value="">Select</option>
                                <option value="1">1st Year</option>
                                <option value="2">2nd Year</option>
                                <option value="3">3rd Year</option>
                                <option value="4">4th Year</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="specialization" className="block text-sm font-medium text-gray-300 mb-2">Specialization</label>
                        <select
                            id="specialization"
                            name="specialization"
                            required
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        >
                            <option value="">Select Specialization</option>
                            <option value="CSE">Computer Science (CSE)</option>
                            <option value="AI">Artificial Intelligence</option>
                            <option value="AI/ML">AI & Machine Learning</option>
                            <option value="Data Science">Data Science</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Blockchain">Blockchain</option>
                            <option value="Cyber Security">Cyber Security</option>
                            <option value="Cloud Computing">Cloud Computing</option>
                            <option value="IoT">Internet of Things</option>
                            <option value="ECE">Electronics (ECE)</option>
                            <option value="Mechanical">Mechanical</option>
                            <option value="Civil">Civil</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            minLength={8}
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder="••••••••"
                        />
                        <p className="text-gray-500 text-xs mt-1">Minimum 8 characters</p>
                    </div>

                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            required
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <SubmitButton text="Create Account" />
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Already have an account?
                        <Link href="/login" className="text-primary hover:underline ml-1">Sign in</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
