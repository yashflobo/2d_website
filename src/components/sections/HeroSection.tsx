import Button from '../common/Button'
import { FadeInOnScroll, MotionBadge } from '../motion/Primitives'
import { heroContent } from '../../data/content'

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden bg-ink-950 px-6 pb-20 pt-28 text-ink-50 md:pt-32"
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-60 blur-3xl" />
    <div className="relative mx-auto max-w-6xl text-center">
      <div className="space-y-6">
        <MotionBadge>{heroContent.tag}</MotionBadge>
        <FadeInOnScroll>
          <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1}>
          <p className="mx-auto max-w-4xl text-lg text-ink-200 md:text-xl">{heroContent.subtitle}</p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <p className="text-ink-300">
            {heroContent.stats.toyDescription}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.25}>
          <p className="text-ink-300">
            {heroContent.stats.developer}, {heroContent.stats.experience}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.3}>
          <p className="text-sm uppercase tracking-[0.25em] text-aurora-200">
            {heroContent.stats.launchInfo}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.35}>
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg text-white">
              {heroContent.metrics.parents} and {heroContent.metrics.schools} {heroContent.metrics.waitlistText}
            </p>
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
          </div>
        </FadeInOnScroll>
      </div>
      
      <FadeInOnScroll delay={0.4}>
        <div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-aurora-200">Invite-only launch in December</p>
          <p className="mt-2 text-xs text-ink-400">Join waitlist for general public launch in March</p>
          <div className="mt-6 grid grid-cols-2 gap-4 text-center text-white sm:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-4">
              <p className="font-display text-3xl">5</p>
              <p className="text-xs uppercase tracking-[0.3em] text-ink-300">Days</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-4">
              <p className="font-display text-3xl">12</p>
              <p className="text-xs uppercase tracking-[0.3em] text-ink-300">Hours</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-4">
              <p className="font-display text-3xl">30</p>
              <p className="text-xs uppercase tracking-[0.3em] text-ink-300">Minutes</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-3 py-4">
              <p className="font-display text-3xl">29</p>
              <p className="text-xs uppercase tracking-[0.3em] text-ink-300">Seconds</p>
            </div>
          </div>
          <p className="mt-6 text-ink-100">{heroContent.urgency.remaining}</p>
          <p className="mt-2 text-sm text-ink-300">{heroContent.urgency.queue}</p>
        </div>
      </FadeInOnScroll>
    </div>
  </section>
)

export default HeroSection

