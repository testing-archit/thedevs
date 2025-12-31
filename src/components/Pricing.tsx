import Link from 'next/link';

export function Pricing() {
    return (
        <section id="pricing" className="py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Simple, Transparent <span className="gradient-text">Pricing</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Start free and upgrade when you're ready.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <FreeTier />
                    <ProTier />
                </div>
            </div>
        </section>
    );
}

function FreeTier() {
    const features = ['50 Practice Questions', 'Basic Code Editor', 'Sample Test Cases'];
    return (
        <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-2">Free</h3>
            <p className="text-gray-400 mb-6">Perfect for getting started</p>
            <div className="text-4xl font-bold mb-6">₹0 <span className="text-lg text-gray-400 font-normal">/ month</span></div>
            <ul className="space-y-3 mb-8">
                {features.map((f, i) => <PricingFeature key={i} text={f} />)}
            </ul>
            <Link href="/register" className="block w-full py-3 border border-white/20 rounded-full text-center font-semibold hover:bg-white/5 transition-colors text-white">
                Get Started
            </Link>
        </div>
    );
}

function ProTier() {
    const features = ['Unlimited Questions', 'Full Company Archives', 'All Hidden Test Cases', 'Video Solutions', 'Advanced Analytics'];
    return (
        <div className="relative glass-card rounded-2xl p-8 border-primary/50 shadow-[0_0_60px_rgba(233,30,140,0.3)]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary to-secondary rounded-full text-sm font-semibold text-white">
                Most Popular
            </div>
            <h3 className="text-2xl font-bold mb-2">Pro</h3>
            <p className="text-gray-400 mb-6">For serious placement prep</p>
            <div className="text-4xl font-bold mb-6">₹499 <span className="text-lg text-gray-400 font-normal">/ month</span></div>
            <ul className="space-y-3 mb-8">
                {features.map((f, i) => <PricingFeature key={i} text={f} />)}
            </ul>
            <Link href="/subscribe" className="block w-full py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-center font-semibold hover:opacity-90 transition-opacity text-white">
                Upgrade to Pro
            </Link>
        </div>
    );
}

function PricingFeature({ text }: { text: string }) {
    return (
        <li className="flex items-center text-gray-300">
            <svg className="w-5 h-5 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            {text}
        </li>
    );
}
