import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';

export default function Home() {
    // TODO: Get authenticated user from session if available
    const user = null;

    return (
        <main>
            <Navbar user={user} />
            <Hero />
            <Features />
            <HowItWorks />
            <Pricing />
            <CTA />
            <Footer />
        </main>
    );
}
