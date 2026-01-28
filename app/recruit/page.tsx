import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Recruit | OurDesk株式会社',
  description: 'OurDesk株式会社の採用情報をご紹介します。',
}

export default function RecruitPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ヒーローセクション */}
      <section className="bg-primary-500 text-white py-8 px-4 md:py-16 md:px-6">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 text-balance">
            Recruit
          </h1>
          <p className="text-lg md:text-xl text-white text-pretty">
            採用情報
          </p>
        </div>
      </section>

      {/* セクション1: メッセージ */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            私たちは、「人と人の関係性」を大切にしています。
          </h2>
        </div>
      </section>

      {/* セクション2: OurDeskの採用に込めた想い */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            OurDeskの採用に込めた想い
          </h2>
          <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed text-pretty">
            <p>
              OurDeskは、「働きたい」という気持ちを、仕事につなげる会社です。
              私たちが大切にしているのは、スキルや経歴よりも、「誰かの役に立ちたい」という想い。
            </p>
            <p>
              家庭やライフステージによって働き方が変わるのは自然なことです。
              でも、その中でも「働きたい」「自分の力を活かしたい」そう思う気持ちが消えてしまわないように。
              OurDeskは、一人ひとりに寄り添いながら、無理のない形で、長く働けるキャリアを一緒につくっていく場所です。
            </p>
          </div>
        </div>
      </section>

      {/* セクション3: 募集形態・待遇 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-balance">
            募集形態・待遇
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 text-pretty">
            働き方は、ライフスタイルに合わせて選べます。
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-balance">
                業務委託（フルリモート）
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li>• 時間単価：1,300円（税込）～</li>
                <li>• 業務ランクにより変動</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-balance">
                パート
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li>• 時間単価：1,250円～</li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-balance">
                正社員
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-gray-700">
                <li>• 月給：210,000円～</li>
              </ul>
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-600 mt-6 text-pretty">
            ※経験・スキル・稼働状況に応じて決定します。
          </p>
        </div>
      </section>

      {/* セクション4: 採用フロー */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            採用フロー
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 text-pretty">
            OurDeskの採用は、「選考」よりも「対話」を大切にしています。
          </p>
          <ol className="space-y-4 text-sm md:text-base text-gray-700">
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">1.</span>
              <span className="text-pretty">書類提出（履歴書・職務経歴書など）※かっちりした形式よりも「人柄」が伝わる内容を歓迎します</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">2.</span>
              <span className="text-pretty">秘書長との面談（どんな案件があるのか、どんなスキルが活かせるのか、不安な点も含めてお話しします）</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">3.</span>
              <span className="text-pretty">契約締結</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">4.</span>
              <span className="text-pretty">研修スタート</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">5.</span>
              <span className="text-pretty">キャリアコンサルタント面談</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">6.</span>
              <span className="text-pretty">案件参画</span>
            </li>
          </ol>
        </div>
      </section>

      {/* セクション5: キャリアの描き方 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-balance">
            キャリアの描き方
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 text-pretty">
            働き方に「正解」はありません。あなたの人生に合ったキャリアを、一緒につくります。
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* パターン1 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-balance">
                ① オフィスワーク未経験の方
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 text-pretty">
                現在：デスクワーク以外の仕事をしている、将来、結婚や出産も視野に入れている
              </p>
              <ol className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">1.</span>
                  <span className="text-pretty">OurDeskと契約・キャリア面談</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">2.</span>
                  <span className="text-pretty">今の仕事を続けながら、月数時間からスタート</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">3.</span>
                  <span className="text-pretty">研修で事務スキルを習得</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">4.</span>
                  <span className="text-pretty">OurDeskの仕事をメインに切り替え</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">5.</span>
                  <span className="text-pretty">結婚・出産などライフイベントを経験</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">6.</span>
                  <span className="text-pretty">柔軟な働き方を実現</span>
                </li>
              </ol>
            </div>

            {/* パターン2 */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-balance">
                ② 子育て中で月50～100時間しか働けない方
              </h3>
              <p className="text-sm md:text-base text-gray-700 mb-4 text-pretty">
                現在：子どもは小学生、以前は正社員、今はパート
              </p>
              <ol className="space-y-2 text-sm md:text-base text-gray-700">
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">1.</span>
                  <span className="text-pretty">キャリア面談で将来像を整理</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">2.</span>
                  <span className="text-pretty">OurDeskの仕事で実務経験を積む</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">3.</span>
                  <span className="text-pretty">必要に応じて資格取得</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">4.</span>
                  <span className="text-pretty">子どもの成長に合わせて働き方を拡大</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-primary-700 mr-2">5.</span>
                  <span className="text-pretty">案件先で正社員登用</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* セクション6: キャリアの広がり方・スキルアップ例 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            キャリアの広がり方・スキルアップ例
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-6 text-pretty">
            OurDeskでは、働き方やキャリアのスタート地点は人それぞれです。
            大切にしているのは、「今できること」から始めて、「できることを少しずつ増やしていく」こと。
            あなたのペースで、キャリアを広げていける環境があります。
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {/* 例① */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-balance">
                例①：個人事業主としてスタート
              </h3>
              <div className="space-y-2 text-sm md:text-base text-gray-700">
                <p className="text-pretty">個人事業主として業務委託でキャリアをスタート</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">実務経験を積み、スキルアップ</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">パート採用に切り替え</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">OurDeskの中で正社員として活躍</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">チーム運営・育成・マネジメントにも挑戦</p>
              </div>
            </div>

            {/* 例② */}
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-gray-800 text-balance">
                例②：パートとしてスタート
              </h3>
              <div className="space-y-2 text-sm md:text-base text-gray-700">
                <p className="text-pretty">パートとして業務をスタート</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">実務経験を積み、スキルアップ</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">OurDeskの中で正社員として活躍</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">より責任のあるポジションへ</p>
                <p className="text-center text-primary-700">または</p>
                <p className="text-pretty">気に入った案件先企業と出会う</p>
                <p className="text-center text-primary-700">↓</p>
                <p className="text-pretty">案件先企業の正社員として転職</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* セクション7: 案件参画までの流れ */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            案件参画までの流れ
          </h2>
          <ol className="space-y-4 text-sm md:text-base text-gray-700">
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">1.</span>
              <span className="text-pretty">希望する案件内容を秘書長と相談</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">2.</span>
              <span className="text-pretty">お客様から案件が入ったタイミングでアサイン</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">3.</span>
              <span className="text-pretty">必要に応じてお客様との面談</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">4.</span>
              <span className="text-pretty">業務ランク・時給決定</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-primary-700 mr-2">5.</span>
              <span className="text-pretty">半年ごとに時給UP交渉が可能</span>
            </li>
          </ol>
        </div>
      </section>

      {/* セクション8: 実際の業務の進め方 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            実際の業務の進め方
          </h2>
          <div className="space-y-6 text-sm md:text-base text-gray-700">
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-balance">体制</h3>
              <div className="space-y-1 text-pretty">
                <p>お客様</p>
                <p className="text-center text-primary-700">↓</p>
                <p>秘書長</p>
                <p className="text-center text-primary-700">↓</p>
                <p>各秘書メンバー</p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-balance">連絡ツール</h3>
              <ul className="space-y-1 text-pretty">
                <li>• お客様：指定ツール</li>
                <li>• 社内：Microsoft Teams</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-balance">稼働報告</h3>
              <ul className="space-y-1 text-pretty">
                <li>• 指示業務を実施</li>
                <li>• システム上で報告</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-800 text-balance">請求</h3>
              <p className="text-pretty">• 月ごとに業務内容をもとに請求</p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション9: OurDeskが大切にしていること */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            OurDeskが大切にしていること
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-4 text-pretty">
            私たちは、「効率」だけで人を評価しません。
          </p>
          <ul className="space-y-3 text-base md:text-lg text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">誰かの役に立ちたい</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">支える仕事がしたい</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-700 mr-2">•</span>
              <span className="text-pretty">前向きに働きたい</span>
            </li>
          </ul>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed text-pretty">
            そんな想いを、何より大切にしています。
            <br />
            スキルは後から身につけられます。
            <br />
            でも、想いは簡単には育ちません。
            <br />
            だからこそ、あなたの気持ちに、私たちは本気で向き合います。
          </p>
        </div>
      </section>

      {/* セクション10: よくある質問 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            よくある質問
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-balance">
                Q. 未経験でも大丈夫ですか？
              </h3>
              <p className="text-sm md:text-base text-gray-700 text-pretty">
                A. 研修制度があるため、問題ありません。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-balance">
                Q. 稼働時間はどれくらい必要ですか？
              </h3>
              <p className="text-sm md:text-base text-gray-700 text-pretty">
                A. 月数時間からでも可能です。
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold mb-2 text-gray-800 text-balance">
                Q. 子どもの体調不良で休めますか？
              </h3>
              <p className="text-sm md:text-base text-gray-700 text-pretty">
                A. チーム体制でフォローします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* セクション11: スタッフの声 */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 md:mb-8 text-gray-800 text-balance">
            スタッフの声
          </h2>
          <div className="bg-gray-50 rounded-lg p-6 md:p-8">
            <p className="text-sm md:text-base text-gray-700 text-pretty">
              （プレースホルダー：スタッフの声は後で追加予定）
            </p>
          </div>
        </div>
      </section>

      {/* セクション12: 最後に + 申し込みフォーム */}
      <section className="py-8 px-4 md:py-16 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-2xl">
          <h2 className="text-xl md:text-3xl font-bold mb-6 text-gray-800 text-balance">
            最後に
          </h2>
          <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed text-pretty">
            OurDeskは、「ただの仕事先」ではありません。
            あなたの人生に寄り添い、一緒に未来をつくっていく場所です。
            「働きたい」その気持ちを、大切にできる方とお会いできることを楽しみにしています。
          </p>

          {/* 申し込みフォーム */}
          <div className="bg-white rounded-lg p-6 md:p-8 shadow-md">
            <h3 className="text-lg md:text-xl font-semibold mb-6 text-gray-800 text-balance">
              申し込みフォーム
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-600 mb-2"
                >
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="ご質問やご相談がございましたら、お気軽にご記入ください"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors min-h-[44px]"
                >
                  送信する
                </button>
              </div>
            </form>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800 text-pretty">
                <strong>ご注意:</strong>
                このフォームは現在表示のみの状態です。実際の送信機能を実装するには、バックエンドAPIまたはフォームサービス（例：Formspree、SendGrid等）の連携が必要です。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
