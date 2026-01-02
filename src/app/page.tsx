import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { HowItWorks } from '@/components/HowItWorks';
import { Pricing } from '@/components/Pricing';
import { CTA } from '@/components/CTA';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';

export default async function Home() {
    const user = await getCurrentUser();

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
