import { type StackCardItem } from '@/components/sections/StackCardsSection'
import { type StrengthCardItem } from '@/components/sections/StrengthCards'
import { contentWithLineBreaks } from '@/lib/contentHighlight'

export const stackCards: StackCardItem[] = [
    {
        title: 'OurDeskの人材育成方針',
        content: contentWithLineBreaks('私たちが大切にしているのは、\n働きたい！ \n人の力になりたい！ \n誰かを支える仕事がしたい！ \nそんな想いを持つ人たちです。\nスキルだけでなく、「働く姿勢」や想いも\n大切に育てています。'),
        imageOrder: 'right',
        imageSrc: '/images/stack-cards/01.png',
        imageAlt: 'イキイキと働くスタッフ',
        numberLabel: 'HUMAN RESOURCE DEVELOPMENT',
    },
    {
        title: 'OurDeskを支える基盤',
        content: contentWithLineBreaks('OurDeskの仕組みの土台には、\n NEUGATEグループの人材育成ノウハウがあります。\nグループ従業員 約100名、定着率は常に90%以上\n人事支援・キャリア支援の実績多数！ \n長く働ける環境づくりを続けてきたNEUGATEの仕組みを活かし、OurDeskでもスタッフの育成とキャリア支援を行っています。'),
        imageOrder: 'left',
        imageSrc: '/images/stack-cards/02.png',
        imageAlt: 'OurDeskを支えるNEUGATEグループ',
        numberLabel: 'THE FOUNDATION OF OurDesk',
    },
    {
        title: 'OurDeskのミッション',
        content: contentWithLineBreaks('私たちは、「働きたい」という気持ちが、\n 仕事につながる社会をつくりたいと考えています。\n家庭やライフステージに左右されず、\n自分らしい働き方を選びながら、誰かの役に立てる。\nそんなキャリアの形を、一人ひとりと一緒につくっていく会社です。'),
        imageOrder: 'right',
        imageSrc: '/images/stack-cards/03.png',
        imageAlt: 'ライフステージに合わせた働き方',
        numberLabel: "OurDesk's MISSION",
    },
    {
        title: '女性のキャリア支援',
        titleClass: 'text-xl md:text-3xl',
        content: contentWithLineBreaks('出産や育児、家庭との両立など、女性のキャリアには多くの分岐点があります。\n「働きたい気持ちはあるのに、選択肢が限られてしまう」\n そんな声を、私たちはたくさん聞いてきました。\nだからOurDeskは、女性が自分らしく働き続けられる仕組みづくりに本気で取り組んでいます。'),
        imageOrder: 'left',
        imageSrc: '/images/stack-cards/04.png',
        imageAlt: '女性のキャリア支援・働く親子',
        numberLabel: 'WOMEN CAREER SUPPORT',
    },
]

export const strengthCards: StrengthCardItem[] = [
    {
        step: 1,
        title: '学びの場を提供',
        description: '女性向け研修制度を通じて、仕事に必要なスキルや考え方を学べる環境を整えています。経験がなくても、ここから始められます。',
        imagePath: '/images/strength-cards/01.jpeg',
        imagePosition: 'left',
        imageAlt: '女性向け研修で学ぶ様子',
    },
    {
        step: 2,
        title: 'キャリア面談',
        description: '国家資格を持つキャリアコンサルタントが、一人ひとりと向き合い、人生や働き方の目標を一緒に考えます。あなたらしいキャリアを見つけましょう。',
        imagePath: '/images/strength-cards/02.jpeg',
        imagePosition: 'right',
        imageAlt: 'キャリア面談の様子',
    },
    {
        step: 3,
        title: '仕事につなげる',
        description: 'その先には、秘書業務や事務業務へのアサイン、職業紹介という選択肢もあります。OurDeskは、女性のキャリアの"通過点"の一つです。',
        imagePath: '/images/strength-cards/03.jpeg',
        imagePosition: 'left',
        imageAlt: '仕事につなげるサポートの様子',
    },
]
