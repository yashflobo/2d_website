import { useState, type FormEvent } from 'react'

type Field = {
  label: string
  name: string
  type: string
  required?: boolean
}

type WaitlistFormProps = {
  id: string
  title: string
  fields: ReadonlyArray<Field>
  submitLabel: string
}

const WaitlistForm = ({ id, title, fields, submitLabel }: WaitlistFormProps) => {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-lg shadow-black/10"
    >
      <h3 className="font-display text-2xl text-white">{title}</h3>
      <p className="mt-1 text-sm text-ink-300">Your spot is moments away.</p>
      <div className="mt-6 space-y-4">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm">
            <span className="text-ink-300">{field.label}</span>
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none transition focus:border-aurora-400"
              type={field.type}
              name={field.name}
              required={field.required}
            />
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-aurora-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink-950 shadow-glow-sm transition hover:bg-aurora-400"
      >
        {submitLabel}
      </button>
      {submitted && (
        <p className="mt-4 rounded-2xl border border-aurora-400/50 bg-aurora-500/10 px-4 py-3 text-sm text-aurora-100">
          🎉 You’re on the list! Check your email for next steps and your unique referral link.
        </p>
      )}
    </form>
  )
}

export default WaitlistForm

