import Image from 'next/image'
import Button from '@/app/components/Button'
import {urlForImage} from '@/sanity/lib/utils'
import {DereferencedLink} from '@/sanity/lib/types'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type CtaBannerProps = {
  block: ExtractPageBuilderType<'ctaBanner'>
  index: number
  pageType: string
  pageId: string
}

function parseHighlight(text: string) {
  // Splits "Book a tour for your *best friend* today" into segments
  const parts = text.split(/\*([^*]+)\*/)
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <span key={i} className="text-blue">
        {part}
      </span>
    ) : (
      <span key={i}>{part}</span>
    ),
  )
}

export default function CtaBanner({block}: CtaBannerProps) {
  const {backgroundImage, headline, button} = block

  const imageUrl = backgroundImage?.asset?._ref
    ? urlForImage(backgroundImage)?.width(1920).height(800).fit('crop').url()
    : null

  return (
    <section className="relative w-full min-h-[70vh] lg:h-[80vh] pb-32 lg:pb-48">
      {imageUrl && <Image src={imageUrl} alt="" fill className="object-cover" sizes="100vw" />}

      {/* Subtle overlay for text legibility */}
      <div className="absolute inset-0 bg-dark/30" />

      {/* Content — right-aligned */}
      <div className="container relative flex h-full min-h-[60vh] lg:min-h-[80vh] items-center justify-end">
        <div className="max-w-2xl text-right">
          {headline && (
            <h2 className=" font-normal text-white text-start text-5xl lg:text-[4.5rem] lg:leading-[1.05]">
              {parseHighlight(headline)}
            </h2>
          )}

          {button?.buttonText && button?.link && (
            <div className="mt-8 flex ">
              <Button text={button.buttonText} link={button.link as DereferencedLink} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
