import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'

export default function StaticLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen bg-white">
            <BreadcrumbJsonLd />
            {children}
        </div>
    )
}
