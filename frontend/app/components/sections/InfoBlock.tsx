import {PortableTextBlock} from 'next-sanity'

import SectionLabel from '@/app/components/SectionLabel'
import Button from '@/app/components/Button'
import PortableText from '@/app/components/PortableText'
import Image from '@/app/components/SanityImage'
import {DereferencedLink} from '@/sanity/lib/types'
import {ExtractPageBuilderType} from '@/sanity/lib/types'

type InfoBlockProps = {
  block: ExtractPageBuilderType<'infoBlock'>
  index: number
  pageType: string
  pageId: string
}

export default function InfoBlock({block}: InfoBlockProps) {
  const {label, headline, body, button, image, secondaryBody, address, phone} = block

  return (
    <section className="pb-16 lg:pb-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column — text content */}
          <div className="flex flex-col gap-6 pt-16 lg:pt-24">
            {label && <SectionLabel text={label} />}

            {headline && (
              <h2 className="text-3xl font-normal sm:text-4xl lg:text-5xl lg:leading-[1.05] max-w-[15ch] tracking-tight">
                {headline}
              </h2>
            )}

            {body && (
              <PortableText
                value={body as PortableTextBlock[]}
                className="text-body text-muted prose-p:text-muted"
              />
            )}

            {button?.buttonText && button?.link && (
              <div>
                <Button text={button.buttonText} link={button.link as DereferencedLink} />
              </div>
            )}
          </div>

          {/* Right column — overlapping image + secondary content */}
          <div className="flex flex-col gap-6">
            {image?.asset?._ref && (
              <div className="md:-mt-24 lg:-mt-40 overflow-hidden md:h-[70vh] border-2 border-white relative z-10">
                <Image
                  id={image.asset._ref}
                  alt={headline || ''}
                  width={640}
                  crop={image.crop}
                  hotspot={image.hotspot}
                  mode="cover"
                  className="w-full"
                />
              </div>
            )}

            {secondaryBody && (
              <PortableText
                value={secondaryBody as PortableTextBlock[]}
                className="text-body text-muted prose-p:text-muted"
              />
            )}

            <div className="space-y-4 text-body text-muted">
              {address && <p className="whitespace-pre-line">{address}</p>}
              {phone && (
                <p>
                  Call us at{' '}
                  <a
                    href={`tel:${phone.replace(/\D/g, '')}`}
                    className="hover:text-dark transition-colors"
                  >
                    {phone}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
