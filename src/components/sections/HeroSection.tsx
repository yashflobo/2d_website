import Button from '../common/Button'
import { FadeInOnScroll, MotionBadge } from '../motion/Primitives'
import { heroContent } from '../../data/content'

const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden bg-ink-950 px-6 pb-20 pt-28 text-ink-50 md:pt-32"
  >
    <div className="pointer-events-none absolute inset-0 bg-gradient-aurora opacity-60 blur-3xl" />
    <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <MotionBadge>{heroContent.tag}</MotionBadge>
        <FadeInOnScroll>
          <h1 className="font-display text-4xl leading-tight text-white md:text-5xl lg:text-6xl">
            {heroContent.title}
          </h1>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.1}>
          <p className="text-lg text-ink-200 md:text-xl">{heroContent.subtitle}</p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.2}>
          <p className="text-ink-300">{heroContent.body}</p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.25}>
          <ul className="space-y-3 text-ink-100">
            {heroContent.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-aurora-300" />
                {bullet}
              </li>
            ))}
          </ul>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.3}>
          <p className="text-sm uppercase tracking-[0.25em] text-aurora-200">
            {heroContent.prompt}
          </p>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.35}>
          <div className="flex flex-wrap gap-4">
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            {heroContent.secondaryCta ? (
              <Button href={heroContent.secondaryCta.href} variant="secondary">
                {heroContent.secondaryCta.label}
              </Button>
            ) : null}
          </div>
        </FadeInOnScroll>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
        <p className="text-xs uppercase tracking-[0.3em] text-ink-300">Next up</p>
        <p className="mt-3 font-display text-3xl text-white">December 16 drop</p>
        <p className="mt-2 text-ink-300">
          We’ll email the unzip link, teaser instructions, and a referral code as soon as the countdown hits zero.
        </p>
        <div className="mt-6 space-y-3 text-sm text-ink-200">
          <p>1. Join the waitlist</p>
          <p>2. Receive the curiosity prompt</p>
          <p>3. Unlock the teaser + share with friends</p>
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection

