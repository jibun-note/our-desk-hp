import type { AnchorItem } from '@/lib/data/service'
import { cn } from '@/lib/utils'

type Props = {
  items: readonly AnchorItem[]
}

export default function ServiceAnchorSection({ items }: Props) {
  return (
    <section
      className="bg-white py-14 md:py-16 border-b border-[#ece8de]"
      aria-label="自分でやり続けるコスト"
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {items.map((item, i) => (
            <div
              key={i}
              className={cn(
                'px-6 py-8 md:py-10 md:px-10',
                i < items.length - 1 && 'md:border-r border-[#ece8de]'
              )}
            >
              <div className="text-xs tracking-[0.15em] text-[#999] mb-2">
                {item.label}
              </div>
              <div
                className={cn(
                  'font-serif text-gray-900 leading-tight mb-1',
                  item.valueSuffix ? 'text-3xl md:text-4xl italic' : 'text-xl md:text-2xl leading-snug font-medium'
                )}
              >
                {item.value.split('\n').map((line, j) => (
                  <span key={j}>
                    {j > 0 && <br />}
                    {line}
                    {/* 単位は1行目の後ろに1回だけ表示 */}
                    {item.valueSuffix != null && j === 0 && (
                      <span className="text-lg not-italic ml-1 font-normal">{item.valueSuffix}</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="text-sm md:text-base leading-relaxed text-[#666] text-pretty whitespace-pre-line">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
