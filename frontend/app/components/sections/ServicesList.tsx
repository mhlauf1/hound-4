import SectionLabel from '@/app/components/SectionLabel'
import Button from '@/app/components/Button'
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
    <section className="py-16 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12 text-center lg:mb-16">
          {label && (
            <div className="flex justify-center">
              <SectionLabel text={label} />
            </div>
          )}
          {headline && (
            <h2 className="mt-4 text-3xl font-normal sm:text-4xl lg:text-section lg:leading-[0.95] lg:tracking-[-0.01em]">
              {headline}
            </h2>
          )}
        </div>

        {/* Service rows */}
        <div className="flex flex-col gap-4">
          {services?.map((service, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-dark/10 transition-all duration-300"
            >
              {/* Blue hover overlay */}
              <div className="absolute inset-0 z-10 translate-y-full bg-blue transition-transform duration-400 ease-out group-hover:translate-y-0 group-focus-within:translate-y-0" />

              {/* Content */}
              <div className="relative z-20 grid items-center gap-6 p-6 sm:grid-cols-[auto_1fr_auto] lg:p-8">
                {/* Image */}
                {service.image?.asset?._ref && (
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-lg sm:h-24 sm:w-24">
                    <Image
                      id={service.image.asset._ref}
                      alt={service.title || ''}
                      width={96}
                      crop={service.image.crop}
                      hotspot={service.image.hotspot}
                      mode="cover"
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}

                {/* Title + description */}
                <div>
                  <h3 className="text-xl font-normal text-dark transition-colors duration-400 group-hover:text-white group-focus-within:text-white lg:text-card lg:leading-[1.1]">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="mt-2 text-sm text-muted transition-colors duration-400 group-hover:text-white/80 group-focus-within:text-white/80">
                      {service.description}
                    </p>
                  )}
                </div>

                {/* Button */}
                {service.button?.buttonText && service.button?.link && (
                  <div className="shrink-0">
                    <Button
                      text={service.button.buttonText}
                      link={service.button.link as DereferencedLink}
                      variant="ghost"
                      className="transition-colors duration-400 group-hover:border-white/40 group-hover:text-white group-focus-within:border-white/40 group-focus-within:text-white"
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
