import {person} from './documents/person'
import {page} from './documents/page'
import {post} from './documents/post'
import {callToAction} from './objects/callToAction'
import {infoSection} from './objects/infoSection'
import {settings} from './singletons/settings'
import {link} from './objects/link'
import {blockContent} from './objects/blockContent'
import button from './objects/button'
import {blockContentTextOnly} from './objects/blockContentTextOnly'
import {hero} from './objects/hero'
import {marquee} from './objects/marquee'
import {heroSplit} from './objects/heroSplit'
import {servicesList} from './objects/servicesList'
import {featureCards} from './objects/featureCards'
import {teamHighlight} from './objects/teamHighlight'
import {ctaBanner} from './objects/ctaBanner'
import {infoBlock} from './objects/infoBlock'

export const schemaTypes = [
  // Singletons
  settings,
  // Documents
  page,
  post,
  person,
  // Objects
  button,
  blockContent,
  blockContentTextOnly,
  infoSection,
  callToAction,
  link,
  // Homepage sections
  hero,
  marquee,
  heroSplit,
  servicesList,
  featureCards,
  teamHighlight,
  ctaBanner,
  infoBlock,
]
