import React from 'react'

import Cta from '@/app/components/Cta'
import Info from '@/app/components/InfoSection'
import Hero from '@/app/components/sections/Hero'
import Marquee from '@/app/components/sections/Marquee'
import HeroSplit from '@/app/components/sections/HeroSplit'
import ServicesList from '@/app/components/sections/ServicesList'
import FeatureCards from '@/app/components/sections/FeatureCards'
import TeamHighlight from '@/app/components/sections/TeamHighlight'
import CtaBanner from '@/app/components/sections/CtaBanner'
import InfoBlock from '@/app/components/sections/InfoBlock'
import {dataAttr} from '@/sanity/lib/utils'
import {PageBuilderSection} from '@/sanity/lib/types'

type BlockProps = {
  index: number
  block: PageBuilderSection
  pageId: string
  pageType: string
}

type BlocksType = {
  [key: string]: React.FC<BlockProps>
}

const Blocks = {
  callToAction: Cta,
  infoSection: Info,
  hero: Hero,
  marquee: Marquee,
  heroSplit: HeroSplit,
  servicesList: ServicesList,
  featureCards: FeatureCards,
  teamHighlight: TeamHighlight,
  ctaBanner: CtaBanner,
  infoBlock: InfoBlock,
} as BlocksType

// Full-bleed sections don't get container wrapping
const fullBleedTypes = new Set(['hero', 'marquee', 'ctaBanner'])

export default function BlockRenderer({block, index, pageId, pageType}: BlockProps) {
  if (typeof Blocks[block._type] !== 'undefined') {
    const isFullBleed = fullBleedTypes.has(block._type)

    return (
      <div
        key={block._key}
        data-sanity={dataAttr({
          id: pageId,
          type: pageType,
          path: `pageBuilder[_key=="${block._key}"]`,
        }).toString()}
      >
        {isFullBleed ? (
          React.createElement(Blocks[block._type], {
            key: block._key,
            block,
            index,
            pageId,
            pageType,
          })
        ) : (
          React.createElement(Blocks[block._type], {
            key: block._key,
            block,
            index,
            pageId,
            pageType,
          })
        )}
      </div>
    )
  }

  return React.createElement(
    () => (
      <div className="w-full bg-light text-center text-muted p-20 rounded-xl">
        A &ldquo;{block._type}&rdquo; block hasn&apos;t been created
      </div>
    ),
    {key: block._key},
  )
}
