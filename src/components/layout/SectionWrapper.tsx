import { type ReactNode } from 'react'

type SectionWrapperProps = {
  id?: string
  children: ReactNode
  className?: string
  headline?: string
  eyebrow?: string
  description?: string
  variant?: 'default' | 'grid' | 'panel'
}

const variantMap: Record<NonNullable<SectionWrapperProps['variant']>, string> = {
  default: 'bg-transparent',
  grid: 'bg-gradient-aurora/5',
  panel: 'bg-white/[0.02] border border-white/[0.05] rounded-3xl',
}

const SectionWrapper = ({
  id,
  children,
  className = '',
  headline,
  eyebrow,
  description,
  variant = 'default',
}: SectionWrapperProps) => (
  <section id={id} className={`px-6 py-16 md:py-24 ${variantMap[variant]} ${className}`}>
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      {(headline || description) && (
        <header className="space-y-3 max-w-3xl">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.4em] text-aurora-200">{eyebrow}</p>
          )}
          {headline && (
            <h2 className="font-display text-3xl text-white md:text-4xl">{headline}</h2>
          )}
          {description && <p className="text-ink-200">{description}</p>}
        </header>
      )}
      {children}
    </div>
  </section>
)

export default SectionWrapper

