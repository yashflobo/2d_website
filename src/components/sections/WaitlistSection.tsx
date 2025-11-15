import SectionWrapper from '../layout/SectionWrapper'
import { waitlistSection } from '../../data/content'
import WaitlistForm from '../forms/WaitlistForm'

const WaitlistSection = () => (
  <SectionWrapper
    id="waitlist"
    eyebrow="Join Now"
    headline={waitlistSection.title}
    description={waitlistSection.subtitle}
  >
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <h4 className="font-display text-xl text-white">Waitlist Benefits</h4>
          <ul className="mt-4 space-y-3 text-ink-200">
            {waitlistSection.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-aurora-300 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-6">
        <WaitlistForm {...waitlistSection.parentForm} />
        {waitlistSection.note && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 text-sm text-ink-300">
            <p>{waitlistSection.note}</p>
          </div>
        )}
      </div>
    </div>
  </SectionWrapper>
)

export default WaitlistSection

