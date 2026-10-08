"use client"

import { useEffect, useMemo, useState } from "react"
import { motion } from "framer-motion"
import { RotateCw } from "lucide-react"

const FILE_NAME = "muazam.ts"

const SOURCE = `export const developer: Developer = {
  name: "Malik Muazzam Ali",
  role: "Web Developer",
  location: "Faisalabad, Pakistan",
  stack: ["Next.js", "React", "TypeScript", "Tailwind"],
  shipped: ["ORYX VPN", "SecureTap VPN", "Cybervol"],
  status: "Open to opportunities",
};

const mission = "Build fast, clean & modern web apps";`

type Token = { text: string; cls: string }

const KEYWORDS = new Set(["export", "const", "let", "function", "return", "true", "false"])

const TOKEN_RE =
  /("(?:[^"\\]|\\.)*")|([A-Za-z_$][\w$]*)(?=\s*:)|([A-Za-z_$][\w$]*)|(\s+)|([^\sA-Za-z_$"]+)/g

/** Tiny highlighter, just enough for the snippet above. */
function tokenize(line: string): Token[] {
  const tokens: Token[] = []
  for (const m of line.matchAll(TOKEN_RE)) {
    const [text, str, prop, ident] = m
    let cls = "text-stone-500"
    if (str) cls = "text-acid-300"
    else if (prop) cls = KEYWORDS.has(prop) ? "text-ember-400" : "text-ember-200"
    else if (ident) {
      if (KEYWORDS.has(ident)) cls = "text-ember-400"
      else if (/^[A-Z]/.test(ident)) cls = "text-[#ffc977]"
      else cls = "text-[#f2efe8]"
    } else if (/^\s+$/.test(text)) cls = ""
    tokens.push({ text, cls })
  }
  return tokens
}

export function CodeWindow() {
  const lines = useMemo(() => SOURCE.split("\n").map(tokenize), [])
  const total = SOURCE.length
  const [typed, setTyped] = useState(0)
  const [run, setRun] = useState(0)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setTyped(total)
      return
    }
    setTyped(0)
    let raf = 0
    let start = 0
    // First run waits for the page loader; replays start right away
    const delay = setTimeout(
      () => {
        const step = (t: number) => {
          if (!start) start = t
          const n = Math.min(total, Math.floor(((t - start) / 1000) * 90))
          setTyped(n)
          if (n < total) raf = requestAnimationFrame(step)
        }
        raf = requestAnimationFrame(step)
      },
      run === 0 ? 1700 : 200,
    )
    return () => {
      clearTimeout(delay)
      cancelAnimationFrame(raf)
    }
  }, [total, run])

  // Spend the typed-character budget line by line (+1 per newline)
  let budget = typed
  let cursorLine = 0
  const rendered = lines.map((tokens, li) => {
    const out: Token[] = []
    for (const tok of tokens) {
      if (budget <= 0) break
      const part = tok.text.slice(0, budget)
      budget -= part.length
      out.push({ text: part, cls: tok.cls })
    }
    if (budget >= 0 && (budget > 0 || out.length > 0)) cursorLine = li
    budget -= 1
    return out
  })

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[580px]"
    >
      <div className="absolute -inset-6 -z-10 rounded-[28px] bg-gradient-to-br from-acid-400/15 via-transparent to-ember-500/20 blur-3xl" />

      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#100f0d]/90 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] backdrop-blur-xl">
        {/* Title bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
          <div className="flex gap-2" aria-hidden="true">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          </div>
          <span className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1 font-mono text-xs text-stone-300">
            <span className="h-1.5 w-1.5 rounded-full bg-acid-400" />
            {FILE_NAME}
          </span>
          <button
            type="button"
            onClick={() => setRun((r) => r + 1)}
            className="text-stone-500 transition-colors hover:text-acid-300"
            aria-label="Replay typing animation"
          >
            <RotateCw className="h-4 w-4" />
          </button>
        </div>

        {/* Code */}
        <pre
          className="min-h-[320px] overflow-x-auto px-2 py-5 font-mono text-[12px] leading-[1.9] sm:text-[13px]"
          aria-label={`Code snippet: ${FILE_NAME}`}
        >
          <code>
            {rendered.map((tokens, li) => (
              <div key={li} className="flex pr-6">
                <span className="w-10 shrink-0 select-none pr-4 text-right text-stone-700">
                  {String(li + 1).padStart(2, "0")}
                </span>
                <span className="whitespace-pre">
                  {tokens.map((t, ti) => (
                    <span key={ti} className={t.cls}>
                      {t.text}
                    </span>
                  ))}
                  {li === cursorLine && <span className="caret !w-[0.5ch]" />}
                </span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </motion.div>
  )
}
