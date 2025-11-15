import SectionWrapper from '../layout/SectionWrapper'
import { waitlistSection } from '../../data/content'
import WaitlistForm from '../forms/WaitlistForm'
import { FadeInOnScroll } from '../motion/Primitives'

const WaitlistSection = () => (
  <SectionWrapper
    id="waitlist"
    eyebrow="Final CTA"
    headline={waitlistSection.title}
    description={waitlistSection.subtitle}
  >
    <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-aurora-200">Urgency</p>
          <div className="mt-4 grid grid-cols-2 gap-4 text-center text-white sm:grid-cols-4">
            {waitlistSection.urgency.countdown.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-4">
                <p className="font-display text-2xl">{item.split(' ')[0]}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-ink-300">{item.split(' ')[1]}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-ink-100">{waitlistSection.urgency.remaining}</p>
          <p className="text-sm text-ink-300">{waitlistSection.urgency.queue}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <h4 className="font-display text-xl text-white">Waitlist benefits</h4>
          <ul className="mt-4 space-y-3 text-ink-200">
            {waitlistSection.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-aurora-300" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
        <FadeInOnScroll className="rounded-3xl border border-white/10 bg-white/[0.02] p-6" y={32}>
          <p className="text-sm uppercase tracking-[0.3em] text-dusk-200">Referral Rewards</p>
          <ul className="mt-4 space-y-3 text-ink-200">
            {waitlistSection.referral.map((reward) => (
              <li key={reward}>{reward}</li>
            ))}
          </ul>
        </FadeInOnScroll>
      </div>
      <div className="space-y-6">
        <WaitlistForm {...waitlistSection.parentForm} />
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-sm text-ink-200">
          <p className="text-xs uppercase tracking-[0.3em] text-aurora-200">Invite-only pilots</p>
          <p className="mt-3">
            Pilot programs for schools are now handled privately. After you join, we’ll reach out if your district is a fit
            for the backstage preview.
          </p>
        </div>
      </div>
    </div>
  </SectionWrapper>
)

export default WaitlistSection

