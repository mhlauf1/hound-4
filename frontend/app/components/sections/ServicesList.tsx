import SectionLabel from '@/app/components/SectionLabel'
import Button from '@/app/components/Button'
import FadeIn from '@/app/components/FadeIn'
import Image from '@/app/components/SanityImage'
import {DereferencedLink} from '@/sanity/lib/types'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type ServicesListProps = {
  block: ExtractPageBuilderType<'servicesList'>
  index: number
  pageType: string
  pageId: string
}

export default function ServicesList({block}: ServicesListProps) {
  const {label, headline, services} = block

  return (
    <section className="bg-blue py-16 text-white lg:py-24">
      <div className="container">
        {/* Header — left-aligned for editorial feel */}
        <FadeIn variant="soft-fade" className="mb-8 lg:mb-12">
          {label && <SectionLabel text={label} className="text-white" />}
          {headline && (
            <h2 className="text-4xl font-normal md:max-w-[18ch] mt-2 sm:text-5xl lg:text-section leading-[1.2]">
              {headline}
            </h2>
          )}
        </FadeIn>

        {/* Service cards — 2×2 grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-y-20 lg:gap-x-4">
          {services?.map((service, i) => {
            const hasImage = !!service.image?.asset?._ref
            const number = String(i + 1).padStart(2, '0')

            return (
              <FadeIn
                key={i}
                variant="soft-fade"
                delay={i * 120}
                className="flex relative flex-col gap-2 h-full"
              >
                {/* Image */}
                {hasImage && (
                  <div className="overflow-hidden ">
                    <Image
                      id={service.image!.asset!._ref!}
                      alt={service.title || ''}
                      width={600}
                      crop={service.image!.crop}
                      hotspot={service.image!.hotspot}
                      mode="cover"
                      className="aspect-4/3 w-full object-cover transition-transform duration-500 "
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-1 flex-col gap-1">
                  <div className="absolute bg-white size-16 text-center flex justify-center items-center rounded-full -top-2.5 -right-2.5 rotate-6">
                    <span className="font-bold text-lg md:text-2xl text-blue">{number}</span>
                  </div>
                  {service.title && (
                    <h3 className="text-2xl mt-1.5 font-normal sm:text-3xl lg:text-4xl">
                      {service.title}
                    </h3>
                  )}
                  {service.description && (
                    <p className="max-w-[95%] text-lg leading-[140%] text-white/90">
                      {service.description}
                    </p>
                  )}
                  {service.button?.buttonText && service.button?.link && (
                    <div className="mt-auto pt-3">
                      <Button
                        text={service.button.buttonText}
                        link={service.button.link as DereferencedLink}
                        variant="white"
                      />
                    </div>
                  )}
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
