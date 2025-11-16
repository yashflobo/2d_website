import { useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import SectionWrapper from '../components/layout/SectionWrapper'
import { waitlistSection } from '../data/content'
import { registerUser, RegistrationError } from '../services/registrationService'

type Field = {
  label: string
  name: string
  type: string
  placeholder?: string
  required?: boolean
}

const RegistrationPage = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const formConfig = waitlistSection.parentForm
  
  // Filter benefits to show only the two key points
  const filteredBenefits = waitlistSection.benefits.filter(
    (benefit) =>
      benefit.includes('Priority access when we launch publicly in March') ||
      benefit.includes('Founding member pricing (50% off for first 1,000)')
  )

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)
    setError(null)

    const formData = new FormData(event.currentTarget)
    const data = {
      email: formData.get('email') as string,
      firstName: formData.get('firstName') as string,
      grade: formData.get('grade') as string,
    }

    try {
      await registerUser(data)

      // On success (201), redirect to thank you page
      navigate('/thank-you')
    } catch (err) {
      // Handle registration errors
      if (err instanceof RegistrationError) {
        setError(err.message)
        // For 409 (email already registered), keep user on form
        // For other errors, also keep user on form
        setLoading(false)
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred. Please try again.')
        setLoading(false)
      }
    }
  }

  return (
    <div className="min-h-screen bg-ink-950 text-ink-50">
      <Header />
      <main className="py-20">
        <SectionWrapper
          id="registration"
          eyebrow="Join Now"
          headline={waitlistSection.title}
          description={waitlistSection.subtitle}
        >
          <div className="mx-auto max-w-2xl">
            <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
              <div className="space-y-6 order-2 lg:order-1">
                <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                  <h4 className="font-display text-xl text-white">Waitlist Benefits</h4>
                  <ul className="mt-4 space-y-3 text-ink-200">
                    {filteredBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-1 h-2 w-2 rounded-full bg-aurora-300 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-6 order-1 lg:order-2">
                <form
                  id={formConfig.id}
                  onSubmit={handleSubmit}
                  className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-lg shadow-black/10"
                >
                  <h3 className="font-display text-2xl text-white">{formConfig.title}</h3>
                  <div className="mt-6 space-y-4">
                    {formConfig.fields.map((field: Field) => (
                      <label key={field.name} className="block text-sm">
                        <span className="text-ink-300">{field.label}</span>
                        <input
                          className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none transition focus:border-aurora-400"
                          type={field.type}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required}
                          disabled={loading}
                        />
                      </label>
                    ))}
                  </div>
                  {error && (
                    <div className="mt-4 rounded-2xl border border-red-400/50 bg-red-500/10 px-4 py-3 text-sm text-red-100">
                      {error}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="mt-6 w-full rounded-full bg-aurora-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink-950 shadow-glow-sm transition hover:bg-aurora-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : formConfig.submitLabel}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </SectionWrapper>
      </main>
      <Footer />
    </div>
  )
}

export default RegistrationPage
