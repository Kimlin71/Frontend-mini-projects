// PROTOTYPE — delete before merging to main
import { useEffect } from 'react'
import './PrototypeSwitcher.css'

const VARIANTS = ['A', 'B', 'C'] as const
export type VariantKey = (typeof VARIANTS)[number]

const LABELS: Record<VariantKey, string> = {
  A: 'Leaf Mark',
  B: 'Teal Immersion',
  C: 'Grey Ruled',
}

interface Props {
  current: VariantKey
  onChange: (v: VariantKey) => void
}

export default function PrototypeSwitcher({ current, onChange }: Props) {
  const idx = VARIANTS.indexOf(current)

  const prev = () => onChange(VARIANTS[(idx - 1 + VARIANTS.length) % VARIANTS.length])
  const next = () => onChange(VARIANTS[(idx + 1) % VARIANTS.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const active = document.activeElement
      if (active && (active.tagName === 'INPUT' || active.tagName === 'TEXTAREA' || (active as HTMLElement).isContentEditable)) return
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (import.meta.env.PROD) return null

  return (
    <div className="proto-switcher" role="toolbar" aria-label="Prototype variant switcher">
      <button className="proto-arrow" onClick={prev} aria-label="Previous variant">◀</button>
      <span className="proto-label">
        <span className="proto-key">{current}</span>
        <span className="proto-name">{LABELS[current]}</span>
      </span>
      <button className="proto-arrow" onClick={next} aria-label="Next variant">▶</button>
    </div>
  )
}
