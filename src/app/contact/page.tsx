import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { getCurrentUser } from '@/lib/auth';
import { ContactForm } from '@/components/ContactForm';
import Link from 'next/link';

export const metadata = {
    title: 'Contact Us | The Devs',
    description: 'Get in touch with The Devs team. We\'re here to help with your questions and feedback.',
};

export default async function ContactPage() {
    const user = await getCurrentUser();

    return (
        <main className="min-h-screen flex flex-col bg-dark text-white">
            <Navbar user={user} />

            <div className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Hero Section */}
                    <div className="mb-16 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-4">
                            Get in <span className="gradient-text">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            Have a question, suggestion, or just want to say hi? We'd love to hear from you.
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="glass-card rounded-3xl p-8 lg:p-10 border border-white/10">
                            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                            <ContactForm />
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            {/* Direct Contact */}
                            <div className="glass-card rounded-3xl p-8 border border-white/10">
                                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                                <div className="space-y-6">
                                    {/* Email */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Email</h3>
                                            <a href="mailto:founder@thedevs.online" className="text-gray-400 hover:text-primary transition-colors">
                                                founder@thedevs.online
                                            </a>
                                        </div>
                                    </div>

                                    {/* LinkedIn */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-[#0077B5]/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">LinkedIn</h3>
                                            <a
                                                href="https://www.linkedin.com/company/the-devs-platform"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-gray-400 hover:text-[#0077B5] transition-colors"
                                            >
                                                The Devs Platform
                                            </a>
                                        </div>
                                    </div>

                                    {/* Response Time */}
                                    <div className="flex items-start space-x-4">
                                        <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                            <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold mb-1">Response Time</h3>
                                            <p className="text-gray-400">
                                                We typically respond within 24-48 hours
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="glass-card rounded-3xl p-8 border border-white/10">
                                <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
                                <div className="space-y-3">
                                    <QuickLink href="/problems" icon="📝" text="Browse Problems" />
                                    <QuickLink href="/companies" icon="🏢" text="Companies" />
                                    <QuickLink href="/topics" icon="📚" text="Topics" />
                                    <QuickLink href="/dashboard" icon="📊" text="Dashboard" />
                                </div>
                            </div>

                            {/* FAQ Teaser */}
                            <div className="glass-card rounded-3xl p-8 border border-white/10 bg-gradient-to-br from-primary/5 to-secondary/5">
                                <div className="flex items-start space-x-4">
                                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-2">Looking for answers?</h3>
                                        <p className="text-gray-400 text-sm mb-3">
                                            Check out our documentation and guides for common questions.
                                        </p>
                                        <Link href="/#how-it-works" className="text-primary hover:text-secondary transition-colors text-sm font-medium inline-flex items-center">
                                            View Documentation
                                            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}

// Quick Link Component
function QuickLink({ href, icon, text }: { href: string; icon: string; text: string }) {
    return (
        <Link
            href={href}
            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
        >
            <span className="text-2xl">{icon}</span>
            <span className="text-gray-300 group-hover:text-white transition-colors">{text}</span>
            <svg className="w-4 h-4 ml-auto text-gray-500 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
        </Link>
    );
}
