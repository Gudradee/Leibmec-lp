// Framer Motion animation variants — centralized for the whole project

// ─── Fade animations ───────────────────────────────────────────────────────
export const fadeInUp = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -24, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1 },
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
}

export const fadeInRight = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1 },
}

// ─── Stagger container ─────────────────────────────────────────────────────
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
}

export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
}

// ─── Page transitions ──────────────────────────────────────────────────────
export const pageTransition = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.3 } },
}

// ─── Common transitions ────────────────────────────────────────────────────
export const smoothTransition = {
  duration: 0.6,
  ease: [0.16, 1, 0.3, 1],
}

export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 28,
}

export const snappyTransition = {
  duration: 0.35,
  ease: [0.16, 1, 0.3, 1],
}

// ─── Hover micro-animations ────────────────────────────────────────────────
export const hoverLift = {
  whileHover: { y: -4, scale: 1.02 },
  transition: { duration: 0.2 },
}

export const hoverGlow = {
  whileHover: { boxShadow: '0 0 24px rgba(254, 197, 57, 0.2)' },
}

// ─── Floating background elements ──────────────────────────────────────────
export const floatSlow = {
  animate: { y: [0, -30, 0], scale: [1, 1.08, 1] },
  transition: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
}

export const floatMedium = {
  animate: { y: [0, 24, 0], scale: [1, 1.06, 1] },
  transition: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 },
}

export const floatFast = {
  animate: { x: [0, 18, 0], y: [0, -18, 0] },
  transition: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 },
}

// ─── Gold pulse (for borders and badges) ───────────────────────────────────
export const goldPulse = {
  animate: {
    borderColor: [
      'rgba(254,197,57,0.2)',
      'rgba(254,197,57,0.55)',
      'rgba(254,197,57,0.2)',
    ],
  },
  transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
}

export const goldBadgePulse = {
  animate: {
    borderColor: [
      'rgba(254,197,57,0.25)',
      'rgba(254,197,57,0.7)',
      'rgba(254,197,57,0.25)',
    ],
  },
  transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' },
}
