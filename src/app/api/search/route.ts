import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/db';
import { problems, companies } from '@/db/schema';
import { or, ilike } from 'drizzle-orm';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('q');

    if (!query || query.trim().length < 2) {
        return NextResponse.json({ results: [] });
    }

    try {
        // Search problems
        const problemResults = await db.query.problems.findMany({
            where: or(
                ilike(problems.title, `%${query}%`),
                ilike(problems.description, `%${query}%`)
            ),
            with: {
                company: true,
            },
            limit: 5,
        });

        // Search companies
        const companyResults = await db.query.companies.findMany({
            where: or(
                ilike(companies.name, `%${query}%`),
                ilike(companies.description, `%${query}%`)
            ),
            limit: 5,
        });

        // Format results
        const results = [
            ...problemResults.map(p => ({
                type: 'problem' as const,
                id: p.id,
                slug: p.slug,
                title: p.title,
                subtitle: p.company?.name || 'General',
                difficulty: p.difficulty,
            })),
            ...companyResults.map(c => ({
                type: 'company' as const,
                id: c.id,
                slug: c.slug,
                title: c.name,
                subtitle: `${c.industry || 'Company'}`,
            })),
        ];

        return NextResponse.json({ results });
    } catch (error) {
        console.error('Search error:', error);
        return NextResponse.json({ results: [] }, { status: 500 });
    }
}
