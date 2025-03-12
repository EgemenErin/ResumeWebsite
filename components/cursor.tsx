"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cursorRef = useRef<HTMLDivElement>(null)
  const trailsRef = useRef<HTMLDivElement[]>([])

  // Create an array of trail dots
  const trailCount = 5

  useEffect(() => {
    // Initialize trail elements
    trailsRef.current = Array(trailCount)
      .fill(0)
      .map(() => document.createElement("div"))
    trailsRef.current.forEach((trail, index) => {
      trail.className = "fixed pointer-events-none z-40 rounded-full bg-black opacity-0"
      trail.style.height = `${4 - index * 0.6}px`
      trail.style.width = `${4 - index * 0.6}px`
      document.body.appendChild(trail)
    })

    // Show cursor after a short delay to prevent initial jump
    setTimeout(() => setIsVisible(true), 100)

    const updateCursor = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      // Update main cursor position immediately
      setPosition({ x: mouseX, y: mouseY })

      // Update trail positions with delay
      trailsRef.current.forEach((trail, index) => {
        setTimeout(
          () => {
            trail.style.opacity = "0.2"
            trail.style.transform = `translate(-50%, -50%) scale(${isPointer ? 1.2 : 1})`
            trail.style.left = `${mouseX}px`
            trail.style.top = `${mouseY}px`

            // Fade out the trail dots
            setTimeout(() => {
              trail.style.opacity = "0"
            }, 50)
          },
          (index + 1) * 40,
        ) // Increasing delay for each trail dot
      })

      const target = e.target as HTMLElement
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" || target.tagName === "A" || target.tagName === "BUTTON",
      )
    }

    // Hide cursor when it leaves the window
    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    // Show cursor when it enters the window
    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    window.addEventListener("mousemove", updateCursor)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", updateCursor)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)

      // Clean up trail elements
      trailsRef.current.forEach((trail) => {
        if (trail.parentNode) {
          trail.parentNode.removeChild(trail)
        }
      })
    }
  }, [isPointer])

  return (
    <motion.div
      ref={cursorRef}
      className="fixed pointer-events-none z-50 rounded-full border border-black"
      initial={{ opacity: 0, width: 16, height: 16 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        width: isPointer ? 32 : 16,
        height: isPointer ? 32 : 16,
        x: position.x,
        y: position.y,
      }}
      style={{
        translateX: "-50%",
        translateY: "-50%",
      }}
      transition={{
        opacity: { duration: 0.2 },
        width: { type: "spring", stiffness: 300, damping: 20 },
        height: { type: "spring", stiffness: 300, damping: 20 },
        x: { type: "spring", stiffness: 200, damping: 25 },
        y: { type: "spring", stiffness: 200, damping: 25 },
      }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-black"
        initial={{ opacity: 0.08 }}
        animate={{ opacity: isPointer ? 0.15 : 0.08 }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="absolute rounded-full bg-black"
        initial={{ width: 4, height: 4, x: "-50%", y: "-50%", left: "50%", top: "50%" }}
        animate={{
          width: isPointer ? 6 : 4,
          height: isPointer ? 6 : 4,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}

