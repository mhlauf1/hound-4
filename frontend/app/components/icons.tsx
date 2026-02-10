export function ArrowRight({className}: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || 'h-4 w-4'}
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

export function Plus({className}: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className || 'h-4 w-4'}
      aria-hidden="true"
    >
      <path d="M12 5v14" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function PawPrint({className}: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || 'h-4 w-4'}
      aria-hidden="true"
    >
      <path d="M12 17.5c-1.1 0-2.1-.4-2.8-1.1-.4-.4-.8-.6-1.2-.6s-.8.2-1.2.6c-1.5 1.5-3.9 1.5-5.4 0s-1.5-3.9 0-5.4c.4-.4.6-.8.6-1.2s-.2-.8-.6-1.2C.2 7.4-.2 5.6.4 4.1c.3-.8.9-1.4 1.7-1.7C3.6 1.8 5.4 2.2 6.6 3.4c.4.4.8.6 1.2.6s.8-.2 1.2-.6C10.5 2 12 1.5 13.5 2c.8.3 1.4.9 1.7 1.7.6 1.5.2 3.3-1 4.5-.4.4-.6.8-.6 1.2s.2.8.6 1.2c1.5 1.5 1.5 3.9 0 5.4-.7.7-1.7 1.1-2.8 1.1h.1z" />
      <ellipse cx="7" cy="4.5" rx="2" ry="2.5" />
      <ellipse cx="17" cy="4.5" rx="2" ry="2.5" />
      <ellipse cx="4" cy="9.5" rx="2" ry="2.5" transform="rotate(-20 4 9.5)" />
      <ellipse cx="20" cy="9.5" rx="2" ry="2.5" transform="rotate(20 20 9.5)" />
    </svg>
  )
}

export function Star({className}: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className || 'h-5 w-5'}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}
