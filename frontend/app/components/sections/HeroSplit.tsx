import {PortableTextBlock} from 'next-sanity'

import SectionLabel from '@/app/components/SectionLabel'
import Button from '@/app/components/Button'
import FadeIn from '@/app/components/FadeIn'
import {Star} from '@/app/components/icons'
import PortableText from '@/app/components/PortableText'
import Image from '@/app/components/SanityImage'
import {DereferencedLink} from '@/sanity/lib/types'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type HeroSplitProps = {
  block: ExtractPageBuilderType<'heroSplit'>
  index: number
  pageType: string
  pageId: string
}

export default function HeroSplit({block}: HeroSplitProps) {
  const {label, headline, description, button, rating, reviewCount, image, showBlueAccent} = block

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <div className="flex justify-between h-full flex-col gap-6">
            <FadeIn variant="soft-fade">
              {label && <SectionLabel text={label} />}

              {headline && (
                <h2 className="text-4xl font-normal mt-2 sm:text-5xl lg:text-section leading-[1.2]">
                  {headline}
                </h2>
              )}
            </FadeIn>
            <FadeIn variant="soft-fade" delay={150} className="bg-blue-50 p-12  py-12">
              {description && (
                <PortableText
                  value={description as PortableTextBlock[]}
                  className="max-w-2xl text-lg text-dark/80 sm:text-xl"
                />
              )}

              {button?.buttonText && button?.link && (
                <div className="mt-6">
                  <Button text={button.buttonText} link={button.link as DereferencedLink} />
                </div>
              )}
            </FadeIn>
          </div>

          {/* Right image */}
          <FadeIn variant="soft-fade" delay={200} className="relative">
            {showBlueAccent && (
              <div className="absolute -top-4 -right-4 -bottom-3 left-8 -z-10  bg-blue lg:-top-6 lg:-right-6 lg:-bottom-4 lg:left-12" />
            )}
            {image?.asset?._ref && (
              <div className="max-h-[500px] lg:max-h-[700px] overflow-hidden ">
                <Image
                  id={image.asset._ref}
                  alt={headline || ''}
                  width={640}
                  crop={image.crop}
                  hotspot={image.hotspot}
                  mode="cover"
                  className=""
                />
              </div>
            )}
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
