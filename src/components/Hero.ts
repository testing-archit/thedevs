// Hero Component
export function Hero(): string {
    return `
    <section class="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>
        
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div class="float-animation mb-8">
                <img src="/logo.png" alt="The Devs" class="h-32 md:h-40 mx-auto">
            </div>
            <h1 class="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                Ace <span class="gradient-text">Bennett University</span> Placements
            </h1>
            <p class="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
                Practice real Previous Year Questions from companies that visited Bennett University. Code, test, and master your way to your dream job.
            </p>
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/problems" class="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary/30">
                    Start Practicing Free
                </a>
                <a href="#features" class="px-8 py-4 border border-white/20 rounded-full font-semibold text-lg hover:bg-white/5 transition-colors">
                    Explore Features
                </a>
            </div>
            
            <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                ${Stat('500+', 'PYQs')}
                ${Stat('50+', 'Companies')}
                ${Stat('4', 'Languages')}
                ${Stat('10K+', 'Students')}
            </div>
        </div>
    </section>
    `;
}

function Stat(value: string, label: string): string {
    return `
    <div class="glass-card rounded-xl p-4">
        <div class="text-3xl font-bold gradient-text">${value}</div>
        <div class="text-gray-400 text-sm">${label}</div>
    </div>
    `;
}
