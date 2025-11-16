import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { navLinks, heroContent } from '../../data/content'

const Header = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const isRegisterPage = location.pathname === '/register'
  const toggle = () => setOpen((prev) => !prev)

  return (
    <header className="sticky top-0 z-40 backdrop-blur border-b border-white/10 bg-ink-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-3">
          <img src="/logoOnly.png" alt="ARious Logo" className="h-10 w-10" />
          <div>
            <p className="font-display text-lg text-white">ARious</p>
            <p className="text-xs uppercase tracking-[0.3em] text-aurora-200">{heroContent.tag}</p>
          </div>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-ink-200 md:flex">
          {isRegisterPage && (
            <Link to="/preview" className="transition hover:text-white">
              Home
            </Link>
          )}
          {navLinks
            .filter((link: { label: string; href: string }) => !isRegisterPage || link.label !== 'Register')
            .map((link: { label: string; href: string }) => (
              <a key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </a>
            ))}
        </nav>
        {!isRegisterPage && (
          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/register"
              className="rounded-full bg-aurora-500 px-4 py-2 text-sm font-semibold text-ink-950 shadow-glow-sm transition hover:bg-aurora-400"
            >
              {heroContent.primaryCta.label}
            </Link>
          </div>
        )}
        <button className="md:hidden text-white" onClick={toggle} aria-label="Toggle navigation">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="h-6 w-6 stroke-current">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-ink-900/95 px-6 pb-6 pt-2 md:hidden">
          <nav className="flex flex-col gap-3 text-sm text-ink-100">
            {isRegisterPage && (
              <Link to="/preview" className="rounded-lg px-3 py-2 transition hover:bg-white/5">
                Home
              </Link>
            )}
            {navLinks
              .filter((link: { label: string; href: string }) => !isRegisterPage || link.label !== 'Register')
              .map((link: { label: string; href: string }) => (
                <a key={link.href} href={link.href} className="rounded-lg px-3 py-2 transition hover:bg-white/5">
                  {link.label}
                </a>
              ))}
            {!isRegisterPage && (
              <a
                href={heroContent.primaryCta.href}
                className="rounded-full bg-aurora-500 px-4 py-2 text-center font-semibold text-ink-950"
              >
                {heroContent.primaryCta.label}
              </a>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

