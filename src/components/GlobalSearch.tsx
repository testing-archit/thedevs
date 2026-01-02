'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SearchResult {
    type: 'problem' | 'company';
    id: string;
    slug: string;
    title: string;
    subtitle?: string;
    difficulty?: string;
}

export function GlobalSearch() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    // Keyboard shortcut: Cmd/Ctrl + K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(true);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, []);

    // Search function with debounce
    const performSearch = useCallback(async (searchQuery: string) => {
        if (!searchQuery.trim()) {
            setResults([]);
            return;
        }

        setIsLoading(true);
        try {
            const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`);
            const data = await response.json();
            setResults(data.results || []);
        } catch (error) {
            console.error('Search error:', error);
            setResults([]);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Debounce search
    useEffect(() => {
        const timer = setTimeout(() => {
            performSearch(query);
        }, 300);

        return () => clearTimeout(timer);
    }, [query, performSearch]);

    const handleResultClick = (result: SearchResult) => {
        setIsOpen(false);
        setQuery('');
        const path = result.type === 'problem'
            ? `/problems/${result.slug}`
            : `/companies/${result.slug}`;
        router.push(path);
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center space-x-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-colors"
            >
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-gray-400 text-sm hidden md:inline">Search</span>
                <kbd className="hidden md:inline px-2 py-1 text-xs bg-white/5 border border-white/10 rounded">⌘K</kbd>
            </button>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
            />

            {/* Search Modal */}
            <div className="relative w-full max-w-2xl glass-card rounded-2xl border-2 border-primary/30 overflow-hidden animate-fade-in">
                {/* Search Input */}
                <div className="flex items-center border-b border-white/10 p-4">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search problems and companies..."
                        className="flex-1 bg-transparent outline-none text-lg placeholder-gray-500"
                        autoFocus
                    />
                    {query && (
                        <button
                            onClick={() => setQuery('')}
                            className="ml-2 text-gray-400 hover:text-white"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Results */}
                <div className="max-h-96 overflow-y-auto p-2">
                    {isLoading ? (
                        <div className="p-8 text-center text-gray-400">
                            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                            Searching...
                        </div>
                    ) : results.length > 0 ? (
                        <div className="space-y-1">
                            {results.map((result) => (
                                <button
                                    key={`${result.type}-${result.id}`}
                                    onClick={() => handleResultClick(result)}
                                    className="w-full text-left p-3 rounded-lg hover:bg-white/5 transition-colors flex items-center justify-between group"
                                >
                                    <div className="flex items-center space-x-3">
                                        {result.type === 'problem' ? (
                                            <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center">
                                                <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                                </svg>
                                            </div>
                                        )}
                                        <div>
                                            <div className="font-medium group-hover:text-primary transition-colors">
                                                {result.title}
                                            </div>
                                            {result.subtitle && (
                                                <div className="text-sm text-gray-400">
                                                    {result.subtitle}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    {result.difficulty && (
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold capitalize ${result.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' :
                                                result.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-500' :
                                                    'bg-red-500/10 text-red-500'
                                            }`}>
                                            {result.difficulty}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>
                    ) : query ? (
                        <div className="p-8 text-center text-gray-400">
                            <svg className="w-12 h-12 mx-auto mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            No results found for "{query}"
                        </div>
                    ) : (
                        <div className="p-8 text-center text-gray-400">
                            <svg className="w-12 h-12 mx-auto mb-3 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            Start typing to search problems and companies
                        </div>
                    )}
                </div>

                {/* Footer */}
                <div className="border-t border-white/10 p-3 flex items-center justify-between text-xs text-gray-500">
                    <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                            <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded mr-1">↑↓</kbd>
                            Navigate
                        </span>
                        <span className="flex items-center">
                            <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded mr-1">↵</kbd>
                            Select
                        </span>
                    </div>
                    <span className="flex items-center">
                        <kbd className="px-2 py-1 bg-white/5 border border-white/10 rounded mr-1">ESC</kbd>
                        Close
                    </span>
                </div>
            </div>
        </div>
    );
}
