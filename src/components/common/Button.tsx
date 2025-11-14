import { type ComponentPropsWithoutRef, type ElementType } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'secondary' | 'ghost'
  as?: 'a' | 'button'
}

const variantStyles: Record<NonNullable<ButtonProps['variant']>, string> = {
  primary:
    'bg-aurora-500 text-ink-950 shadow-glow-sm hover:bg-aurora-400 focus-visible:outline-aurora-200',
  secondary: 'border border-white/15 text-white hover:bg-white/5 focus-visible:outline-white/80',
  ghost: 'text-aurora-200 hover:text-white',
}

const Button = ({ variant = 'primary', as = 'a', className = '', children, ...props }: ButtonProps) => {
  const Element = as as ElementType
  return (
    <Element
      className={`inline-flex rounded-full px-5 py-3 text-sm font-semibold uppercase tracking-wide transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </Element>
  )
}

export default Button

