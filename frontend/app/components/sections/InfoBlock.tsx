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
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left column */}
          <div className="flex flex-col gap-6">
            {label && <SectionLabel text={label} />}

            {headline && (
              <h2 className="text-3xl font-normal sm:text-4xl lg:text-section lg:leading-[0.95] lg:tracking-[-0.01em]">
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

          {/* Right column */}
          <div className="flex flex-col gap-8">
            {image?.asset?._ref && (
              <div className="overflow-hidden rounded-xl">
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
                className="text-sm text-muted"
              />
            )}

            <div className="space-y-2 text-sm text-muted">
              {address && <p className="whitespace-pre-line">{address}</p>}
              {phone && (
                <p>
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
