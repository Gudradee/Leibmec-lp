import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { smoothTransition } from '../animations/variants.js'

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 28 : direction === 'down' ? -28 : 0,
      x: direction === 'left' ? 28 : direction === 'right' ? -28 : 0,
      scale: 0.97,
    },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ ...smoothTransition, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
