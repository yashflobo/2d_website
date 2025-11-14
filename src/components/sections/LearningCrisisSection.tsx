import SectionWrapper from '../layout/SectionWrapper'
import { crisisSection } from '../../data/content'
import { FadeInOnScroll, StaggerContainer } from '../motion/Primitives'

const LearningCrisisSection = () => (
  <SectionWrapper
    id="crisis"
    eyebrow="The learning crisis"
    headline={crisisSection.title}
    description="We listened to parents, teachers, and administrators across the ARious community."
  >
    <StaggerContainer className="grid gap-6 md:grid-cols-3">
      {crisisSection.cards.map((card) => (
        <FadeInOnScroll key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6" y={32}>
          <p className="text-xs uppercase tracking-[0.4em] text-aurora-200">Challenge</p>
          <h3 className="mt-2 font-display text-2xl text-white">{card.title}</h3>
          <p className="mt-3 text-ink-200">{card.body}</p>
          <p className="mt-4 text-sm text-ink-400">{card.note}</p>
        </FadeInOnScroll>
      ))}
    </StaggerContainer>
    <FadeInOnScroll className="rounded-3xl border border-white/10 bg-ink-900 px-6 py-4 text-center text-ink-100">
      {crisisSection.closing}
    </FadeInOnScroll>
  </SectionWrapper>
)

export default LearningCrisisSection

