import ResolvedLink from '@/app/components/ResolvedLink'
import {ArrowRight} from '@/app/components/icons'
import {DereferencedLink} from '@/sanity/lib/types'

type ButtonProps = {
  text: string
  link: DereferencedLink
  variant?: 'primary' | 'white' | 'ghost'
  className?: string
}

export default function Button({text, link, variant = 'primary', className = ''}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2.5 rounded-full text-base font-medium cursor-pointer transition-all duration-200 hover:opacity-85'

  const variants = {
    primary: 'bg-blue text-white px-8 py-3.5',
    white: 'bg-white text-dark px-8 py-3.5',
    ghost: 'border border-dark/20 text-dark px-8 py-3.5 hover:bg-dark hover:text-white',
  }

  return (
    <ResolvedLink link={link} className={`${base} ${variants[variant]} ${className}`}>
      {text}
      <ArrowRight className="h-4 w-4" />
    </ResolvedLink>
  )
}
