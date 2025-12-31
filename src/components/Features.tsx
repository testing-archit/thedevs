const features = [
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />, title: 'Company PYQ Bank', description: 'Access actual questions asked by Amazon, Google, Microsoft, TCS, Infosys, and 50+ more companies.', color: 'primary' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />, title: 'Integrated Code Editor', description: 'Write, compile, and run code in C++, Java, Python, and JavaScript directly in your browser.', color: 'secondary' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />, title: 'Instant Test Cases', description: 'Run your solutions against sample and hidden test cases. Get instant feedback.', color: 'primary' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />, title: 'Progress Analytics', description: 'Track your submission history and accuracy with a GitHub-style heatmap.', color: 'secondary' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />, title: 'Filter by Topic', description: 'Focus on Arrays, DP, Graphs, Trees, or any topic. Difficulty-based filtering too.', color: 'primary' },
    { icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />, title: 'Secure & Private', description: 'Your code runs in isolated Docker containers. Your data is encrypted.', color: 'secondary' }
];

export function Features() {
    return (
        <section id="features" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">
                        Everything You Need to <span className="gradient-text">Succeed</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A complete platform built specifically for campus placement preparation.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <FeatureCard key={i} {...f} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function FeatureCard({ icon, title, description, color }: { icon: React.ReactNode; title: string; description: string; color: string }) {
    const bgColor = color === 'primary' ? 'bg-primary/20' : 'bg-secondary/20';
    const textColor = color === 'primary' ? 'text-primary' : 'text-secondary';
    const borderHover = color === 'primary' ? 'hover:border-primary/50' : 'hover:border-secondary/50';

    return (
        <div className={`glass-card rounded-2xl p-8 ${borderHover} transition-all group`}>
            <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center mb-6`}>
                <svg className={`w-7 h-7 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {icon}
                </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <p className="text-gray-400">{description}</p>
        </div>
    );
}
