import { NextResponse } from 'next/server';
import { seedData } from '@/actions/seed';

export async function GET() {
    try {
        const result = await seedData();
        return NextResponse.json(result);
    } catch (error) {
        return NextResponse.json({ error: String(error) }, { status: 500 });
    }
}
