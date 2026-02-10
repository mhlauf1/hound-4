import Link from 'next/link'

import {linkResolver} from '@/sanity/lib/utils'
import {DereferencedLink} from '@/sanity/lib/types'

interface ResolvedLinkProps {
  link: DereferencedLink
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick?: React.MouseEventHandler<HTMLAnchorElement | HTMLSpanElement>
}

export default function ResolvedLink({link, children, className, style, onClick}: ResolvedLinkProps) {
  // resolveLink() is used to determine the type of link and return the appropriate URL.
  const resolvedLink = linkResolver(link)

  if (typeof resolvedLink === 'string') {
    return (
      <Link
        href={resolvedLink}
        target={link?.openInNewTab ? '_blank' : undefined}
        rel={link?.openInNewTab ? 'noopener noreferrer' : undefined}
        className={className}
        style={style}
        onClick={onClick}
      >
        {children}
      </Link>
    )
  }
  return <span className={className} style={style} onClick={onClick}>{children}</span>
}
