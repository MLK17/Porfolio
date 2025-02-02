import React from 'react'
import { AnimatePresence } from 'framer-motion'
import { FadeTransition } from './transitions/FadeTransition'
import { SlideTransition } from './transitions/SlideTransition'

export default function PageTransition({ children }) {
  return (
    <AnimatePresence mode="wait">
      <FadeTransition>
        {children}
      </FadeTransition>
    </AnimatePresence>
  )
} 