import { MetadataRoute } from 'next';
import { db } from '@/db';
import { problems, companies, topics } from '@/db/schema';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://thedevs.online';

    // Static pages
    const staticPages = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/problems`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/companies`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/topics`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/login`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
        {
            url: `${baseUrl}/signup`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.5,
        },
    ];

    // Dynamic problem pages
    const allProblems = await db.select({
        slug: problems.slug,
        updatedAt: problems.updatedAt,
    }).from(problems);

    const problemPages = allProblems.map((problem) => ({
        url: `${baseUrl}/problems/${problem.slug}`,
        lastModified: problem.updatedAt,
        changeFrequency: 'weekly' as const,
        priority: 0.8,
    }));

    // Dynamic company pages
    const allCompanies = await db.select({
        slug: companies.slug,
    }).from(companies);

    const companyPages = allCompanies.map((company) => ({
        url: `${baseUrl}/companies/${company.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    // Dynamic topic pages
    const allTopics = await db.select({
        slug: topics.slug,
    }).from(topics);

    const topicPages = allTopics.map((topic) => ({
        url: `${baseUrl}/topics/${topic.slug}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.7,
    }));

    return [...staticPages, ...problemPages, ...companyPages, ...topicPages];
}
