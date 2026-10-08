"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

const INTERACTIVE = "a, button, input, textarea, select, [role='button']"

export function MouseFollower() {
  const [visible, setVisible] = useState(false)
  const [hovering, setHovering] = useState(false)
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 })
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 })

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return

    const handleMouseMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setVisible(true)
      setHovering(!!(e.target as Element | null)?.closest?.(INTERACTIVE))
    }
    const handleMouseLeave = () => setVisible(false)

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [x, y])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] hidden lg:block">
      <motion.div
        className="absolute left-0 top-0 rounded-full border border-acid-300/70"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          boxShadow: "0 0 18px rgba(200,245,38,0.35), inset 0 0 12px rgba(200,245,38,0.15)",
        }}
        animate={{
          width: hovering ? 54 : 30,
          height: hovering ? 54 : 30,
          opacity: visible ? 1 : 0,
          backgroundColor: hovering ? "rgba(200,245,38,0.08)" : "rgba(200,245,38,0)",
        }}
        transition={{ duration: 0.25 }}
      />
      <motion.div
        className="absolute left-0 top-0 h-1.5 w-1.5 rounded-full bg-acid-300 shadow-[0_0_10px_#c8f526]"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
        animate={{ opacity: visible ? 1 : 0, scale: hovering ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      />
    </div>
  )
}
