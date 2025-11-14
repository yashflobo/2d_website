import { motion, useAnimation, useInView } from 'framer-motion'
import { type ElementType, type ReactNode, useEffect, useRef } from 'react'

type BaseProps = {
  children: ReactNode
  className?: string
  as?: ElementType
}

type RevealProps = BaseProps & {
  delay?: number
  duration?: number
  y?: number
  opacity?: number
  once?: boolean
}

export const FadeInOnScroll = ({
  children,
  className,
  as: Component = motion.div,
  delay = 0,
  duration = 0.6,
  y = 24,
  opacity = 0,
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once, amount: 0.35 })

  useEffect(() => {
    if (inView) {
      void controls.start('visible')
    }
  }, [controls, inView])

  return (
    <Component
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity, y },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration, delay, ease: [0.16, 1, 0.3, 1] },
        },
      }}
    >
      {children}
    </Component>
  )
}

type StaggerProps = BaseProps & {
  staggerChildren?: number
  delayChildren?: number
  once?: boolean
}

export const StaggerContainer = ({
  children,
  className,
  as: Component = motion.div,
  staggerChildren = 0.12,
  delayChildren = 0.15,
  once = true,
}: StaggerProps) => (
  <Component
    className={className}
    variants={{
      hidden: {},
      visible: {
        transition: { staggerChildren, delayChildren },
      },
    }}
    initial="hidden"
    whileInView="visible"
    viewport={{ once, amount: 0.3 }}
  >
    {children}
  </Component>
)

type HoverProps = BaseProps & {
  scale?: number
}

export const HoverScale = ({
  children,
  className,
  as: Component = motion.div,
  scale = 1.03,
}: HoverProps) => (
  <Component
    className={className}
    whileHover={{ scale, transition: { duration: 0.25 } }}
    whileTap={{ scale: scale - 0.02 }}
  >
    {children}
  </Component>
)

export const MotionBadge = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => (
  <FadeInOnScroll
    as={motion.span}
    className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-white/80 ${className ?? ''}`}
    delay={0.1}
    y={12}
  >
    {children}
  </FadeInOnScroll>
)

