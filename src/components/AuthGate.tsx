'use client';

import Link from 'next/link';

export function AuthGate({ children }: { children: React.ReactNode }) {
    return (
        <div className="relative">
            {/* Blurred content preview */}
            <div className="blur-sm pointer-events-none select-none">
                {children}
            </div>

            {/* Glassy overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-b from-dark/60 via-dark/80 to-dark/95 backdrop-blur-xl">
                <div className="glass-card rounded-3xl p-12 max-w-md mx-4 text-center border-2 border-primary/30 animate-fade-in">
                    {/* Lock icon with animation */}
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center animate-pulse">
                        <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>

                    {/* Message */}
                    <h2 className="text-3xl font-bold mb-4 gradient-text">
                        Premium Content
                    </h2>
                    <p className="text-gray-300 mb-8 text-lg">
                        Sign up or sign in to access our complete collection of coding problems and company questions.
                    </p>

                    {/* CTA Buttons */}
                    <div className="space-y-3">
                        <Link
                            href="/signup"
                            className="block w-full px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all text-lg"
                        >
                            Create Free Account
                        </Link>
                        <Link
                            href="/login"
                            className="block w-full px-8 py-4 bg-white/5 border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                        >
                            Sign In
                        </Link>
                    </div>

                    {/* Benefits */}
                    <div className="mt-8 pt-6 border-t border-white/10 text-left">
                        <p className="text-xs text-gray-400 mb-3 font-semibold uppercase tracking-wide">What you'll get:</p>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Access to 100+ coding problems
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Company-wise PYQ collections
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Track your progress
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
