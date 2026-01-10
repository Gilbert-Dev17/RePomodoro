// lib/motion.ts
export const fadeIn = ({
  delay = 0,
  duration = 0.8, // Increased from 0.3 for a more relaxed feel
} = {}) => ({
  initial: {
    opacity: 0,
    y: 10,             // Start slightly lower
    filter: 'blur(4px)' // Start slightly blurry
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)'
  },
  exit: {
    opacity: 0,
    y: -10,
    filter: 'blur(4px)'
  },
  transition: {
    duration,
    delay,
    // This is a custom "soft" curve similar to Apple's UI
    ease: [0.25, 0.4, 0.25, 1] as const,
  },
})