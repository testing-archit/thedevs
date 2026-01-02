import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'The Devs | Bennett University PYQ Platform',
    description: 'Practice Previous Year Questions from companies that visited Bennett University.',
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
            </body>
        </html>
    );
}
