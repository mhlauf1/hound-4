import Image from 'next/image'
import ResolvedLink from '@/app/components/ResolvedLink'
import {Plus} from '@/app/components/icons'
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
  const {backgroundImage, headline, serviceQuickLinks} = block

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
          className="object-cover"
          sizes="100vw"
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/30" />

      {/* Content */}
      <div className="container relative flex h-full items-end pb-16 lg:pb-20">
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          {/* Headline */}
          {headline && (
            <h1 className="max-w-4xl text-4xl font-normal text-white sm:text-5xl lg:text-hero lg:leading-[0.9] lg:tracking-[-0.012em]">
              {headline}
            </h1>
          )}

          {/* Quick links */}
          {serviceQuickLinks && serviceQuickLinks.length > 0 && (
            <nav className="flex flex-col gap-3">
              {serviceQuickLinks.map((item, i) => (
                <ResolvedLink
                  key={i}
                  link={item.link as DereferencedLink}
                  className="flex items-center gap-2 text-sm text-white/80 transition-colors hover:text-white"
                >
                  <Plus className="h-3 w-3" />
                  <span>{item.label}</span>
                </ResolvedLink>
              ))}
            </nav>
          )}
        </div>
      </div>
    </section>
  )
}
