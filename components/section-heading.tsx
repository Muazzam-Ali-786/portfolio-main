"use client"

import { motion } from "framer-motion"

interface SectionHeadingProps {
  title: string
  subtitle: string
  /** Optional index shown as a large outlined number, e.g. "01" */
  index?: string
}

/** Editorial, left-aligned heading: big outlined index, title, and a ruled meta line. */
export function SectionHeading({ title, subtitle, index }: SectionHeadingProps) {
  return (
    <div>
      <div className="flex items-end gap-5 md:gap-8">
        {index && (
          <motion.span
            aria-hidden="true"
            className="text-outline-acid select-none font-mono text-6xl font-semibold leading-[0.8] md:text-8xl"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {index}
          </motion.span>
        )}
        <div className="min-w-0">
          <motion.p
            className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid-300 sm:text-xs"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            / {subtitle}
          </motion.p>
          <motion.h2
            className="mt-2 text-4xl font-bold tracking-tight text-[#f2efe8] md:text-6xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            {title}
            <span className="text-ember-400">.</span>
          </motion.h2>
        </div>
      </div>

      <motion.div
        aria-hidden="true"
        className="mt-8 flex origin-left items-center gap-3"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true }}
      >
        <span className="h-2 w-2 rotate-45 border border-acid-400" />
        <span className="h-px flex-1 bg-gradient-to-r from-acid-400/60 via-white/10 to-transparent" />
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-stone-600">
          {index ? `sec.${index}` : "sec"}
        </span>
      </motion.div>
    </div>
  )
}
