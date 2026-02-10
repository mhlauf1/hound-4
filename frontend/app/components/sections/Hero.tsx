import Image from 'next/image'
import Button from '@/app/components/Button'
import {PawPrint} from '@/app/components/icons'
import {urlForImage} from '@/sanity/lib/utils'
import {DereferencedLink} from '@/sanity/lib/types'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type HeroProps = {
  block: ExtractPageBuilderType<'hero'>
  index: number
  pageType: string
  pageId: string
}

export default function Hero({block}: HeroProps) {
  const {backgroundImage, headline, subheadline, button} = block

  const imageUrl = backgroundImage?.asset?._ref
    ? urlForImage(backgroundImage)?.width(1920).height(1080).fit('crop').url()
    : null

  return (
    <section className="relative h-svh w-full overflow-hidden">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt={headline || ''}
          fill
          priority
          className=" object-cover"
          sizes="100vw"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Content */}
      <div className="container relative flex h-full items-end pb-16 lg:pb-20">
        <div className="flex flex-col gap-6">
          {/* Headline — clip reveal */}
          {headline && (
            <h1 className="animate-clip-reveal delay-3 max-w-4xl text-5xl font-normal text-white sm:text-6xl md:text-7xl lg:text-[84px] lg:leading-[1] md:max-w-[16ch] tracking-tight">
              {headline}
            </h1>
          )}

          {/* Subheadline — soft fade */}
          {subheadline && (
            <p className="animate-soft-fade delay-5 max-w-2xl text-lg text-white/80 sm:text-xl">
              {subheadline}
            </p>
          )}

          {/* CTA Button — soft fade */}
          {button?.buttonText && button?.link && (
            <div className="animate-soft-fade delay-5">
              <Button
                text={button.buttonText}
                link={button.link as DereferencedLink}
                className="px-8 py-4 text-base"
              />
            </div>
          )}

          {/* Social proof — soft fade */}
          <div className="animate-soft-fade delay-6 flex items-center gap-4">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/20 bg-white/10 backdrop-blur-sm"
                >
                  <PawPrint className="h-4 w-4 text-cream" />
                </div>
              ))}
            </div>
            <p className="text-sm leading-tight text-white/80">
              <span className="font-medium text-white">Trusted by hundreds</span>
              <br />
              of Cottage Grove families
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
