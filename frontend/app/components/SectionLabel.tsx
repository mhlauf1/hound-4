import {Plus} from '@/app/components/icons'

export default function SectionLabel({text}: {text: string}) {
  return (
    <div className="flex items-center gap-2 text-label uppercase tracking-[0.1em] text-muted">
      <Plus className="h-3 w-3" />
      <span>{text}</span>
    </div>
  )
}
