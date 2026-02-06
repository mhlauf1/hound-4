'use client'

import {useState, useEffect} from 'react'
import Link from 'next/link'
import ResolvedLink from '@/app/components/ResolvedLink'
import {ArrowRight} from '@/app/components/icons'
import type {NavSettingsQueryResult} from '@/sanity.types'
import {DereferencedLink} from '@/sanity/lib/types'

type NavBarProps = {
  settings: NavSettingsQueryResult
}

export default function NavBar({settings}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on escape
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false)
    }
    if (mobileOpen) {
      document.addEventListener('keydown', onKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className={`text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
              scrolled ? 'text-dark' : 'text-white'
            }`}
          >
            Hound Around Resort
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {settings?.navLinks?.map((item, i) => (
              <ResolvedLink
                key={i}
                link={item.link as DereferencedLink}
                className={`text-sm transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {item.label}
              </ResolvedLink>
            ))}

            {settings?.ctaButton?.buttonText && settings.ctaButton.link && (
              <ResolvedLink
                link={settings.ctaButton.link as DereferencedLink}
                className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue/90"
              >
                {settings.ctaButton.buttonText}
                <ArrowRight className="h-4 w-4" />
              </ResolvedLink>
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`relative z-50 flex h-10 w-10 items-center justify-center lg:hidden ${
              mobileOpen ? 'text-dark' : scrolled ? 'text-dark' : 'text-white'
            }`}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? 'translate-y-2 rotate-45' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                  mobileOpen ? '-translate-y-2 -rotate-45' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-cream lg:hidden">
          <nav className="flex h-full flex-col items-center justify-center gap-8">
            {settings?.navLinks?.map((item, i) => (
              <ResolvedLink
                key={i}
                link={item.link as DereferencedLink}
                className="text-2xl text-dark"
              >
                <button type="button" onClick={() => setMobileOpen(false)}>
                  {item.label}
                </button>
              </ResolvedLink>
            ))}

            {settings?.ctaButton?.buttonText && settings.ctaButton.link && (
              <ResolvedLink
                link={settings.ctaButton.link as DereferencedLink}
                className="inline-flex items-center gap-2 rounded-full bg-blue px-6 py-3 text-lg font-medium text-white"
              >
                <button type="button" onClick={() => setMobileOpen(false)}>
                  {settings.ctaButton.buttonText}
                </button>
              </ResolvedLink>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
