import type { StatItem } from '@/lib/data/service'
import { cn } from '@/lib/utils'

function StatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-5 h-5 text-[#F08300]"
      aria-hidden
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

type Props = {
  stats: readonly StatItem[]
}

export default function ServiceStatsSection({ stats }: Props) {
  return (
    <section
      className="bg-white py-8 md:py-12 border-t border-b border-[#ece8de]"
      aria-label="BackDeskの実績"
    >
      <div className="container mx-auto max-w-5xl px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-0">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={cn(
                'flex flex-col items-center justify-center py-6 px-4',
                i < 2 && 'border-r border-[#ece8de]',
                i < 2 && 'border-b md:border-b-0'
              )}
            >
              <div className="w-12 h-12 rounded-full border-[1.5px] border-[#F08300]/30 flex items-center justify-center mb-3">
                <StatIcon />
              </div>
              <div className="font-serif text-2xl md:text-3xl font-normal text-gray-900 leading-none mb-1">
                {stat.num}
              </div>
              {stat.label ? (
                <div className="text-[0.65rem] tracking-[0.1em] text-[#999]">
                  {stat.label}
                </div>
              ) : null}
              {stat.note && (
                <div className="text-[0.6rem] tracking-[0.08em] text-[#999] mt-1">
                  {stat.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
