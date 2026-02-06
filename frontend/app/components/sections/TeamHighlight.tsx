import SectionLabel from '@/app/components/SectionLabel'
import Button from '@/app/components/Button'
import Image from '@/app/components/SanityImage'
import {DereferencedLink} from '@/sanity/lib/types'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type TeamHighlightProps = {
  block: ExtractPageBuilderType<'teamHighlight'>
  index: number
  pageType: string
  pageId: string
}

export default function TeamHighlight({block}: TeamHighlightProps) {
  const {label, headline, button, teamPhoto} = block

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <div>
            {label && <SectionLabel text={label} />}
            {headline && (
              <h2 className="mt-4 text-3xl font-normal sm:text-4xl lg:text-section lg:leading-[0.95] lg:tracking-[-0.01em]">
                {headline}
              </h2>
            )}
          </div>

          {button?.buttonText && button?.link && (
            <div className="shrink-0">
              <Button
                text={button.buttonText}
                link={button.link as DereferencedLink}
                variant="ghost"
              />
            </div>
          )}
        </div>

        {/* Team photo */}
        {teamPhoto?.asset?._ref && (
          <div className="overflow-hidden rounded-xl">
            <Image
              id={teamPhoto.asset._ref}
              alt={headline || 'Our team'}
              width={1280}
              crop={teamPhoto.crop}
              hotspot={teamPhoto.hotspot}
              mode="cover"
              className="w-full"
            />
          </div>
        )}
      </div>
    </section>
  )
}
