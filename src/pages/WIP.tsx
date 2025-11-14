import logo from '/logo.png'

const WIPPage = () => (
  <div className="min-h-screen bg-ink-950 text-ink-50 flex items-center justify-center px-6">
    <div className="max-w-md text-center space-y-6">
      <img src={logo} alt="ARious logo" className="mx-auto h-16 w-auto" />
      <div className="space-y-2">
        <p className="text-sm uppercase tracking-[0.3em] text-ink-300">
          Work in progress
        </p>
        <h1 className="text-3xl font-semibold">ARious is almost here</h1>
        <p className="text-ink-200 text-base">
          We&apos;re crafting an immersive learning experience for teachers. Check back soon to see
          the full story.
        </p>
      </div>
      <p className="text-xs text-ink-400">Need early access? Reach out at hello@codexar.ai</p>
    </div>
  </div>
)

export default WIPPage


