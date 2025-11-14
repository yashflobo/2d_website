import SectionWrapper from '../layout/SectionWrapper'
import { solutionSection } from '../../data/content'
import Button from '../common/Button'
import { FadeInOnScroll } from '../motion/Primitives'

const SolutionSection = () => (
  <SectionWrapper
    id="solution"
    eyebrow="The ARious solution"
    headline={solutionSection.title}
    description={solutionSection.subtitle}
  >
    <div className="grid gap-6 lg:grid-cols-3">
      {solutionSection.pillars.map((pillar) => (
        <FadeInOnScroll
          key={pillar.label}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-transparent p-6"
          y={40}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-aurora-300">{pillar.label}</p>
          <h3 className="mt-3 font-display text-2xl text-white">{pillar.title}</h3>
          <p className="mt-3 text-ink-200">{pillar.description}</p>
          <p className="mt-4 text-sm text-aurora-100">{pillar.footnote}</p>
        </FadeInOnScroll>
      ))}
    </div>
    <div className="rounded-3xl border border-white/5 bg-ink-900/70 p-6 text-center text-ink-100">
      <p>{solutionSection.integration}</p>
      <div className="mt-6">
        <Button href={solutionSection.cta.href}>{solutionSection.cta.label}</Button>
      </div>
    </div>
  </SectionWrapper>
)

export default SolutionSection

