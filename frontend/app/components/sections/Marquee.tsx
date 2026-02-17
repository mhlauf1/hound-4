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
    <section className="overflow-hidden bg-blue py-5">
      <div className="animate-marquee gap-4 md:gap-8 flex whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center">
            <span
              className="mx-10 md:mx-20 inline-block size-4 shrink-0 bg-white"
              aria-hidden="true"
            />
            <span className="text-7xl md:text-[104px] font-medium tracking-tight text-white">
              {item}
            </span>
          </span>
        ))}
      </div>
    </section>
  )
}
