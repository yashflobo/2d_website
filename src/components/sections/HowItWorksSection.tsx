import SectionWrapper from '../layout/SectionWrapper'
import { howItWorks } from '../../data/content'
import { FadeInOnScroll } from '../motion/Primitives'

const HowItWorksSection = () => (
  <SectionWrapper
    id="how-it-works"
    eyebrow="How it works"
    headline={howItWorks.title}
    variant="panel"
  >
    <div className="grid gap-8 md:grid-cols-3">
      {howItWorks.steps.map((step, index) => (
        <FadeInOnScroll key={step.label} y={32} className="space-y-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.05] font-display text-xl text-white">
            {index + 1}
          </div>
          <h3 className="font-display text-2xl text-white">{step.label}</h3>
          <p className="text-ink-200">{step.description}</p>
        </FadeInOnScroll>
      ))}
    </div>
  </SectionWrapper>
)

export default HowItWorksSection

