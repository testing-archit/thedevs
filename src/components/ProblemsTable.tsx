'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Problem {
    id: string;
    title: string;
    difficulty: 'easy' | 'medium' | 'hard';
    companyName: string;
    topicName: string;
    isPremium: boolean;
}

export function ProblemsTable({ problems }: { problems: Problem[] }) {
    const [searchQuery, setSearchQuery] = useState('');
    const [difficultyFilter, setDifficultyFilter] = useState<string>('all');
    const [sortBy, setSortBy] = useState<'title' | 'difficulty'>('title');

    // Filter and sort problems
    const filteredProblems = problems.filter((problem) => {
        const matchesSearch = problem.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            problem.companyName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            problem.topicName.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesDifficulty = difficultyFilter === 'all' || problem.difficulty === difficultyFilter;
        return matchesSearch && matchesDifficulty;
    });

    const sortedProblems = [...filteredProblems].sort((a, b) => {
        if (sortBy === 'title') {
            return a.title.localeCompare(b.title);
        } else {
            const difficultyOrder = { easy: 1, medium: 2, hard: 3 };
            return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        }
    });

    return (
        <div className="space-y-6">
            {/* Filters */}
            <div className="glass-card rounded-2xl p-6 border border-white/10">
                <div className="grid md:grid-cols-3 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Search</label>
                        <input
                            type="text"
                            placeholder="Search problems..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Difficulty</label>
                        <select
                            value={difficultyFilter}
                            onChange={(e) => setDifficultyFilter(e.target.value)}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
                        >
                            <option value="all">All</option>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-400 mb-2">Sort By</label>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'title' | 'difficulty')}
                            className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary text-white"
                        >
                            <option value="title">Title</option>
                            <option value="difficulty">Difficulty</option>
                        </select>
                    </div>
                </div>
                <div className="mt-4 text-sm text-gray-400">
                    Showing {sortedProblems.length} of {problems.length} problems
                </div>
            </div>

            {/* Table */}
            <div className="glass-card rounded-3xl overflow-hidden border border-white/10">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-white/5 border-b border-white/10">
                            <tr>
                                <th className="px-8 py-5 font-semibold">Status</th>
                                <th className="px-8 py-5 font-semibold">Problem Title</th>
                                <th className="px-8 py-5 font-semibold">Difficulty</th>
                                <th className="px-8 py-5 font-semibold">Company</th>
                                <th className="px-8 py-5 font-semibold">Topic</th>
                                <th className="px-8 py-5 font-semibold text-right">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                            {sortedProblems.length === 0 ? (
                                <tr>
                                    <td colSpan={6} className="px-8 py-12 text-center text-gray-500">
                                        No problems found matching your filters.
                                    </td>
                                </tr>
                            ) : (
                                sortedProblems.map((problem) => (
                                    <tr key={problem.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-8 py-5">
                                            <div className="w-6 h-6 rounded-full border-2 border-white/10 flex items-center justify-center">
                                                <div className="w-2 h-2 rounded-full bg-white/10"></div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5">
                                            <Link href={`/problems/${problem.id}`} className="font-medium text-lg hover:text-primary transition-colors flex items-center">
                                                {problem.title}
                                                {problem.isPremium && (
                                                    <svg className="w-4 h-4 ml-2 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                )}
                                            </Link>
                                        </td>
                                        <td className="px-8 py-5">
                                            <span className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${problem.difficulty === 'easy' ? 'bg-green-500/10 text-green-500' :
                                                problem.difficulty === 'medium' ? 'bg-yellow-500/10 text-yellow-500' :
                                                    'bg-red-500/10 text-red-500'
                                                }`}>
                                                {problem.difficulty}
                                            </span>
                                        </td>
                                        <td className="px-8 py-5 text-gray-400">
                                            {problem.companyName}
                                        </td>
                                        <td className="px-8 py-5 text-gray-400">
                                            {problem.topicName}
                                        </td>
                                        <td className="px-8 py-5 text-right">
                                            <Link
                                                href={`/problems/${problem.id}`}
                                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-all group-hover:scale-110"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                                                </svg>
                                            </Link>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
