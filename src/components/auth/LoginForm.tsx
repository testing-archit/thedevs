'use client';

import { useActionState } from 'react';
import { login } from '@/actions/auth';
import { SubmitButton } from './SubmitButton';
import Link from 'next/link';
import Image from 'next/image';

const initialState = {
    error: '',
};

export function LoginForm() {
    const [state, formAction] = useActionState(login, initialState);

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4">
            <div className="glass-card rounded-2xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <Link href="/">
                        <Image src="/logo.png" alt="The Devs" width={64} height={64} className="h-16 w-auto mx-auto mb-4" />
                    </Link>
                    <h1 className="text-2xl font-bold">Welcome Back</h1>
                    <p className="text-gray-400 mt-2">Sign in to continue practicing</p>
                </div>

                {state?.error && (
                    <div className="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">
                        {state.error}
                    </div>
                )}

                <form action={formAction} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder="you@bennett.edu.in"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            className="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                            placeholder="••••••••"
                        />
                    </div>

                    <SubmitButton text="Sign In" />
                </form>

                <div className="mt-6 text-center">
                    <p className="text-gray-400">
                        Don't have an account?
                        <Link href="/signup" className="text-primary hover:underline ml-1">Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
