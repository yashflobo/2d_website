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
        <FadeInOnScroll delay={0.3}>
          <div className="flex flex-wrap gap-4">
            <Button href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</Button>
            <Button href={heroContent.secondaryCta.href} variant="secondary">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </FadeInOnScroll>
        <FadeInOnScroll delay={0.35}>
          <p className="text-xs uppercase tracking-[0.3em] text-ink-400">
            {heroContent.trustBadges.join(' • ')}
          </p>
        </FadeInOnScroll>
      </div>
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
        <div className="grid gap-6">
          {heroContent.stats.map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/[0.02] p-4">
              <p className="font-display text-3xl text-white">{stat.value}</p>
              <p className="text-sm text-ink-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default HeroSection

