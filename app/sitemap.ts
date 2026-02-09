import type { MetadataRoute } from 'next'
import { BASE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

const ROUTES: { path: string; changeFrequency: 'weekly' | 'monthly' | 'yearly'; priority: number }[] = [
    { path: '/', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/about-us/', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/company/', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/contact/', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/privacy/', changeFrequency: 'yearly', priority: 0.5 },
    { path: '/recruit/', changeFrequency: 'weekly', priority: 0.8 },
    { path: '/service/', changeFrequency: 'weekly', priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
    const lastModified = new Date()
    return ROUTES.map(({ path, changeFrequency, priority }) => ({
        url: `${BASE_URL}${path}`,
        lastModified,
        changeFrequency,
        priority,
    }))
}
