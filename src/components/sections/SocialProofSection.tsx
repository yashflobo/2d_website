import SectionWrapper from '../layout/SectionWrapper'
import { socialProofSection } from '../../data/content'
import { FadeInOnScroll } from '../motion/Primitives'

const SocialProofSection = () => (
  <SectionWrapper
    id="social-proof"
    eyebrow="Social proof"
    headline={socialProofSection.title}
  >
    <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
        <div className="grid gap-6 md:grid-cols-2">
          {socialProofSection.metrics.map((metric) => (
            <FadeInOnScroll key={metric.label} className="rounded-2xl border border-white/5 bg-white/[0.03] p-4">
              <p className="font-display text-4xl text-white">{metric.value}</p>
              <p className="text-sm text-ink-300">{metric.label}</p>
              <p className="text-xs text-ink-400">{metric.subtext}</p>
            </FadeInOnScroll>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3 text-xs text-ink-200">
          {socialProofSection.badges.map((badge) => (
            <span key={badge} className="rounded-full border border-white/10 px-3 py-1">
              {badge}
            </span>
          ))}
        </div>
      </div>
      <div className="space-y-4">
        {socialProofSection.testimonials.map((testimonial) => (
          <FadeInOnScroll key={testimonial.role} className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-aurora-200">{testimonial.role}</p>
            <p className="mt-3 text-base text-white">"{testimonial.quote}"</p>
          </FadeInOnScroll>
        ))}
      </div>
    </div>
  </SectionWrapper>
)

export default SocialProofSection

