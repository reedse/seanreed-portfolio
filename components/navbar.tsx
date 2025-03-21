"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Sun, Moon } from "lucide-react"
import { MobileMenu } from "./mobile-menu"
import { motion, AnimatePresence } from "framer-motion"
import TubeNavLink from "./tube-nav-link"
import { useTheme } from "next-themes"

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const isDarkMode = theme === "dark"

  // Mount effect to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  // Handle scroll to detect active section
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state for navbar background
      setScrolled(window.scrollY > 50)

      // Get all sections
      const sections = ["home", "portfolio", "about", "contact"]

      // Find the current section in view
      for (const section of sections.reverse()) { // Reverse to prioritize later sections
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          // If the section is in view (with a larger buffer for better detection)
          if (rect.top <= 300 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      // Smooth scroll to element with a larger offset
      window.scrollTo({
        top: element.offsetTop - 100, // Increased offset for better positioning
        behavior: "smooth",
      })
    }
  }

  // Toggle theme function
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${
        scrolled ? "glass-effect" : "bg-transparent"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex items-center justify-between max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Link href="/" className="text-xl font-medium">
            <span className="text-foreground">SEAN</span>{" "}
            <motion.span
              className="text-primary"
              whileHover={{
                scale: 1.05,
                textShadow: "0 0 8px rgba(16, 185, 129, 0.7)",
              }}
            >
              REED
            </motion.span>
          </Link>
        </motion.div>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-10">
            <motion.div
              className="flex space-x-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <TubeNavLink isActive={activeSection === "home"} onClick={() => scrollToSection("home")}>
                Home
              </TubeNavLink>
              <TubeNavLink isActive={activeSection === "portfolio"} onClick={() => scrollToSection("portfolio")}>
                Portfolio
              </TubeNavLink>
              <TubeNavLink isActive={activeSection === "about"} onClick={() => scrollToSection("about")}>
                About
              </TubeNavLink>
              <TubeNavLink isActive={activeSection === "contact"} onClick={() => scrollToSection("contact")}>
                Contact
              </TubeNavLink>
            </motion.div>
          </nav>

          <motion.button
            className="bg-secondary/50 border border-border rounded-full p-2 text-foreground hover:border-primary transition-colors"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1, rotate: 180 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            aria-label="Theme toggle"
          >
            <AnimatePresence mode="wait">
              {mounted && (
                <motion.div
                  key={isDarkMode ? "moon" : "sun"}
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}
                  aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>

          <MobileMenu activeSection={activeSection} onSectionChange={scrollToSection} />
        </div>
      </div>
    </motion.header>
  )
}

