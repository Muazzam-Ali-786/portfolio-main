"use client"

import { useRef, type ReactNode, type MouseEvent } from "react"

import { cn } from "@/lib/utils"

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  /** Slight 3D tilt toward the cursor */
  tilt?: boolean
  /** Show HUD-style corner brackets */
  corners?: boolean
}

export function SpotlightCard({ children, className, tilt = false, corners = false }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty("--mx", `${x}px`)
    el.style.setProperty("--my", `${y}px`)

    if (tilt) {
      const rotateX = (y / rect.height - 0.5) * -7
      const rotateY = (x / rect.width - 0.5) * 7
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
  }

  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.transform = ""
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "spotlight-card group/spot relative h-full rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md",
        "transition-[transform,border-color,box-shadow] duration-300 ease-out hover:border-white/20 hover:shadow-[0_20px_60px_-20px_rgba(200,245,38,0.35)]",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            "radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%), rgba(200,245,38,0.10), transparent 45%)",
        }}
      />
      <div aria-hidden="true" className="spotlight-border" />

      {corners && (
        <>
          <span aria-hidden="true" className="hud-corner -left-px -top-px rounded-tl-2xl border-l-2 border-t-2" />
          <span aria-hidden="true" className="hud-corner -right-px -top-px rounded-tr-2xl border-r-2 border-t-2" />
          <span aria-hidden="true" className="hud-corner -bottom-px -left-px rounded-bl-2xl border-b-2 border-l-2" />
          <span aria-hidden="true" className="hud-corner -bottom-px -right-px rounded-br-2xl border-b-2 border-r-2" />
        </>
      )}

      <div className="relative h-full">{children}</div>
    </div>
  )
}
