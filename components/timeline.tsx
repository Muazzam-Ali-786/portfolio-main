"use client"

import { useRef } from "react"
import { motion, useScroll, useSpring } from "framer-motion"

import { SpotlightCard } from "@/components/spotlight-card"

const experiences = [
  {
    title: "Projects & self-paced learning",
    company: "Independent",
    period: "2024 - Present",
    description:
      "Building portfolio sites and small web projects with HTML, CSS, JavaScript, and Next.js. Using GitHub for version control, iterating on UI, and practicing deployment workflows.",
  },
  {
    title: "Web foundations",
    company: "Learning & practice",
    period: "2022 - 2024",
    description:
      "Strengthened fundamentals in semantic HTML, responsive CSS, and JavaScript. Completed exercises and templates to understand layout, accessibility basics, and browser behavior.",
  },
]

export function Timeline() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] })
  const beam = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  return (
    <div ref={ref} className="relative">
      {/* Rail + scroll-driven beam */}
      <div className="absolute left-[7px] top-0 h-full w-px bg-white/10 md:left-[219px]" />
      <motion.div
        style={{ scaleY: beam }}
        className="absolute left-[6px] top-0 h-full w-[3px] origin-top bg-gradient-to-b from-acid-400 to-ember-500 md:left-[218px]"
      />

      <div className="space-y-14">
        {experiences.map((experience) => (
          <motion.div
            key={experience.title}
            className="relative grid gap-4 pl-10 md:grid-cols-[220px_1fr] md:gap-12 md:pl-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-80px" }}
          >
            {/* Node */}
            <span className="absolute left-[7px] top-2 h-4 w-4 -translate-x-1/2 rotate-45 border-2 border-acid-400 bg-void md:left-[219px]" />

            <div className="md:pr-8 md:text-right">
              <div className="whitespace-nowrap font-mono text-xl font-semibold text-[#f2efe8]">{experience.period}</div>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-ember-300">
                {experience.company}
              </div>
            </div>

            <SpotlightCard className="p-6 md:ml-2">
              <h3 className="text-xl font-bold tracking-tight text-[#f2efe8]">{experience.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-400">{experience.description}</p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
