import {ExtractPageBuilderType} from '@/sanity/lib/types'

type MarqueeProps = {
  block: ExtractPageBuilderType<'marquee'>
  index: number
  pageType: string
  pageId: string
}

export default function Marquee({block}: MarqueeProps) {
  const {items} = block

  if (!items || items.length === 0) return null

  // Duplicate items 4x for seamless loop
  const repeated = [...items, ...items, ...items, ...items]

  return (
    <section className="overflow-hidden border-y border-dark/10 bg-cream py-5">
      <div className="animate-marquee flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-6 inline-block h-2 w-2 shrink-0 rotate-45 bg-blue" aria-hidden="true" />
            <span className="text-sm font-medium uppercase tracking-[0.1em] text-dark">
              {item}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
