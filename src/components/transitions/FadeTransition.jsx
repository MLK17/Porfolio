import React from 'react'
import { motion } from 'framer-motion'

// Effet de fondu avec scale
export function FadeTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
} 