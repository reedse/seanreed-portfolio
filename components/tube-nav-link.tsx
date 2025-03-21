"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface TubeNavLinkProps {
  children: ReactNode
  isActive: boolean
  onClick: () => void
  className?: string
  isMobile?: boolean
}

export default function TubeNavLink({
  children,
  isActive,
  onClick,
  className = "",
  isMobile = false,
}: TubeNavLinkProps) {
  return (
    <motion.button
      onClick={onClick}
      className={`relative uppercase font-medium ${className} ${isActive ? "text-primary" : "text-foreground"}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId={isMobile ? "mobile-tube" : "desktop-tube"}
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary rounded-full"
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            boxShadow: "0 0 8px 1px hsl(var(--primary))",
          }}
          transition={{ duration: 0.3 }}
        />
      )}
    </motion.button>
  )
}

