import SectionWrapper from '../layout/SectionWrapper'
import { experienceSection } from '../../data/content'
import { FadeInOnScroll } from '../motion/Primitives'

const SolutionSection = () => (
  <SectionWrapper
    id="experience"
    eyebrow="How ARious works"
    headline={experienceSection.title}
    description={experienceSection.description}
  >
    <div className="grid gap-6 lg:grid-cols-3">
      {experienceSection.story.map((card) => (
        <FadeInOnScroll
          key={card.title}
          className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-transparent p-6"
          y={32}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-aurora-200">{card.title}</p>
          <p className="mt-3 text-ink-100">{card.body}</p>
        </FadeInOnScroll>
      ))}
    </div>
    <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
      <p className="text-sm uppercase tracking-[0.4em] text-ink-400">Curiosity path</p>
      <div className="mt-4 grid gap-6 md:grid-cols-3">
        {experienceSection.steps.map((step) => (
          <FadeInOnScroll key={step.label} className="space-y-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white">
              {step.label}
            </div>
            <p className="text-ink-200">{step.body}</p>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  </SectionWrapper>
)

export default SolutionSection

