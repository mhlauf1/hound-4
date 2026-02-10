import {Plus} from '@/app/components/icons'

export default function SectionLabel({text, className}: {text: string; className?: string}) {
  return (
    <div className={`flex items-center gap-2 text-label ${className || 'text-muted'}`}>
      <Plus className="h-3 w-3" />
      <span>{text}</span>
    </div>
  )
}
