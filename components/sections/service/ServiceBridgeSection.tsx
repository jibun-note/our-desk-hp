import HandwrittenLine from '@/components/ui/HandwrittenLine'

type Props = {
  headline: string
  body: string
}

export default function ServiceBridgeSection({ headline, body }: Props) {
  return (
    <section className="bg-white py-20 md:py-32" aria-label={headline}>
      <div className="container mx-auto max-w-3xl px-4 md:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 text-balance leading-tight whitespace-pre-line mb-2">
          {headline}
        </h2>
        <div className="mb-10 flex justify-center">
          <HandwrittenLine variant={1} color="#F08300" width={120} align="left" />
        </div>
        <p className="text-sm md:text-base text-[#555] leading-relaxed whitespace-pre-line text-pretty">
          {body}
        </p>
      </div>
    </section>
  )
}
