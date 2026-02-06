import SectionLabel from '@/app/components/SectionLabel'
import Button from '@/app/components/Button'
import Image from '@/app/components/SanityImage'
import {DereferencedLink} from '@/sanity/lib/types'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type FeatureCardsProps = {
  block: ExtractPageBuilderType<'featureCards'>
  index: number
  pageType: string
  pageId: string
}

export default function FeatureCards({block}: FeatureCardsProps) {
  const {label, headline, stat, features} = block

  return (
    <section className="bg-light py-16 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {label && <SectionLabel text={label} />}
            {headline && (
              <h2 className="mt-4 text-3xl font-normal sm:text-4xl lg:text-section lg:leading-[0.95] lg:tracking-[-0.01em]">
                {headline}
              </h2>
            )}
          </div>

          {stat?.value && (
            <div className="flex items-baseline gap-1 text-right">
              <span className="text-2xl font-normal text-dark lg:text-card lg:leading-[1.1]">
                {stat.value}
              </span>
              {stat.suffix && (
                <span className="text-2xl font-normal text-blue lg:text-card">{stat.suffix}</span>
              )}
            </div>
          )}
        </div>

        {/* Cards grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {features?.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col overflow-hidden rounded-xl bg-cream"
            >
              {feature.image?.asset?._ref && (
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    id={feature.image.asset._ref}
                    alt={feature.title || ''}
                    width={600}
                    crop={feature.image.crop}
                    hotspot={feature.image.hotspot}
                    mode="cover"
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="flex flex-col gap-4 p-6 lg:p-8">
                {feature.title && (
                  <h3 className="text-xl font-normal lg:text-card lg:leading-[1.1]">
                    {feature.title}
                  </h3>
                )}
                {feature.button?.buttonText && feature.button?.link && (
                  <div>
                    <Button
                      text={feature.button.buttonText}
                      link={feature.button.link as DereferencedLink}
                      variant="ghost"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
