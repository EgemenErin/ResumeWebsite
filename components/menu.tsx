"use client"

import { useState } from "react"
import Link from "next/link"
import { X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

/**
 * Enhanced menu component with improved animations
 *
 * Provides a fullscreen menu overlay with navigation links
 */
export function Menu() {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  const containerVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <>
      <button className="text-sm tracking-wider z-50 relative font-medium" onClick={() => setIsOpen(true)}>
        MENU
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-[#FFFFE6] z-40 flex flex-col p-6 md:p-12"
            initial="closed"
            animate="open"
            exit="closed"
            variants={containerVariants}
          >
            <div className="flex justify-end">
              <motion.button onClick={() => setIsOpen(false)} className="text-sm" variants={menuVariants}>
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            <nav className="flex flex-col justify-center items-center h-full">
              <motion.ul className="space-y-8 text-center" variants={containerVariants}>
                <motion.li variants={itemVariants}>
                  <Link
                      href="/"
                      className="font-serif text-4xl md:text-6xl hover:opacity-70 transition-opacity tracking-tight"
                      onClick={() => setIsOpen(false)}
                  >
                    Home
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                      href="#projects"
                      className="font-serif text-4xl md:text-6xl hover:opacity-70 transition-opacity tracking-tight"
                      onClick={() => setIsOpen(false)}
                  >
                    Projects
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <Link
                      href="#contact"
                      className="font-serif text-4xl md:text-6xl hover:opacity-70 transition-opacity tracking-tight"
                      onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                      href="https://github.com/egemenerin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-4xl md:text-6xl hover:opacity-70 transition-opacity tracking-tight"
                      onClick={() => setIsOpen(false)}
                  >
                    GitHub
                  </a>
                </motion.li>
                <motion.li variants={itemVariants}>
                  <a
                      href="https://docs.google.com/document/d/1aC0ja8BkbKvvs9I0FlO44pJrqHiaOVa-sf0fWkjdvCY/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-serif text-4xl md:text-6xl hover:opacity-70 transition-opacity tracking-tight"
                      onClick={() => setIsOpen(false)}
                  >
                    Resume
                  </a>
                </motion.li>
              </motion.ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

