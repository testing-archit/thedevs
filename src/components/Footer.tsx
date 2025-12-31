import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
    return (
        <footer className="border-t border-white/10 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-4">
                        <Image src="/logo.png" alt="The Devs" width={32} height={32} className="h-8 w-auto" />
                        <span className="text-gray-400">© 2025 The Devs. All rights reserved.</span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                        <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
