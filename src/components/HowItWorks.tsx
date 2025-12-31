const steps = [
    { number: 1, title: 'Pick a Company', description: "Browse our collection of 50+ companies and select the one you're targeting." },
    { number: 2, title: 'Solve PYQs', description: 'Practice actual questions asked in their previous campus drives with our code editor.' },
    { number: 3, title: 'Get Placed!', description: "Walk into your interview with confidence. You've already solved their questions." }
];

export function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 relative">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">How It <span className="gradient-text">Works</span></h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">Get started in minutes and begin your placement prep journey.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {steps.map((s, i) => (
                        <Step key={i} {...s} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function Step({ number, title, description }: { number: number; title: string; description: string }) {
    return (
        <div className="text-center">
            <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-6 text-3xl font-bold text-white">
                {number}
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
