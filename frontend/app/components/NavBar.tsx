'use client'

import {useState, useEffect, useRef, useCallback} from 'react'
import {usePathname} from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import ResolvedLink from '@/app/components/ResolvedLink'
import {ArrowRight} from '@/app/components/icons'
import {urlForImage} from '@/sanity/lib/utils'
import type {NavSettingsQueryResult} from '@/sanity.types'
import {DereferencedLink} from '@/sanity/lib/types'

type NavBarProps = {
  settings: NavSettingsQueryResult
}

export default function NavBar({settings}: NavBarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const navRef = useRef<HTMLDivElement>(null)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    onScroll()
    window.addEventListener('scroll', onScroll, {passive: true})
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile nav on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  // Close mobile nav on escape + body scroll lock
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

  // Focus trap within mobile nav
  useEffect(() => {
    if (!mobileOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      const nav = navRef.current
      const toggle = toggleRef.current
      if (!nav || !toggle) return

      const focusable = [
        toggle,
        ...Array.from(nav.querySelectorAll<HTMLElement>('a[href], button')),
      ]
      if (focusable.length === 0) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  const closeMobile = useCallback(() => setMobileOpen(false), [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        mobileOpen
          ? 'bg-cream'
          : scrolled
            ? 'bg-cream/95 backdrop-blur-md shadow-sm transition-all duration-300'
            : 'bg-transparent transition-all duration-300'
      }`}
    >
      <div className="container">
        {/* Mobile: logo left, hamburger right */}
        <div className="relative z-70 flex h-20 items-center justify-between lg:hidden">
          <Link href="/">
            {settings?.logo?.asset?._ref ? (
              <Image
                src={urlForImage(settings.logo)?.height(160).url() || ''}
                alt={settings.title || 'Home'}
                width={0}
                height={0}
                sizes="160px"
                className={`h-10 w-auto brightness-0 transition-all duration-300 ${scrolled || mobileOpen ? '' : 'invert'}`}
              />
            ) : (
              <span
                className={`text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  scrolled || mobileOpen ? 'text-dark' : 'text-white'
                }`}
              >
                {settings?.title || 'Hound Around Resort'}
              </span>
            )}
          </Link>

          <button
            ref={toggleRef}
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`flex h-10 w-10 items-center justify-center ${
              scrolled || mobileOpen ? 'text-dark' : 'text-white'
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

        {/* Desktop: 3-column grid */}
        <div className="hidden h-20 grid-cols-3 items-center lg:grid">
          {/* Col 1 — Nav links (left) */}
          <nav className="flex items-center gap-8 justify-self-start">
            {settings?.navLinks?.map((item, i) => (
              <ResolvedLink
                key={i}
                link={item.link as DereferencedLink}
                className={`text-base transition-colors duration-300 hover:opacity-70 ${
                  scrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {item.label}
              </ResolvedLink>
            ))}
          </nav>

          {/* Col 2 — Logo (center) */}
          <Link href="/" className="justify-self-center">
            {settings?.logo?.asset?._ref ? (
              <Image
                src={urlForImage(settings.logo)?.height(160).url() || ''}
                alt={settings.title || 'Home'}
                width={0}
                height={0}
                sizes="160px"
                className={`h-12 w-auto brightness-0 transition-all duration-300 ${scrolled ? '' : 'invert'}`}
              />
            ) : (
              <span
                className={`text-sm font-semibold uppercase tracking-[0.15em] transition-colors duration-300 ${
                  scrolled ? 'text-dark' : 'text-white'
                }`}
              >
                {settings?.title || 'Hound Around Resort'}
              </span>
            )}
          </Link>

          {/* Col 3 — CTA button (right) */}
          <div className="justify-self-end">
            {settings?.ctaButton?.buttonText && settings.ctaButton.link && (
              <ResolvedLink
                link={settings.ctaButton.link as DereferencedLink}
                className="inline-flex items-center gap-2 rounded-full bg-blue px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue/90"
              >
                {settings.ctaButton.buttonText}
                <ArrowRight className="h-4 w-4" />
              </ResolvedLink>
            )}
          </div>
        </div>
      </div>

      {/* Mobile overlay — always mounted, animated via CSS */}
      <div
        ref={navRef}
        aria-label="Mobile menu"
        className={`fixed inset-0 z-60 bg-cream transition-transform duration-500 lg:hidden ${
          mobileOpen
            ? 'translate-x-0 pointer-events-auto'
            : 'translate-x-full pointer-events-none'
        }`}
        style={{transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)'}}
      >
        <nav className="container flex h-full flex-col justify-center pt-20">
          {settings?.navLinks?.map((item, i) => (
            <ResolvedLink
              key={i}
              link={item.link as DereferencedLink}
              className="group flex items-center justify-between border-b border-dark/10 py-5 text-3xl text-dark sm:text-4xl"
              onClick={closeMobile}
            >
              {item.label}
              <ArrowRight className="h-6 w-6 opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            </ResolvedLink>
          ))}

          {settings?.ctaButton?.buttonText && settings.ctaButton.link && (
            <div className="mt-10">
              <ResolvedLink
                link={settings.ctaButton.link as DereferencedLink}
                className="inline-flex items-center gap-2 rounded-full bg-blue px-8 py-4 text-lg font-medium text-white transition-colors hover:bg-blue/90"
                onClick={closeMobile}
              >
                {settings.ctaButton.buttonText}
                <ArrowRight className="h-5 w-5" />
              </ResolvedLink>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}
