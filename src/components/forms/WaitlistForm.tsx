type Field = {
  label: string
  name: string
  type: string
  placeholder?: string
  required?: boolean
}

type WaitlistFormProps = {
  id: string
  title: string
  fields: ReadonlyArray<Field>
  submitLabel: string
  successMessage?: string
  isSubmitting?: boolean
}

const WaitlistForm = ({ id, title, fields, submitLabel, isSubmitting = false }: WaitlistFormProps) => {
  return (
    <div
      id={id}
      className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 shadow-lg shadow-black/10"
    >
      <h3 className="font-display text-2xl text-white">{title}</h3>
      <div className="mt-6 space-y-4">
        {fields.map((field) => (
          <label key={field.name} className="block text-sm">
            <span className="text-ink-300">{field.label}</span>
            <input
              className="mt-2 w-full rounded-2xl border border-white/10 bg-ink-900 px-4 py-3 text-white outline-none transition focus:border-aurora-400 disabled:opacity-50 disabled:cursor-not-allowed"
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required={field.required}
              disabled={isSubmitting}
            />
          </label>
        ))}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-6 w-full rounded-full bg-aurora-500 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-ink-950 shadow-glow-sm transition hover:bg-aurora-400 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Submitting...' : submitLabel}
      </button>
    </div>
  )
}

export default WaitlistForm

