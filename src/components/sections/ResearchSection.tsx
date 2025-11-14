import SectionWrapper from '../layout/SectionWrapper'
import { researchSection } from '../../data/content'
import { FadeInOnScroll } from '../motion/Primitives'

const ResearchSection = () => (
  <SectionWrapper
    id="research"
    eyebrow="Research-backed"
    headline={researchSection.title}
    description={researchSection.mission}
  >
    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <FadeInOnScroll className="rounded-3xl border border-white/10 bg-white/[0.02] p-6" y={32}>
        <h3 className="font-display text-3xl text-white">{researchSection.bio.name}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.3em] text-aurora-200">{researchSection.bio.title}</p>
        <p className="mt-4 text-ink-200">{researchSection.bio.summary}</p>
        <ul className="mt-6 space-y-3 text-ink-100">
          {researchSection.bio.credentials.map((credential) => (
            <li key={credential} className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-aurora-300" />
              {credential}
            </li>
          ))}
        </ul>
      </FadeInOnScroll>
      <div className="space-y-6">
        <FadeInOnScroll className="rounded-3xl border border-white/10 bg-white/[0.02] p-6" y={40}>
          <h4 className="font-display text-xl text-white">Learning hurdles solved</h4>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {researchSection.bio.hurdles.map((hurdle) => (
              <div key={hurdle} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-ink-200">
                {hurdle}
              </div>
            ))}
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll className="rounded-3xl border border-white/10 bg-gradient-to-r from-ink-900 to-ink-800 p-6">
          <p className="text-lg text-white">{researchSection.bio.quote}</p>
        </FadeInOnScroll>
      </div>
    </div>
  </SectionWrapper>
)

export default ResearchSection

