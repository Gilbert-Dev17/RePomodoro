// lib/motion.ts
export const fadeIn = ({
  delay = 0,
  duration = 0.3,
} = {}) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration,
    delay,
    ease: "easeOut",
  },
})
