import HeroSection from '@/components/sections/HeroSection'
import BreadcrumbJsonLdServer from '@/components/seo/BreadcrumbJsonLdServer'
import { createPageMetadata } from '@/lib/seo'

export const metadata = createPageMetadata(
    '/privacy/',
    'Privacy Policy | OurDesk株式会社',
    'OurDesk株式会社のプライバシーポリシー・個人情報保護方針'
)

const CONTACT = {
    address: '〒107-0062 東京都港区南青山1-15-27 YMビル1階',
    company: 'OurDesk株式会社 個人情報に関するお問い合わせ窓口',
    tel: '03-5545-5204',
}

function Section({
    id,
    title,
    children,
}: {
    id?: string
    title: string
    children: React.ReactNode
}) {
    return (
        <section id={id} className="border-b border-gray-200 pb-10 last:border-b-0 last:pb-0">
            <h2 className="text-xl font-bold text-gray-900 mb-6 mt-10 first:mt-0">{title}</h2>
            <div className="text-sm text-gray-700 text-pretty leading-relaxed space-y-4 [&_ul]:list-disc [&_ul]:strong [&_ul]:pl-6 [&_ul]:space-y-1 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:space-y-1">
                {children}
            </div>
        </section>
    )
}

export default function PrivacyPage() {
    return (
        <>
            <BreadcrumbJsonLdServer path="/privacy/" name="Privacy Policy" />
            <HeroSection title="Privacy Policy" description="プライバシーポリシー" />
            <div className="bg-white">
                <div className="container mx-auto max-w-4xl px-4 py-12 md:py-16">
                    {/* 個人情報保護方針 */}
                    <Section title="個人情報保護方針">
                        <p>
                            OurDesk株式会社（以下、「当社」という。）はバックオフィスサポート・BPO事業を行っており、企業担当者様、お客様、および従業者の個人情報保護が重大な責務であると認識しております。そこで個人情報保護理念と自ら定めた行動規範に基づき、社会的使命を十分に認識し、本人の権利の保護、個人情報に関する法規制等を遵守致します。
                        </p>
                        <p>
                            また、以下に示す方針を具現化するための個人情報保護マネジメントシステムを構築し、最新のIT技術の動向、社会的要請の変化、経営環境の変動等を常に認識しながら、その継続的改善に、全社を挙げて取り組むことをここに宣言致します。
                        </p>
                        <p>
                            従業者の情報及び特定個人情報などを従業者管理に利用します。これらから当社にとって個人情報及び特定個人情報の保護が重大な責務であると同時に、個人情報などの保護を徹底することは企業の社会的責務との認識としております。以下に示す方針を具現化するための個人情報保護マネジメントシステムを構築し、継続的改善に取り組むことを宣言致します。
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 mt-4">
                            <li>当社は、事業の目的に適切な個人情報の取得・利用及び提供を行い、特定された利用目的の達成に必要な範囲を超えた個人情報の取扱いを行いません。また、そのための措置を講じます。</li>
                            <li>当社は個人情報の取扱いに関する法令、国が定める指針その他の規範を遵守致します。</li>
                            <li>当社は個人情報の漏えい、滅失、き損などのリスクに対して、合理的な安全対策を講じて防止する規程・体制を構築し、継続的に向上させていきます。また、万一の際には速やかに是正措置を講じます。</li>
                            <li>当社は個人情報取扱いに関する苦情及び相談に対して、迅速かつ誠実に対応致します。</li>
                            <li>個人情報保護マネジメントシステムは、当社を取り巻く環境の変化と実情を踏まえ、適時・適切に見直して継続的に改善をはかっていきます。</li>
                        </ol>
                        <p className="justify-end text-right mt-6 text-sm text-gray-600">
                            制定日 2025年12月1日<br />
                            最終改正日 2026年2月1日<br />
                            OurDesk株式会社 代表取締役 小宮山陽大
                        </p>
                        <div className="pt-8 w-fit mx-auto">
                            <p className="text-sm font-medium border border-gray-200 p-3 text-left leading-relaxed">
                                【個人情報保護方針に関するお問い合わせ先 兼 個人情報に関する苦情・相談窓口】<br />
                                {CONTACT.address}<br />
                                {CONTACT.company}<br />
                                TEL：{CONTACT.tel}
                            </p>
                        </div>
                    </Section>

                    <Section id="purpose" title="個人情報の利用目的の公表">
                        <p>
                            当社にご提供いただいた個人情報は、以下の目的で利用いたします。なお、別途利用目的について同意いただいた場合には、その利用目的の範囲内で利用させていただきます。（利用目的の達成に必要な範囲内で、当社より委託先に提供することがあります）
                        </p>
                        <ol className="list-decimal pl-6 space-y-2 mt-4">
                            <li><strong>お客様に関する個人情報</strong><br />業務における商品の発送、関連するアフターサービス、新商品や新たなサービスのご案内のため</li>
                            <li><strong>当社に対するお問い合わせを頂いた方に関する個人情報</strong><br />お問い合わせ対応、その管理、関連資料の送付等のため</li>
                            <li><strong>当社従業者及び退職者に関する個人情報</strong><br />人事労務管理、業務管理、健康管理、セキュリティ管理、スキルシート等のため</li>
                            <li><strong>ご提供頂いた個人番号及び特定個人情報</strong><br />法律で特定された「社会保険手続き」及び「税務処理」のため</li>
                            <li><strong>採用応募に関する個人情報</strong><br />採用業務のため</li>
                        </ol>
                    </Section>

                    <Section id="disclosure" title="保有個人データ及び第三者提供記録に関する事項の周知について">
                        <p>当社では、保有個人データの開示等（利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止、消去及び第三者への提供の停止）の請求及び第三者提供記録の開示に関する請求について、以下の事項を周知致します。</p>
                        <ol className="list-decimal pl-6 space-y-3 mt-4">
                            <li><strong>当社の名称及び住所、代表者の氏名</strong><br />名称：OurDesk株式会社／住所：{CONTACT.address}／代表者：小宮山陽大</li>
                            <li><strong>個人情報保護管理者</strong><br />役職名：管理部門責任者／連絡先：TEL {CONTACT.tel}</li>
                            <li>
                                <strong>保有個人データの利用目的</strong>
                                <ol className="!list-none pl-0 mt-2 space-y-2">
                                    <li>1）<strong>お客様に関する個人情報</strong><br /><span className="block pl-[1.5em]">バックオフィスサポート業務における商品の発送、関連するアフターサービス、新商品や新たなサービスのご案内のため</span></li>
                                    <li>2）<strong>当社に対するお問い合わせを頂いた方に関する個人情報</strong><br /><span className="block pl-[.51em]">お問い合わせ対応、その管理、関連資料の送付等のため</span></li>
                                    <li>3）<strong>当社従業者及び退職者に関する個人情報</strong><br /><span className="block pl-[1.5em]">人事労務管理、業務管理、健康管理、セキュリティ管理</span></li>
                                    <li>4）<strong>ご提供頂いた個人番号及び特定個人情報</strong><br /><span className="block pl-[1.5em]">法律で特定された「社会保険手続き」及び「税務処理」のため</span></li>
                                    <li>5）<strong>採用応募に関する個人情報</strong><br /><span className="block pl-[1.5em]">採用業務のため</span></li>
                                </ol>
                            </li>
                            <li><strong>保有個人データの取扱いに関する苦情の申し出先</strong><br />保有個人データの取扱いに関する苦情は、個人情報に関するお問い合わせ窓口でお受けいたします。</li>
                            <li><strong>開示等の手続きについて</strong><br />開示等のご請求がございます場合には、４項に記載の「個人情報に関するお問い合わせ窓口」までご連絡をお願いします。請求に必要な手順の説明と必要な申請書類などをお送りします。</li>
                            <li>
                                <strong>保有個人データ等の安全管理のために講じた措置</strong><br />
                                当社では、個人情報、特定個人情報の取扱いに関する規程、及び安全対策に関する規程を定め、規程に則った措置を講じております。
                                <ol className="!list-none pl-0 mt-2 space-y-2">
                                    <li>1）<strong>基本方針の策定</strong><br /><span className="block pl-[1.5em]">事例）個人データの適正な取り扱いの確保のため、「関係法令・ガイドライン等の遵守」、「質問及び苦情処理の窓口」等についての基本方針を策定（【安全管理のために講じた措置として本人の知り得る状態に置く内容の事例】と同様）（個人データの取り扱いに係る規律の整備）</span></li>
                                    <li>2）<strong>個人データの取り扱いに係る規律の整備</strong><br /><span className="block pl-[1.5em]">事例）個人データの取得、利用、保存等を行う場合の基本的な取扱方法を整備</span></li>
                                    <li>3）<strong>組織的安全管理措置</strong><br /><span className="block pl-[1.5em]">従業者が取り扱う個人データの範囲を明確化し、個人情報保護法や個人情報保護方針に違反している事実又は兆候を把握した場合の保護管理責任者への報告連絡体制を整備しています。個人データの取り扱いについて、定期的に点検及び監査を実施しています。</span></li>
                                    <li>4）<strong>人的安全管理措置</strong><br /><span className="block pl-[1.5em]">従業者に個人情報保護マネジメントシステムについての定期的な研修を実施し、「個人情報」の保護レベルを上げる努力をしています。個人データについての取り扱いに関する事項を就業規則に記載しています。</span></li>
                                    <li>5）<strong>物理的安全管理措置</strong><br /><span className="block pl-[1.5em]">個人データを取り扱うセキュリティ区域を設け、従業者の入退室管理及び権限を有しない者による個人データの閲覧を防止する措置を実施しています。個人データを取り扱う機器、電子媒体及び書類等の盗難又は紛失等を防止するための措置を講じています。</span></li>
                                    <li>6）<strong>技術的安全管理措置</strong><br /><span className="block pl-[1.5em]">アクセス制御を実施して、担当者及び取り扱う個人情報データベース等の範囲を限定しています。</span></li>
                                </ol>
                            </li>
                            <li><strong>個人情報に関するお問い合わせ窓口</strong><br />当社の個人情報の取り扱い全般に関するお問い合わせは、以下までご連絡ください。<br />{CONTACT.company}　TEL：{CONTACT.tel}</li>
                        </ol>
                        <p className="justify-end text-right mt-6 text-gray-700">以上</p>
                    </Section>

                    <Section id="procedure" title="保有個人データの開示等に関する手続き">
                        <p>保有個人データについては、利用目的の通知、開示、内容の訂正、追加又は削除、利用の停止、消去および第三者への提供の停止（開示等）のご請求及び第三者提供記録の開示に関するご請求について、以下の事項を周知致します。</p>
                        <p className="mt-4">当社では、次の手順で個人情報の開示等の求めに対応いたします。</p>

                        <ol className="list-decimal pl-6 space-y-4 mt-6">
                            <li>
                                <strong>開示等の求めの受付</strong>
                                <ol className="!list-none pl-0 mt-2 space-y-2">
                                    <li>
                                        <span className="block pl-[1.5em] indent-[-1.5em]"><strong>1）下記の宛先までご連絡ください。当社より「所定の用紙」を郵送いたしますので、到着後、当社の「個人情報の取扱いについて」に同意後、以下の宛先まで、必要となる資料を添付し、郵送又はご持参ください。</strong></span>
                                        <span className="block mt-2 pl-6">{CONTACT.address}</span>
                                        <span className="block mt-1 pl-6">{CONTACT.company}</span>
                                        <span className="block mt-1 mb-2 pl-6">TEL：{CONTACT.tel}</span>
                                    </li>
                                    <li><strong>2）開示等の請求をする者が、本人又は代理人であることの確認の方法</strong><br />
                                        <div className="pl-5 mt-1">
                                            <span className="block pl-[2em] indent-[-2em] mt-1">ｱ）開示等の請求をする者が本人であることの確認は、以下に定める本人を確認する書類により、苦情相談窓口責任者が確認させていただきます。</span>
                                            <span className="block pl-[2em] indent-[-2em] mt-1">ｲ）開示等の請求をする者が代理人であることの確認は、開示等の請求をする本人を確認する書類に加え、任意代理人、法定代理人（未成年後見人、成年後見人、親権者）別に、以下に定める開示対象者と代理人関係を証明する書類及び代理人本人を確認する書類により、苦情相談窓口責任者が確認させていただきます。</span>
                                            <span className="block pl-[2em] indent-[-2em] mt-1">ｳ）本人及び代理人本人を確認する書類は、以下に例示の写真付きの公的機関発行の証明書の写しが必要です。</span>
                                            <span className="block pl-[1.5em] mt-1">a）運転免許証<br />b）マイナンバーカード（表面）<br />c） その他本人確認ができる写真入りの公的証明書</span>
                                            <span className="block pl-[2em] indent-[-2em] mt-2">ｴ）開示対象者と代理人関係を証明する書類は、以下の通りです。</span>
                                            <span className="block pl-[1.5em] mt-1">a）任意代理人の場合：「開示等の結果を受領する権限を委任する」旨を記載した委任状</span>
                                            <span className="block pl-[1.5em] mt-1">b）未成年後見人の場合：戸籍謄本または登記事項証明書（何れも発行日から６ケ月以内）</span>
                                            <span className="block pl-[1.5em] mt-1">c）成年後見人の場合：登記事項証明書（発行日から６ケ月以内）</span>
                                            <span className="block pl-[1.5em] mt-1">d）親権者の場合：戸籍謄本又は住民票（何れも発行日から６ケ月以内）</span>
                                        </div>
                                    </li>
                                </ol>
                            </li>
                            <li>
                                <strong>「開示等の請求」の手数料及びその徴収方法</strong><br />
                                利用目的の通知又は開示の請求の場合にのみ、１回の請求につき、以下の金額（別途請求する郵送料を含む）を申し受けます。下記金額分の郵便切手を請求書類の郵送時に同封してください。<br /><br />
                                ・手数料金額：1,000円
                            </li>
                            <li>
                                <strong>検討結果連絡</strong>
                                <ol className="!list-none pl-0 mt-2 space-y-2">
                                    <li>1）<strong>検討結果の回答方法</strong><br /><span className="block pl-[1.5em]">以下のいずれかの方法により遅滞なくご連絡します。<br />・書面の郵送<br />・Eメール</span></li>
                                    <li>2）<strong>検討結果の送付先</strong><br /><span className="block pl-[1.5em]">以下のいずれかの適切な方法を選択し行います。<br />・登録されている本人又は法定代理人の住所への書面の郵送<br />・登録されている本人又は法定代理人のＥメールアドレスへのメールの送付</span></li>
                                </ol>
                            </li>
                        </ol>
                        <p className="justify-end text-right mt-6 text-gray-700">以上</p>
                    </Section>

                    <Section id="handling" title="個人情報の取扱いについて">
                        <p>当社は、JIS Q 15001:2023のA.7（A.6のうち本人から直接書面によって取得する場合の措置）に従い、個人情報を収集・保管いたします。この入力フォームで取得する個人情報の取り扱いは下記利用目的のためであり、この目的の範囲を超えて利用することはございません。</p>
                        <ol className="list-decimal pl-6 space-y-2 mt-4">
                            <li><strong>組織の名称</strong><br />OurDesk株式会社</li>
                            <li><strong>個人情報に関する管理者の氏名、所属及び連絡先</strong><br />個人情報保護管理者：管理部門責任者／連絡先：TEL {CONTACT.tel}</li>
                            <li><strong>個人情報の利用目的</strong><br />当社の各事業に関するお問い合わせの方の個人情報はお問い合わせにお答えするため。当社の採用応募の方の個人情報は採用業務で使用するため。</li>
                            <li><strong>個人情報取扱いの委託</strong><br />当社は、業務の一部を外部に委託しており、委託先に個人情報を預けることがあります。この場合、適切に取り扱っていると認められる委託先を選定し、契約等において個人情報の適正管理・機密保持等を取決め、適切な管理を実施させます。</li>
                            <li><strong>個人情報の開示等の請求</strong><br />お客様が当社に対してご自身の個人情報の開示等（利用目的の通知、開示、内容の訂正・追加・削除、利用の停止または消去、第三者への提供の停止）を申し出ることができます。その際、当社はご本人を確認したうえで、合理的な期間内に対応いたします。詳細は「個人情報に関するお問い合わせ窓口」までお問い合わせください。{CONTACT.address}／{CONTACT.company}／TEL：{CONTACT.tel}</li>
                            <li><strong>個人情報を提供されることの任意性について</strong><br />個人情報のご提供は任意です。ただし、必要な項目をいただけない場合、各サービス等が適切に提供できない場合があります。</li>
                            <li><strong>本Webサイトへアクセスしたことを契機として機械的に取得される情報</strong><br />当社は、Webサイトのセキュリティ確保・ユーザーサービス向上のため、Cookieにより閲覧された方の情報を取得することがあります。</li>
                        </ol>
                    </Section>
                </div >
            </div >
        </>
    )
}
