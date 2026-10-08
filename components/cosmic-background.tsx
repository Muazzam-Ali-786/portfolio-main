"use client"

import { useEffect, useRef } from "react"

const GAP = 26
const RADIUS = 170

/**
 * Fixed full-screen dot matrix. Dots near the cursor light up (lime → ember),
 * and a slow diagonal wave keeps the field alive when the mouse is idle.
 */
export function CosmicBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext("2d")
    if (!canvas || !ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const mouse = { x: -9999, y: -9999, sx: -9999, sy: -9999 }
    let width = 0
    let height = 0
    let frame = 0

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height)

      // Ease the light toward the cursor for a soft trailing feel
      mouse.sx += (mouse.x - mouse.sx) * 0.12
      mouse.sy += (mouse.y - mouse.sy) * 0.12

      const time = t / 1000
      for (let x = GAP / 2; x < width; x += GAP) {
        for (let y = GAP / 2; y < height; y += GAP) {
          const wave = (Math.sin((x + y) * 0.008 - time * 0.9) + 1) / 2
          const d = Math.hypot(x - mouse.sx, y - mouse.sy)
          const glow = d < RADIUS ? 1 - d / RADIUS : 0

          if (glow > 0) {
            // lime at the center, warming to ember toward the edge
            const r = Math.round(200 + 55 * (1 - glow))
            const g = Math.round(245 - 139 * (1 - glow))
            const b = Math.round(38 + 23 * (1 - glow))
            ctx.fillStyle = `rgba(${r},${g},${b},${0.15 + glow * 0.75})`
            ctx.beginPath()
            ctx.arc(x, y, 1 + glow * 1.6, 0, Math.PI * 2)
            ctx.fill()
          } else {
            ctx.fillStyle = `rgba(242,239,232,${0.05 + wave * 0.07})`
            ctx.fillRect(x - 0.6, y - 0.6, 1.2, 1.2)
          }
        }
      }

      if (!reduceMotion) frame = requestAnimationFrame(draw)
    }

    const onMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const onMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }
    const onVisibility = () => {
      cancelAnimationFrame(frame)
      if (!document.hidden && !reduceMotion) frame = requestAnimationFrame(draw)
    }

    resize()
    frame = requestAnimationFrame(draw)
    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", onMouseMove)
    document.addEventListener("mouseleave", onMouseLeave)
    document.addEventListener("visibilitychange", onVisibility)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("visibilitychange", onVisibility)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-acid-400/[0.07] blur-[140px]" />
      <div className="absolute -right-32 top-[30%] h-[520px] w-[520px] rounded-full bg-ember-500/[0.09] blur-[140px]" />
      <canvas ref={canvasRef} className="absolute inset-0" />
      <div className="noise absolute inset-0" />
      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(11,10,9,0.85)_100%)]" />
    </div>
  )
}
