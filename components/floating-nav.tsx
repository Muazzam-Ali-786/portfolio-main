"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, Menu, X } from "lucide-react"

import { PulseDot } from "@/components/pulse-dot"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Experience", id: "experience" },
  { name: "Contact", id: "contact" },
]

// Only wait for the page loader on the very first mount, not on client navigations
let hasEnteredOnce = false

export function FloatingNav() {
  const [enterDelay] = useState(() => (hasEnteredOnce ? 0 : 1.6))
  const pathname = usePathname()
  const onHome = pathname === "/"
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    hasEnteredOnce = true
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Highlight the section currently in view
  useEffect(() => {
    if (!onHome) return
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    for (const id of ["home", ...navItems.map((item) => item.id)]) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [onHome])

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`)

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-4 z-50 flex justify-center px-4"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: enterDelay, ease: "easeOut" }}
      >
        <nav
          className={cn(
            "flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border px-3 py-2 backdrop-blur-xl transition-all duration-500",
            scrolled || isOpen
              ? "border-white/10 bg-void/70 shadow-[0_10px_40px_-10px_rgba(200,245,38,0.25)]"
              : "border-transparent bg-transparent",
          )}
        >
          <Link href="/" className="flex items-center gap-3 pl-3" aria-label="Muazam.dev, home">
            <PulseDot />
            <span className="text-lg font-bold tracking-tight text-white">
              Muazam<span className="text-acid-300">.</span>
              <span className="font-mono text-base font-medium text-stone-400">dev</span>
            </span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={hrefFor(item.id)}
                  className={cn(
                    "relative isolate block rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active === item.id ? "text-white" : "text-stone-400 hover:text-white",
                  )}
                >
                  {active === item.id && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full border border-acid-400/30 bg-acid-400/10 shadow-[0_0_20px_-4px_rgba(200,245,38,0.6)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <Link href="/resume" className="btn-holo !hidden !h-9 !px-4 !text-xs sm:!inline-flex">
              Resume <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-stone-200 md:hidden"
              onClick={() => setIsOpen((open) => !open)}
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-40 flex flex-col justify-center bg-void/95 px-8 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="bg-grid absolute inset-0" aria-hidden="true" />
            <ul className="relative space-y-2">
              {[...navItems, { name: "Resume", id: "resume" }].map((item, i) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <Link
                    href={item.id === "resume" ? "/resume" : hrefFor(item.id)}
                    onClick={() => setIsOpen(false)}
                    className="flex items-baseline gap-4 py-2 text-4xl font-bold tracking-tight text-white transition-colors hover:text-acid-300"
                  >
                    <span className="font-mono text-xs text-acid-400/70">0{i + 1}</span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
