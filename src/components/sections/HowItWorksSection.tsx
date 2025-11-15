import SectionWrapper from '../layout/SectionWrapper'
import { howItWorksSection } from '../../data/content'
import { FadeInOnScroll } from '../motion/Primitives'

const HowItWorksSection = () => (
  <SectionWrapper
    id="how-it-works"
    eyebrow="Simple process"
    headline={howItWorksSection.title}
    description={howItWorksSection.subtitle}
  >
    <div className="grid gap-8 md:grid-cols-3">
      {howItWorksSection.steps.map((step, index) => (
        <FadeInOnScroll
          key={step.title}
          className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
          y={32}
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-aurora-300 bg-aurora-300/10 text-white">
            <span className="font-display text-xl">{index + 1}</span>
          </div>
          <h3 className="font-display text-2xl text-white">{step.title}</h3>
          <p className="mt-3 text-ink-200">{step.body}</p>
        </FadeInOnScroll>
      ))}
    </div>
  </SectionWrapper>
)

export default HowItWorksSection

