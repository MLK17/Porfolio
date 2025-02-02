import React from 'react'
import { motion } from 'framer-motion'

// Effet de glissement
export function SlideTransition({ children }) {
  return (
    <motion.div
      initial={{ x: -1000 }}
      animate={{ x: 0 }}
      exit={{ x: 1000 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
} 