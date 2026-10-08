"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

import { SpotlightCard } from "@/components/spotlight-card"
import { cn } from "@/lib/utils"

interface GlassmorphicCardProps {
  children: ReactNode
  className?: string
}

export function GlassmorphicCard({ children, className }: GlassmorphicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="h-full"
    >
      <SpotlightCard className={cn("p-6 md:p-8", className)}>{children}</SpotlightCard>
    </motion.div>
  )
}
