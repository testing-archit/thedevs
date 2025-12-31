'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface User {
    id: string;
    name: string;
    email: string;
}

export function Navbar({ user }: { user?: User | null }) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-card">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link href={user ? "/dashboard" : "/"}>
                            <Image src="/logo.png" alt="The Devs" width={40} height={40} className="h-10 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-6">
                        {user ? (
                            <>
                                <Link href="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                                    Dashboard
                                </Link>
                                <div className="flex items-center space-x-4">
                                    <span className="text-gray-400">{user.name}</span>
                                    {/* TODO: Add proper logout action */}
                                    <form action="/api/auth/logout" method="POST">
                                        <button type="submit" className="px-4 py-2 text-gray-300 hover:text-white transition-colors border border-white/20 rounded-lg hover:border-white/40">
                                            Logout
                                        </button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <div className="flex items-center space-x-8">
                                <Link href="/#features" className="text-gray-300 hover:text-white transition-colors">Features</Link>
                                <Link href="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">How It Works</Link>
                                <Link href="/#pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link>
                                <Link href="/login" className="text-gray-300 hover:text-white transition-colors font-medium">Login</Link>
                                <Link href="/signup" className="px-5 py-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/30 text-white">
                                    Sign Up
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden text-white"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {!mobileMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            )}
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden glass-card border-t border-white/10">
                    <div className="px-4 py-4 space-y-3">
                        {user ? (
                            <>
                                <Link href="/dashboard" className="block text-gray-300 hover:text-white">Dashboard</Link>
                                <div className="pt-3 border-t border-white/10">
                                    <p className="text-gray-400 text-sm mb-2">{user.name}</p>
                                    <form action="/api/auth/logout" method="POST">
                                        <button type="submit" className="w-full px-4 py-2 text-gray-300 hover:text-white transition-colors border border-white/20 rounded-lg hover:border-white/40 text-left">
                                            Logout
                                        </button>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <Link href="/#features" className="block text-gray-300 hover:text-white">Features</Link>
                                <Link href="/#how-it-works" className="block text-gray-300 hover:text-white">How It Works</Link>
                                <Link href="/#pricing" className="block text-gray-300 hover:text-white">Pricing</Link>
                                <Link href="/login" className="block text-gray-300 hover:text-white font-medium">Login</Link>
                                <Link href="/signup" className="block px-5 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-center font-medium text-white">Sign Up</Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
}
