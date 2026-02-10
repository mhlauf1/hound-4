'use client'

import {useRef, useEffect, useState} from 'react'

const variants = {
  'fade-up': {
    hidden: {opacity: 0, transform: 'translateY(20px)'},
    visible: {opacity: 1, transform: 'translateY(0)'},
  },
  'scale-up': {
    hidden: {opacity: 0, transform: 'scale(0.95)'},
    visible: {opacity: 1, transform: 'scale(1)'},
  },
  'soft-fade': {
    hidden: {opacity: 0},
    visible: {opacity: 1},
  },
} as const

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: keyof typeof variants
  duration?: number
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  variant = 'fade-up',
  duration = 0.7,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      {threshold: 0.1},
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const v = variants[variant]
  const state = visible ? v.visible : v.hidden
  const ease = 'cubic-bezier(0.16, 1, 0.3, 1)'

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...state,
        transition: `opacity ${duration}s ${ease} ${delay}ms, transform ${duration}s ${ease} ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
