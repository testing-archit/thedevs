// Pricing Component
export function Pricing(): string {
    return `
    <section id="pricing" class="py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-5xl font-bold mb-4">Simple, Transparent <span class="gradient-text">Pricing</span></h2>
                <p class="text-gray-400 text-lg max-w-2xl mx-auto">Start free and upgrade when you're ready.</p>
            </div>
            <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                ${FreeTier()}
                ${ProTier()}
            </div>
        </div>
    </section>
    `;
}

function FreeTier(): string {
    const features = ['50 Practice Questions', 'Basic Code Editor', 'Sample Test Cases'];
    return `
    <div class="glass-card rounded-2xl p-8">
        <h3 class="text-2xl font-bold mb-2">Free</h3>
        <p class="text-gray-400 mb-6">Perfect for getting started</p>
        <div class="text-4xl font-bold mb-6">₹0 <span class="text-lg text-gray-400 font-normal">/ month</span></div>
        <ul class="space-y-3 mb-8">${features.map(f => PricingFeature(f)).join('')}</ul>
        <a href="/register" class="block w-full py-3 border border-white/20 rounded-full text-center font-semibold hover:bg-white/5 transition-colors">Get Started</a>
    </div>
    `;
}

function ProTier(): string {
    const features = ['Unlimited Questions', 'Full Company Archives', 'All Hidden Test Cases', 'Video Solutions', 'Advanced Analytics'];
    return `
    <div class="relative glass-card rounded-2xl p-8 border-primary/50 glow-pink">
        <div class="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold">Most Popular</div>
        <h3 class="text-2xl font-bold mb-2">Pro</h3>
        <p class="text-gray-400 mb-6">For serious placement prep</p>
        <div class="text-4xl font-bold mb-6">₹499 <span class="text-lg text-gray-400 font-normal">/ month</span></div>
        <ul class="space-y-3 mb-8">${features.map(f => PricingFeature(f)).join('')}</ul>
        <a href="/subscribe" class="block w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-center font-semibold hover:opacity-90 transition-opacity"
           hx-get="/api/subscribe" hx-target="#modal">Upgrade to Pro</a>
    </div>
    `;
}

function PricingFeature(text: string): string {
    return `<li class="flex items-center text-gray-300"><svg class="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>${text}</li>`;
}
