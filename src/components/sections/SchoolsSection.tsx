import SectionWrapper from '../layout/SectionWrapper'
import { schoolSection } from '../../data/content'
import Button from '../common/Button'
import { FadeInOnScroll } from '../motion/Primitives'

const SchoolsSection = () => (
  <SectionWrapper
    id="schools"
    eyebrow="For schools & districts"
    headline={schoolSection.title}
    description={schoolSection.subtitle}
  >
    <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-8">
        <div className="grid gap-6 md:grid-cols-2">
          {schoolSection.values.map((value) => (
            <FadeInOnScroll key={value.title} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5" y={32}>
              <h3 className="font-display text-xl text-white">{value.title}</h3>
              <p className="mt-2 text-ink-200">{value.body}</p>
            </FadeInOnScroll>
          ))}
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <h4 className="font-display text-xl text-white">Implementation package</h4>
          <ul className="mt-4 space-y-3 text-ink-200">
            {schoolSection.implementation.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-dusk-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="space-y-6">
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]">
          <table className="w-full text-left text-sm text-ink-200">
            <thead className="bg-white/[0.03] text-xs uppercase tracking-widest text-ink-400">
              <tr>
                <th className="px-4 py-3">Dimension</th>
                <th className="px-4 py-3">Traditional</th>
                <th className="px-4 py-3">CodexAR</th>
              </tr>
            </thead>
            <tbody>
              {schoolSection.comparison.map((row) => (
                <tr key={row.label} className="border-t border-white/5">
                  <td className="px-4 py-3 text-white">{row.label}</td>
                  <td className="px-4 py-3">{row.before}</td>
                  <td className="px-4 py-3 text-aurora-100">{row.after}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-ink-100">
          <p className="text-lg">“{schoolSection.testimonials[0].quote}”</p>
          <p className="mt-3 text-sm text-ink-400">{schoolSection.testimonials[0].author}</p>
        </div>
        <div className="rounded-3xl border border-dusk-400/40 bg-dusk-400/10 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-dusk-100">Partnership</p>
          <p className="mt-3 text-white">{schoolSection.partnership}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {schoolSection.ctas.map((cta) => (
              <Button
                key={cta.label}
                href={cta.href}
                variant={cta.label === schoolSection.ctas[0].label ? 'primary' : 'secondary'}
              >
                {cta.label}
              </Button>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
          <h4 className="font-display text-xl text-white">B2B FAQ</h4>
          <ul className="mt-4 space-y-3 text-ink-200">
            {schoolSection.faq.map((item) => (
              <li key={item} className="rounded-2xl border border-white/5 bg-white/[0.02] p-3">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </SectionWrapper>
)

export default SchoolsSection

