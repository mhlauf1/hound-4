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
      <div className="container py-20 lg:py-28">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-semibold tracking-tight text-dark">
                Hound Around
              </h3>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dark">
                Resort
              </span>
            </div>
            {settings?.tagline && (
              <p className="text-base text-muted leading-relaxed max-w-xs">{settings.tagline}</p>
            )}
          </div>

          {/* Nav group columns */}
          {settings?.footerNavGroups?.map((group, i) => (
            <div key={i}>
              <h4 className="text-lg font-semibold text-dark">
                {group.title}
              </h4>
              <ul className="mt-6 space-y-4">
                {group.links?.map((item, j) => (
                  <li key={j}>
                    <ResolvedLink
                      link={item.link as DereferencedLink}
                      className="text-base text-muted hover:text-dark transition-colors"
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
            <h4 className="text-lg font-semibold text-dark">
              Contact
            </h4>
            <div className="mt-6 space-y-4 text-base text-muted">
              {settings?.address && (
                <p className="whitespace-pre-line leading-relaxed">{settings.address}</p>
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
          <p className="text-sm text-muted">
            &copy; {currentYear} {settings?.title || 'Hound Around Resort'}.{' '}
            {settings?.parentCompany && (
              <span>{settings.parentCompany}</span>
            )}
          </p>

          {settings?.legalLinks && settings.legalLinks.length > 0 && (
            <div className="flex flex-wrap gap-x-8 gap-y-1 text-sm text-muted">
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
