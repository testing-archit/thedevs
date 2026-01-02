import Link from 'next/link';
import Image from 'next/image';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="float-animation mb-8">
                    <Image src="/logo.png" alt="The Devs" width={160} height={160} className="h-32 md:h-40 mx-auto w-auto" priority />
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                    Ace <span className="gradient-text">Bennett University</span> Placements
                </h1>
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                    Practice real Previous Year Questions from companies that visited Bennett University. Code, test, and master your way to your dream job.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link href="/problems" className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30 text-white">
                        Start Practicing Free
                    </Link>
                    <Link href="#features" className="px-8 py-4 border border-white/20 rounded-full font-semibold text-lg hover:bg-white/5 transition-colors text-white">
                        Explore Features
                    </Link>
                </div>

                {/* Feature Highlights */}
                <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span>Instant Search (Cmd/Ctrl+K)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Track Your Progress</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>
                        <span>Community Discussions</span>
                    </div>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    <Stat value="500+" label="PYQs" />
                    <Stat value="50+" label="Companies" />
                    <Stat value="4" label="Languages" />
                    <Stat value="10K+" label="Students" />
                </div>
            </div>
        </section>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div className="glass-card rounded-xl p-4">
            <div className="text-3xl font-bold gradient-text">{value}</div>
            <div className="text-gray-400 text-sm">{label}</div>
        </div>
    );
}
