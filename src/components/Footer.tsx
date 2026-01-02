import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="relative mt-20 border-t border-white/10">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10 pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center space-x-3 mb-6 group">
                            <Image
                                src="/logo.png"
                                alt="The Devs"
                                width={48}
                                height={48}
                                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
                            />
                            <span className="text-xl font-bold gradient-text">The Devs</span>
                        </Link>
                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                            Master placement preparation with curated PYQs from top tech companies. Your success story starts here.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-3">
                            <SocialButton
                                href="mailto:founder@thedevs.online"
                                icon={<EmailIcon />}
                                label="Email us"
                                hoverColor="hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400"
                            />
                            <SocialButton
                                href="https://www.linkedin.com/company/the-devs-platform"
                                icon={<LinkedInIcon />}
                                label="LinkedIn"
                                hoverColor="hover:bg-[#0077B5]/10 hover:border-[#0077B5]/50 hover:text-[#0077B5]"
                            />
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Platform</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/problems" text="Browse Problems" />
                            <FooterLink href="/companies" text="Companies" />
                            <FooterLink href="/topics" text="Topics" />
                            <FooterLink href="/dashboard" text="Dashboard" />
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Resources</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/#how-it-works" text="How It Works" />
                            <FooterLink href="/#pricing" text="Pricing" />
                            <FooterLink href="/#features" text="Features" />
                            <FooterLink href="/profile" text="Your Profile" />
                        </ul>
                    </div>

                    {/* Legal & Support */}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Support</h3>
                        <ul className="space-y-3">
                            <FooterLink href="/contact" text="Contact Us" />
                            <FooterLink href="/privacy" text="Privacy Policy" />
                            <FooterLink href="/terms" text="Terms of Service" />
                            <li>
                                <a
                                    href="mailto:founder@thedevs.online"
                                    className="text-gray-400 hover:text-primary transition-colors text-sm inline-flex items-center group"
                                >
                                    <svg className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Get Help
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <span>© 2025 The Devs Platform.</span>
                            <span className="hidden sm:inline">•</span>
                            <span className="hidden sm:inline">Empowering future tech leaders.</span>
                        </div>

                        {/* Made with love badge */}
                        <div className="flex items-center space-x-2 text-gray-500 text-sm">
                            <span>Made with</span>
                            <svg className="w-4 h-4 text-red-500 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                            </svg>
                            <span>for students</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Social Button Component
function SocialButton({ href, icon, label, hoverColor }: {
    href: string;
    icon: React.ReactNode;
    label: string;
    hoverColor: string;
}) {
    return (
        <a
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={label}
            className={`group relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 ${hoverColor} hover:scale-110 hover:shadow-lg`}
        >
            {icon}
            {/* Tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {label}
            </span>
        </a>
    );
}

// Footer Link Component
function FooterLink({ href, text }: { href: string; text: string }) {
    return (
        <li>
            <Link
                href={href}
                className="text-gray-400 hover:text-white transition-colors text-sm inline-flex items-center group"
            >
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300 mr-0 group-hover:mr-2"></span>
                {text}
            </Link>
        </li>
    );
}

// Email Icon
function EmailIcon() {
    return (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
    );
}

// LinkedIn Icon
function LinkedInIcon() {
    return (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
    );
}
