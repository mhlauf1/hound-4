import {sanityFetch} from '@/sanity/lib/live'
import {footerSettingsQuery} from '@/sanity/lib/queries'
import ResolvedLink from '@/app/components/ResolvedLink'
import {DereferencedLink} from '@/sanity/lib/types'

export default async function Footer() {
  const {data: settings} = await sanityFetch({
    query: footerSettingsQuery,
  })

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-light">
      <div className="container py-16 lg:py-24">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-dark">
              {settings?.title || 'Hound Around Resort'}
            </h3>
            {settings?.tagline && (
              <p className="mt-3 text-sm text-muted leading-relaxed">{settings.tagline}</p>
            )}
          </div>

          {/* Nav group columns */}
          {settings?.footerNavGroups?.map((group, i) => (
            <div key={i}>
              <h4 className="text-label uppercase tracking-[0.1em] font-semibold text-dark">
                {group.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {group.links?.map((item, j) => (
                  <li key={j}>
                    <ResolvedLink
                      link={item.link as DereferencedLink}
                      className="text-sm text-muted hover:text-dark transition-colors"
                    >
                      {item.label}
                    </ResolvedLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="text-label uppercase tracking-[0.1em] font-semibold text-dark">
              Contact
            </h4>
            <div className="mt-4 space-y-3 text-sm text-muted">
              {settings?.address && (
                <p className="whitespace-pre-line">{settings.address}</p>
              )}
              {settings?.phone && (
                <p>
                  <a href={`tel:${settings.phone.replace(/\D/g, '')}`} className="hover:text-dark transition-colors">
                    {settings.phone}
                  </a>
                </p>
              )}
              {settings?.email && (
                <p>
                  <a href={`mailto:${settings.email}`} className="hover:text-dark transition-colors">
                    {settings.email}
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-dark/10">
        <div className="container flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted">
            <span>&copy; {currentYear} {settings?.title || 'Hound Around Resort'}</span>
            {settings?.parentCompany && (
              <span>{settings.parentCompany}</span>
            )}
          </div>

          {settings?.legalLinks && settings.legalLinks.length > 0 && (
            <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
              {settings.legalLinks.map((item, i) => (
                <ResolvedLink
                  key={i}
                  link={item.link as DereferencedLink}
                  className="hover:text-dark transition-colors"
                >
                  {item.label}
                </ResolvedLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  )
}
