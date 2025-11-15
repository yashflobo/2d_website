import SectionWrapper from '../layout/SectionWrapper'
import { researchSection } from '../../data/content'
import { FadeInOnScroll } from '../motion/Primitives'

const ResearchSection = () => (
  <SectionWrapper
    id="research"
    eyebrow="Research-backed"
    headline={researchSection.title}
  >
    <div className="space-y-8">
      <FadeInOnScroll className="text-center">
        <h3 className="font-display text-4xl text-white">{researchSection.subtitle}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-aurora-200">{researchSection.tagline}</p>
      </FadeInOnScroll>

      <div className="grid gap-8 lg:grid-cols-2">
        <FadeInOnScroll className="rounded-3xl border border-white/10 bg-white/[0.02] p-6" y={32}>
          <p className="text-ink-200">
            {researchSection.bio.title}, {researchSection.bio.intro}
          </p>
          <p className="mt-4 text-ink-200">{researchSection.bio.summary}</p>
          <ul className="mt-6 space-y-3 text-ink-100">
            {researchSection.bio.credentials.map((credential) => (
              <li key={credential} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-aurora-300 flex-shrink-0" />
                {credential}
              </li>
            ))}
          </ul>
        </FadeInOnScroll>

        <div className="space-y-6">
          <FadeInOnScroll className="rounded-3xl border border-white/10 bg-white/[0.02] p-6" y={40}>
            <h4 className="font-display text-xl text-white">{researchSection.bio.hurdlesTitle}</h4>
            <div className="mt-4 space-y-3">
              {researchSection.bio.hurdles.map((hurdle, index) => (
                <div key={hurdle} className="flex items-start gap-3">
                  <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-aurora-300 text-xs text-aurora-300">
                    {index + 1}
                  </span>
                  <p className="text-ink-200">{hurdle}</p>
                </div>
              ))}
            </div>
          </FadeInOnScroll>

          <FadeInOnScroll className="rounded-3xl border border-white/10 bg-gradient-to-r from-ink-900 to-ink-800 p-6">
            <p className="text-lg text-white">{researchSection.bio.quote}</p>
            <p className="mt-2 text-sm text-ink-300">{researchSection.bio.quoteAuthor}</p>
          </FadeInOnScroll>
        </div>
      </div>

      <FadeInOnScroll className="rounded-3xl border border-white/10 bg-white/[0.02] p-8" y={32}>
        <h4 className="text-center font-display text-2xl text-white">{researchSection.bio.provenTitle}</h4>
        <p className="mt-4 text-center text-ink-200">{researchSection.bio.provenText}</p>
      </FadeInOnScroll>

      <FadeInOnScroll className="text-center">
        <p className="text-xl text-ink-100">{researchSection.mission}</p>
      </FadeInOnScroll>
    </div>
  </SectionWrapper>
)

export default ResearchSection

