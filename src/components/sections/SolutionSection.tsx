import SectionWrapper from '../layout/SectionWrapper'
import { solutionSection } from '../../data/content'
import { FadeInOnScroll } from '../motion/Primitives'
import Button from '../common/Button'

const SolutionSection = () => (
  <SectionWrapper
    id="solution"
    eyebrow="Our Solution"
    headline={solutionSection.title}
    description={solutionSection.subtitle}
  >
    <div className="grid gap-6 lg:grid-cols-3">
      {solutionSection.features.map((feature) => (
        <FadeInOnScroll
          key={feature.title}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6"
          y={32}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-aurora-200">{feature.title}</p>
          <h3 className="mt-2 font-display text-2xl text-white">{feature.tagline}</h3>
          <p className="mt-3 text-ink-200">{feature.body}</p>
          <p className="mt-4 text-sm text-ink-300">{feature.stat}</p>
          <p className="mt-4 text-sm font-medium text-ink-100">{feature.benefit}</p>
        </FadeInOnScroll>
      ))}
    </div>
    
    <FadeInOnScroll className="rounded-3xl border border-white/10 bg-gradient-to-r from-ink-900 to-ink-800 p-8 text-center">
      <p className="text-sm uppercase tracking-[0.4em] text-aurora-200">{solutionSection.tagline}</p>
      <p className="mt-4 text-xl text-white md:text-2xl">{solutionSection.formula}</p>
      <div className="mt-6">
        <Button href="#waitlist">Join Waitlist for March Launch</Button>
      </div>
    </FadeInOnScroll>
  </SectionWrapper>
)

export default SolutionSection

