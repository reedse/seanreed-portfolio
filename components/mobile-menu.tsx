"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import TubeNavLink from "./tube-nav-link"

interface MobileMenuProps {
  activeSection: string
  onSectionChange: (section: string) => void
}

export function MobileMenu({ activeSection, onSectionChange }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const handleSectionClick = (section: string) => {
    onSectionChange(section)
    setIsOpen(false)
  }

  return (
    <div className="md:hidden">
      <motion.button
        onClick={() => setIsOpen(true)}
        className="text-foreground p-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Open menu"
      >
        <Menu size={24} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop - higher z-index to cover everything */}
            <motion.div
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[500]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Menu Panel - even higher z-index and solid background */}
            <motion.div
              className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-[600] flex flex-col shadow-xl"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
            >
              {/* Add an extra header spacer to ensure complete coverage */}
              <div className="h-4 w-full bg-background"></div>
              
              <div className="flex justify-end p-4">
                <motion.button
                  onClick={() => setIsOpen(false)}
                  className="text-foreground p-2"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Close menu"
                >
                  <X size={24} />
                </motion.button>
              </div>

              <motion.nav
                className="flex flex-col items-center justify-center space-y-8 px-4 pb-8"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <TubeNavLink
                    isActive={activeSection === "home"}
                    onClick={() => handleSectionClick("home")}
                    className="text-2xl"
                    isMobile={true}
                  >
                    Home
                  </TubeNavLink>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <TubeNavLink
                    isActive={activeSection === "portfolio"}
                    onClick={() => handleSectionClick("portfolio")}
                    className="text-2xl"
                    isMobile={true}
                  >
                    Portfolio
                  </TubeNavLink>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <TubeNavLink
                    isActive={activeSection === "about"}
                    onClick={() => handleSectionClick("about")}
                    className="text-2xl"
                    isMobile={true}
                  >
                    About
                  </TubeNavLink>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <TubeNavLink
                    isActive={activeSection === "contact"}
                    onClick={() => handleSectionClick("contact")}
                    className="text-2xl"
                    isMobile={true}
                  >
                    Contact
                  </TubeNavLink>
                </motion.div>
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}

