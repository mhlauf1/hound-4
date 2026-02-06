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
    <section className="relative w-full overflow-hidden py-24 lg:py-32">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/70" />

      {/* Content */}
      <div className="container relative text-center">
        {headline && (
          <h2 className="mx-auto max-w-3xl text-3xl font-normal text-white sm:text-4xl lg:text-section lg:leading-[0.95]">
            {parseHighlight(headline)}
          </h2>
        )}

        {button?.buttonText && button?.link && (
          <div className="mt-8">
            <Button text={button.buttonText} link={button.link as DereferencedLink} />
          </div>
        )}
      </div>
    </section>
  )
}
