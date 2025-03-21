"use client"

import { motion } from "framer-motion"
import { type ReactNode, forwardRef } from "react"

interface AnimatedSectionProps {
  children: ReactNode
  id: string
  className?: string
}

const AnimatedSection = forwardRef<HTMLDivElement, AnimatedSectionProps>(({ children, id, className = "" }, ref) => {
  return (
    <motion.div
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
})

AnimatedSection.displayName = "AnimatedSection"

export default AnimatedSection

