// CTA Component
export function CTA(): string {
    return `
    <section class="py-24">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="glass-card rounded-3xl p-12 relative overflow-hidden">
                <div class="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10"></div>
                <div class="relative z-10">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">Ready to Land Your Dream Job?</h2>
                    <p class="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Join thousands of Bennett University students who are preparing smarter with The Devs.</p>
                    <a href="/register" class="inline-block px-10 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">Start Practicing Now — It's Free</a>
                </div>
            </div>
        </div>
    </section>
    `;
}
