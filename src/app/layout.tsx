import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: {
        default: 'The Devs | Bennett University Coding Interview Platform',
        template: '%s | The Devs'
    },
    description: 'Master coding interviews with previous year questions from top tech companies. Practice problems asked at Google, Microsoft, Amazon & more companies that visited Bennett University.',
    keywords: ['coding interview', 'previous year questions', 'PYQ', 'Bennett University', 'placement preparation', 'DSA practice', 'LeetCode alternative', 'coding problems', 'tech interviews'],
    authors: [{ name: 'The Devs Team' }],
    creator: 'The Devs',
    publisher: 'The Devs',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://thedevs.online'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        title: 'The Devs | Bennett University Coding Interview Platform',
        description: 'Master coding interviews with previous year questions from top tech companies',
        url: 'https://thedevs.online',
        siteName: 'The Devs',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'The Devs | Bennett University Coding Interview Platform',
        description: 'Master coding interviews with previous year questions from top tech companies',
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-dark text-white min-h-screen"} suppressHydrationWarning>
                {children}
                <Toaster
                    position="top-right"
                    richColors
                    closeButton
                    theme="dark"
                />
            </body>
        </html>
    );
}
