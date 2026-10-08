"use client"

import React, { useEffect, useState } from "react"

import { PulseDot } from "@/components/pulse-dot"

const BOOT_LINES = [
  "initializing portfolio.sys",
  "loading modules [react, next, tailwind]",
  "calibrating holo-display",
  "access granted",
]

export function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const hasRun = React.useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    const timers: ReturnType<typeof setTimeout>[] = []
    const steps = [
      { target: 18, delay: 100 },
      { target: 42, delay: 400 },
      { target: 71, delay: 750 },
      { target: 100, delay: 1100 },
    ]

    steps.forEach(({ target, delay }) => {
      timers.push(setTimeout(() => setProgress(target), delay))
    })

    timers.push(
      setTimeout(() => {
        setFadeOut(true)
        timers.push(setTimeout(() => setVisible(false), 700))
      }, 1500),
    )

    return () => {
      timers.forEach((t) => clearTimeout(t))
    }
  }, [])

  if (!visible) return null

  const linesShown = Math.ceil((progress / 100) * BOOT_LINES.length)

  return (
    <div
      role="status"
      aria-label="Loading"
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0b0a09] transition-all duration-700 ${
        fadeOut ? "pointer-events-none opacity-0 blur-sm" : "opacity-100"
      }`}
    >
      <div className="bg-grid absolute inset-0" aria-hidden="true" />

      <div className="relative w-[min(88vw,360px)]">
        <div className="mb-10 flex justify-center">
          <div className="flex items-center gap-4">
            <PulseDot className="h-5 w-5" />
            <span className="text-3xl font-bold tracking-tight text-white">
              Muazam<span className="text-acid-300">.</span>
              <span className="font-mono text-2xl font-medium text-stone-400">dev</span>
            </span>
          </div>
        </div>

        <div className="space-y-1.5 font-mono text-xs text-stone-400">
          {BOOT_LINES.slice(0, linesShown).map((line, i) => (
            <div key={line} className="flex gap-2">
              <span className="text-acid-400">&gt;</span>
              <span className={i === BOOT_LINES.length - 1 ? "text-acid-300" : undefined}>{line}</span>
              <span className="ml-auto text-acid-400/80">[ok]</span>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-gradient-to-r from-acid-400 via-acid-400 to-ember-500 shadow-[0_0_12px_#c8f526] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="w-10 text-right font-mono text-xs tabular-nums text-acid-300">{progress}%</span>
        </div>
      </div>
    </div>
  )
}
