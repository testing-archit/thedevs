// Landing Page - Server-Side Rendered with HTMX
import { Navbar } from '../components/Navbar.js';
import { Hero } from '../components/Hero.js';
import { Features } from '../components/Features.js';
import { HowItWorks } from '../components/HowItWorks.js';
import { Pricing } from '../components/Pricing.js';
import { CTA } from '../components/CTA.js';
import { Footer } from '../components/Footer.js';
import { BaseLayout } from '../components/BaseLayout.js';

export function renderLandingPage(): string {
    const content = `
        ${Navbar()}
        ${Hero()}
        ${Features()}
        ${HowItWorks()}
        ${Pricing()}
        ${CTA()}
        ${Footer()}
    `;

    return BaseLayout({
        title: 'The Devs | Bennett University PYQ Platform',
        description: 'Practice Previous Year Questions from companies that visited Bennett University.',
        content
    });
}
