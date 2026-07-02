"use client"

import React, { useEffect, useState } from "react"

export function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  const hasRun = React.useRef(false)

  useEffect(() => {
    if (hasRun.current) return
    hasRun.current = true

    // Simulate loading progress
    const intervals = [
      { target: 15, delay: 100 },
      { target: 45, delay: 300 },
      { target: 70, delay: 600 },
      { target: 90, delay: 900 },
      { target: 100, delay: 1200 },
    ]

    const timers: ReturnType<typeof setTimeout>[] = []

    intervals.forEach(({ target, delay }) => {
      const t = setTimeout(() => {
        setProgress(target)
      }, delay)
      timers.push(t)
    })

    // Complete after page is ready
    const complete = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => setVisible(false), 800)
    }, 1500)

    timers.push(complete)

    return () => {
      timers.forEach((t) => clearTimeout(t))
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070709] transition-opacity duration-700 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center justify-center">
        
        {/* Animated Rings & Logo */}
        <div className="relative flex items-center justify-center w-24 h-24 mb-12">
          {/* Outer Dark Green Arc */}
          <div className="absolute inset-[-10px] rounded-full border-[3px] border-transparent border-t-[#26804a] border-r-[#26804a] animate-[spin_2s_linear_infinite]" style={{ boxShadow: '0 0 15px rgba(38, 128, 74, 0.2)' }}></div>
          
          {/* Inner Light Green Arc */}
          <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-b-[#56b67d] border-l-[#56b67d] animate-[spin_1.5s_linear_infinite_reverse]" style={{ boxShadow: '0 0 15px rgba(86, 182, 125, 0.2)' }}></div>
          
          {/* Center Logo */}
          <span 
            className="text-4xl font-black tracking-widest select-none z-10"
            style={{
              background: "linear-gradient(135deg, #56b67d, #1e5132)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 0 8px rgba(86,182,125,0.5))"
            }}
          >
            M
          </span>
        </div>

        {/* Progress Bar Container */}
        <div className="w-56 h-1 bg-[#1a1a24] rounded-full overflow-hidden mb-6">
          <div 
            className="h-full rounded-full transition-all duration-300 ease-out"
            style={{ 
              width: `${progress}%`,
              background: 'linear-gradient(90deg, #1e5132, #56b67d)',
              boxShadow: '0 0 10px rgba(86, 182, 125, 0.8)'
            }}
          ></div>
        </div>

        {/* Loading Text */}
        <p className="text-zinc-500 text-sm font-mono tracking-widest mb-10">
          Loading portfolio...
        </p>

        {/* Bouncing Dots */}
        <div className="flex gap-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#56b67d] animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#56b67d] animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-1.5 h-1.5 rounded-full bg-[#56b67d] animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>

      </div>
    </div>
  )
}
