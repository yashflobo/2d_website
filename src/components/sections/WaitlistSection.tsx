import SectionWrapper from '../layout/SectionWrapper'
import Button from '../common/Button'
import { waitlistSection } from '../../data/content'

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
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-lg shadow-black/10">
          <h3 className="font-display text-2xl text-white">Ready to Join?</h3>
          <p className="mt-4 text-ink-200">
            Click the button below to register for the waitlist and secure your spot.
          </p>
          <Button as="link" to="/register" className="mt-6 w-full">
            {waitlistSection.parentForm.submitLabel}
          </Button>
        </div>
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

