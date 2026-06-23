import type {MotionProps} from 'framer-motion'

/**
 * Common animation configuration presets used across components
 */

export const pulseAnimation: MotionProps = {
  animate: { opacity: [1, 0.4, 1] },
  transition: { repeat: Infinity, duration: 2 },
}

export const scaleAnimation: MotionProps = {
  animate: { scale: [1, 1.05, 1] },
  transition: { repeat: Infinity, duration: 2, delay: 1 },
}

export const progressBarAnimation: MotionProps = {
  initial: { width: '30%' },
  animate: { width: ['30%', '85%', '30%'] },
  transition: { duration: 6, ease: 'easeInOut', repeat: Infinity },
}

export const glowAnimation: MotionProps = {
  animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] },
  transition: { repeat: Infinity, duration: 3, ease: 'easeInOut'},
}
