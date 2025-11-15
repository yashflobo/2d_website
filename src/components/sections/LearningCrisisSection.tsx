import SectionWrapper from '../layout/SectionWrapper'
import { crisisSection } from '../../data/content'
import { FadeInOnScroll, StaggerContainer } from '../motion/Primitives'

const LearningCrisisSection = () => (
  <SectionWrapper
    id="crisis"
    eyebrow="The challenges"
    headline={crisisSection.title}
  >
    <StaggerContainer className="grid gap-6 md:grid-cols-3">
      {crisisSection.cards.map((card) => (
        <FadeInOnScroll key={card.title} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6" y={32}>
          <h3 className="font-display text-2xl text-white">{card.title}</h3>
          <p className="mt-3 text-ink-200">{card.body}</p>
          <p className="mt-4 text-sm text-ink-300">{card.note}</p>
          {card.quote && (
            <p className="mt-4 italic text-aurora-200">"{card.quote}"</p>
          )}
        </FadeInOnScroll>
      ))}
    </StaggerContainer>
    <FadeInOnScroll className="rounded-3xl border border-white/10 bg-ink-900 px-6 py-8 text-center">
      <p className="text-2xl font-display text-white">{crisisSection.closing}</p>
    </FadeInOnScroll>
  </SectionWrapper>
)

export default LearningCrisisSection

