// Signup Page Component
import { BaseLayout } from '../components/BaseLayout.js';

export function renderSignupPage(error?: string): string {
    const content = `
    <div class="min-h-screen flex items-center justify-center py-12 px-4">
        <div class="glass-card rounded-2xl p-8 w-full max-w-md">
            <div class="text-center mb-8">
                <a href="/">
                    <img src="/logo.png" alt="The Devs" class="h-16 mx-auto mb-4">
                </a>
                <h1 class="text-2xl font-bold">Create Account</h1>
                <p class="text-gray-400 mt-2">Start your placement prep journey</p>
            </div>
            
            ${error ? `<div class="bg-red-500/20 border border-red-500/50 text-red-300 px-4 py-3 rounded-lg mb-6">${error}</div>` : ''}
            
            <form hx-post="/api/auth/signup" hx-target="body" hx-swap="outerHTML" class="space-y-4">
                <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Full Name</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="John Doe"
                    >
                </div>
                
                <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Bennett Email</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        required
                        class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="you@bennett.edu.in"
                    >
                </div>
                
                <!-- Student Profile Fields -->
                <div class="grid grid-cols-2 gap-4">
                    <div>
                        <label for="course" class="block text-sm font-medium text-gray-300 mb-2">Course</label>
                        <select 
                            id="course" 
                            name="course" 
                            required
                            class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
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
                        <label for="yearOfStudy" class="block text-sm font-medium text-gray-300 mb-2">Year</label>
                        <select 
                            id="yearOfStudy" 
                            name="yearOfStudy" 
                            required
                            class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
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
                    <label for="specialization" class="block text-sm font-medium text-gray-300 mb-2">Specialization</label>
                    <select 
                        id="specialization" 
                        name="specialization" 
                        required
                        class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
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
                    <label for="password" class="block text-sm font-medium text-gray-300 mb-2">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required
                        minlength="8"
                        class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="••••••••"
                    >
                    <p class="text-gray-500 text-xs mt-1">Minimum 8 characters</p>
                </div>
                
                <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                    <input 
                        type="password" 
                        id="confirmPassword" 
                        name="confirmPassword" 
                        required
                        class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors"
                        placeholder="••••••••"
                    >
                </div>
                
                <button 
                    type="submit"
                    class="w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-lg font-semibold hover:opacity-90 transition-opacity mt-2"
                >
                    Create Account
                </button>
            </form>
            
            <div class="mt-6 text-center">
                <p class="text-gray-400">
                    Already have an account? 
                    <a href="/login" class="text-primary hover:underline">Sign in</a>
                </p>
            </div>
        </div>
    </div>
    `;

    return BaseLayout({
        title: 'Sign Up | The Devs',
        description: 'Create your account on The Devs - Bennett University PYQ Platform',
        content
    });
}
