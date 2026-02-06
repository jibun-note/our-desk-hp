'use client'

import { StaggeredMenu, type StaggeredMenuItem } from '@/components/ui/StaggeredMenu'

const menuItems: StaggeredMenuItem[] = [
    { href: '/service', label: 'Service', ariaLabel: 'Service ページへ' },
    { href: '/about-us', label: 'About us', ariaLabel: 'About us ページへ' },
    { href: '/company', label: 'Company', ariaLabel: 'Company ページへ' },
    { href: '/recruit', label: 'Recruit', ariaLabel: 'Recruit ページへ' },
    { href: '/contact', label: 'Contact', ariaLabel: 'Contact ページへ' },
].map(({ href, label }) => ({
    label,
    ariaLabel: `${label} ページへ`,
    link: href,
}))

export default function DeskTopHeader() {
    return (
        <div className="header-desktop-menu h-16 w-full">
            <StaggeredMenu
                isFixed
                position="right"
                items={menuItems}
                displaySocials={false}
                displayItemNumbering={true}
                logoUrl="/OurDesk_logo.png"
                logoAlt="OurDesk株式会社"
                logoHref="/"
                menuButtonColor="#333333"
                openMenuButtonColor="#333333"
                changeMenuColorOnOpen={false}
                accentColor="#F08300"
                colors={['#FDD000', '#F08300']}
                closeOnClickAway={true}
                className="header-desktop-menu"
            />
        </div>
    )
}
