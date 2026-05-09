'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  delay?: number
  className?: string
}

// Curva de animación idéntica a la de Apple (ease out exponencial)
const APPLE_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1]

export function FadeUp({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, ease: APPLE_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: APPLE_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function ScaleIn({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: APPLE_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideLeft({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: APPLE_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function SlideRight({ children, delay = 0, className }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: APPLE_EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// Para grids: cada hijo aparece con un retraso progresivo
interface StaggerProps {
  children: ReactNode[]
  className?: string
  baseDelay?: number
  stagger?: number
}

export function StaggerGrid({ children, className, baseDelay = 0, stagger = 0.1 }: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, ease: APPLE_EASE, delay: baseDelay + i * stagger }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
