import { navLinks } from '../../data/content'

const Footer = () => (
  <footer className="border-t border-white/10 bg-ink-950 px-6 py-10 text-sm text-ink-300">
    <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
      <div>
        <p className="font-display text-xl text-white">ARious</p>
        <p className="text-xs tracking-widest text-ink-400">© 2025 ARious. All rights reserved.</p>
      </div>
      <nav className="flex flex-wrap gap-4">
        {(navLinks as unknown as Array<{ href: string; label: string }>).map((link) => (
          <a key={link.href} href={link.href} className="transition hover:text-white">
            {link.label}
          </a>
        ))}
        <a href="/privacy" className="transition hover:text-white">
          Privacy
        </a>
        <a href="/terms" className="transition hover:text-white">
          Terms
        </a>
      </nav>
    </div>
  </footer>
)

export default Footer

