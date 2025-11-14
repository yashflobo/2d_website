import SectionWrapper from '../layout/SectionWrapper'
import { parentSection } from '../../data/content'
import Button from '../common/Button'
import { FadeInOnScroll, StaggerContainer } from '../motion/Primitives'

const ParentsSection = () => (
  <SectionWrapper
    id="parents"
    eyebrow="For parents"
    headline={parentSection.title}
    description={parentSection.subtitle}
  >
    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {parentSection.pains.map((pain) => (
            <FadeInOnScroll
              key={pain.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
              y={28}
            >
              <p className="text-xs uppercase tracking-[0.35em] text-aurora-200">{pain.title}</p>
              <p className="mt-2 text-ink-100">{pain.body}</p>
            </FadeInOnScroll>
          ))}
        </div>
        <div>
          <h3 className="font-display text-xl text-white">What your child gets</h3>
          <ul className="mt-4 space-y-3 text-ink-200">
            {parentSection.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-aurora-300" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-3xl border border-aurora-500/40 bg-aurora-500/10 p-6 text-aurora-100">
          <p className="text-sm uppercase tracking-[0.3em]">Early access special pricing</p>
          <p className="mt-3 text-lg text-white">{parentSection.pricing}</p>
          <div className="mt-4">
            <Button href={parentSection.cta.href}>{parentSection.cta.label}</Button>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <StaggerContainer className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          {parentSection.testimonials.map((testimonial) => (
            <FadeInOnScroll key={testimonial.author} className="space-y-3">
              <p className="text-lg text-white">“{testimonial.quote}”</p>
              <p className="text-sm text-ink-300">{testimonial.author}</p>
            </FadeInOnScroll>
          ))}
        </StaggerContainer>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <h4 className="font-display text-xl text-white">Parent FAQ</h4>
          <ul className="mt-4 space-y-3">
            {parentSection.faq.map((entry) => (
              <li key={entry} className="rounded-2xl border border-white/5 bg-white/[0.02] p-3 text-ink-200">
                {entry}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
)

export default ParentsSection

