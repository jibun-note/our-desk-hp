/**
 * About Us ページ用データ。
 * Value カードの配列を export。型は AboutUsValueSection で定義。
 */

import type { AboutUsValueItem } from '@/components/sections/about-us/AboutUsValueSection'

export const ABOUT_US_VALUE_ITEMS: AboutUsValueItem[] = [
    {
        num: '01',
        title: '人から始める',
        body: '私たちは、スキルや経験だけで人を判断しません。その人がどんな想いで働きたいのか。誰のために力を使いたいのか。想いや姿勢こそが、仕事の原動力だと信じています。',
    },
    {
        num: '02',
        title: '伴走する',
        body: '人のキャリアは、一直線ではありません。迷うことも、立ち止まることもあります。だからこそ私たちは、管理するのではなく、寄り添う支援を大切にしています。一人ひとりの人生に、長く、真剣に向き合います。',
    },
    {
        num: '03',
        title: 'つなげる',
        body: '「働きたい」人と、「支えてほしい」仕事。その間にある壁を、やさしく、確実につなぐ。人と仕事が出会うことで、新しい価値が生まれると、私たちは信じています。',
    },
    {
        num: '04',
        title: '支え合う',
        body: '誰かの力になることで、自分も強くなれる。支え合うことで、仕事はもっと前向きなものになる。',
    },
]
