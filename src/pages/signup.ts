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
                    <div class="relative">
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            required
                            minlength="8"
                            class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors pr-10"
                            placeholder="••••••••"
                        >
                        <button type="button" onclick="togglePassword(this)" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
                    <p class="text-gray-500 text-xs mt-1">Minimum 8 characters</p>
                </div>
                
                <div>
                    <label for="confirmPassword" class="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
                    <div class="relative">
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            required
                            class="w-full px-4 py-3 bg-dark border border-white/10 rounded-lg focus:border-primary focus:outline-none transition-colors pr-10"
                            placeholder="••••••••"
                        >
                        <button type="button" onclick="togglePassword(this)" class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </button>
                    </div>
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
    <script>
        if (typeof window.togglePassword === 'undefined') {
            window.togglePassword = function(btn) {
                const input = btn.previousElementSibling;
                const type = input.getAttribute('type') === 'password' ? 'text' : 'password';
                input.setAttribute('type', type);
                
                if (type === 'text') {
                    btn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>\`;
                } else {
                    btn.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>\`;
                }
            }
        }
    </script>
    `;

    return BaseLayout({
        title: 'Sign Up | The Devs',
        description: 'Create your account on The Devs - Bennett University PYQ Platform',
        content
    });
}
