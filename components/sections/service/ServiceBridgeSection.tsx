type Props = {
  headline: string
  body: string
}

export default function ServiceBridgeSection({ headline, body }: Props) {
  return (
    <section className="bg-white py-20 md:py-32" aria-label={headline}>
      <div className="container mx-auto max-w-3xl px-4 md:px-8 text-center">
        <h2 className="font-serif text-2xl md:text-3xl text-gray-900 text-balance mb-5 leading-snug">
          {headline}
        </h2>
        <p className="text-sm md:text-base text-[#555] leading-relaxed whitespace-pre-line text-pretty">
          {body}
        </p>
      </div>
    </section>
  )
}
