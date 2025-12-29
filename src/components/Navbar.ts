// Navbar Component
export function Navbar(): string {
    return `
    <nav class="fixed top-0 left-0 right-0 z-50 glass-card">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-16">
                <div class="flex items-center">
                    <a href="/">
                        <img src="/logo.png" alt="The Devs" class="h-10 w-auto">
                    </a>
                </div>
                <div class="hidden md:flex items-center space-x-8">
                    <a href="#features" class="text-gray-300 hover:text-white transition-colors">Features</a>
                    <a href="#how-it-works" class="text-gray-300 hover:text-white transition-colors">How It Works</a>
                    <a href="#pricing" class="text-gray-300 hover:text-white transition-colors">Pricing</a>
                    <a href="/login" class="text-gray-300 hover:text-white transition-colors font-medium">Login</a>
                    <a href="/signup" class="px-5 py-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90 rounded-full font-medium transition-all hover:shadow-lg hover:shadow-primary/30">
                        Sign Up
                    </a>
                </div>
                <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-white">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path x-show="!mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        <path x-show="mobileMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
        <div x-show="mobileMenuOpen" x-transition class="md:hidden glass-card border-t border-white/10">
            <div class="px-4 py-4 space-y-3">
                <a href="#features" class="block text-gray-300 hover:text-white">Features</a>
                <a href="#how-it-works" class="block text-gray-300 hover:text-white">How It Works</a>
                <a href="#pricing" class="block text-gray-300 hover:text-white">Pricing</a>
                <a href="/login" class="block text-gray-300 hover:text-white font-medium">Login</a>
                <a href="/signup" class="block px-5 py-2 bg-gradient-to-r from-primary to-secondary rounded-full text-center font-medium">Sign Up</a>
            </div>
        </div>
    </nav>
    `;
}
