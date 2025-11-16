import { type ComponentPropsWithoutRef, type ElementType } from 'react'
import { Link, type LinkProps } from 'react-router-dom'

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'ghost'
  as?: 'a' | 'button' | 'link'
  className?: string
  children: React.ReactNode
} & (
  | (ComponentPropsWithoutRef<'a'> & { as?: 'a' })
  | (ComponentPropsWithoutRef<'button'> & { as?: 'button' })
  | (LinkProps & { as?: 'link' })
)

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-aurora-500 text-ink-950 shadow-glow-sm hover:bg-aurora-400 focus-visible:outline-aurora-200',
  secondary: 'border border-white/15 text-white hover:bg-white/5 focus-visible:outline-white/80',
  ghost: 'text-aurora-200 hover:text-white',
}

const Button = ({ variant = 'primary', as = 'a', className = '', children, ...props }: ButtonProps) => {
  const baseClassName = `inline-flex rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`

  if (as === 'link' || (as === 'a' && 'to' in props)) {
    return (
      <Link className={baseClassName} {...(props as LinkProps)}>
        {children}
      </Link>
    )
  }

  if (as === 'button') {
    const { ...buttonProps } = props as ComponentPropsWithoutRef<'button'>
    return (
      <button className={baseClassName} {...buttonProps}>
        {children}
      </button>
    )
  }

  const { ...anchorProps } = props as ComponentPropsWithoutRef<'a'>
  return (
    <a className={baseClassName} {...anchorProps}>
      {children}
    </a>
  )
}

export default Button

