// Login Page Component
import { BaseLayout } from '../components/BaseLayout.js';

export function renderLoginPage(error?: string): string {
    const content = `
    <div class="min-h-screen flex items-center justify-center py-12 px-4">
        <div class="glass-card rounded-2xl p-8 w-full max-w-md">
            <div class="text-center mb-8">
                <a href="/">
                    <img src="/logo.png" alt="The Devs" class="h-16 mx-auto mb-4">
                </a>
                <h1 class="text-2xl font-bold">Welcome Back</h1>
                <p class="text-gray-400 mt-2">Sign in to continue practicing</p>
            </div>
            
            ${error ? `<div class="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">${error}</div>` : ''}
            
            <form hx-post="/api/auth/login" hx-target="body" hx-swap="outerHTML" class="space-y-6">
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="you@bennett.edu.in"
                    >
                </div>
                
                <div>
                    <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required
                        class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="••••••••"
                    >
                </div>
                
                <button 
                    type="submit"
                    class="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity"
                >
                    Sign In
                </button>
            </form>
            
            <div class="mt-6 text-center">
                <p class="text-gray-400">
                    Don't have an account? 
                    <a href="/signup" class="text-primary hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    </div>
    `;

    return BaseLayout({
        title: 'Login | The Devs',
        description: 'Sign in to The Devs - Bennett University PYQ Platform',
        content
    });
}
