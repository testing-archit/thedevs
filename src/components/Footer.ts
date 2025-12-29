// Footer Component
export function Footer(): string {
    return `
    <footer class="border-t border-white/10 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row items-center justify-between gap-6">
                <div class="flex items-center space-x-4">
                    <img src="/logo.png" alt="The Devs" class="h-8">
                    <span class="text-gray-400">© 2025 The Devs. All rights reserved.</span>
                </div>
                <div class="flex items-center space-x-6">
                    <a href="/privacy" class="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    <a href="/terms" class="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
                    <a href="/contact" class="text-gray-400 hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </div>
    </footer>
    `;
}
