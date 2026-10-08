"use client"

import Link from "next/link"
import { ArrowUpRight, Github } from "lucide-react"
import { motion } from "framer-motion"

import { SpotlightCard } from "@/components/spotlight-card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  imageFit?: "cover" | "contain"
  imagePadding?: string
  demoUrl?: string
  repoUrl?: string
  studioUrl?: string
  studioName?: string
  /** Position in the list, shown as a HUD index (e.g. PRJ_01) */
  index?: number
  /** Small highlight label, e.g. "Client work" */
  label?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  imageFit = "cover",
  imagePadding = "p-10",
  demoUrl,
  repoUrl,
  studioUrl,
  studioName,
  index,
  label,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: ((index ?? 0) % 3) * 0.08 }}
      viewport={{ once: true, margin: "-60px" }}
      className="group h-full"
    >
      <SpotlightCard tilt className="overflow-hidden">
        <div className="flex h-full flex-col">
          <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-t-2xl bg-black/60">
            {imageFit === "contain" && (
              <img
                src={image || "/placeholder.svg"}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full scale-125 object-cover opacity-40 blur-xl"
              />
            )}
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              loading="lazy"
              className={
                "relative h-full w-full transition-transform duration-700 group-hover:scale-105 " +
                (imageFit === "contain" ? "object-contain " + imagePadding : "object-cover")
              }
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-acid-300/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="absolute left-3 top-3 flex items-center gap-2">
              {index !== undefined && (
                <span className="rounded-md border border-white/15 bg-black/60 px-2 py-1 font-mono text-[10px] tracking-widest text-acid-200 backdrop-blur-md">
                  PRJ_{String(index + 1).padStart(2, "0")}
                </span>
              )}
              {label && (
                <span className="rounded-md border border-acid-400/30 bg-acid-400/10 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-acid-300 backdrop-blur-md">
                  {label}
                </span>
              )}
            </div>
            <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-stone-500 transition-all duration-300 group-hover:bg-acid-400 group-hover:shadow-[0_0_10px_#d9ff4d]" />
          </div>

          <div className="flex flex-grow flex-col p-6">
            <h3 className="text-xl font-bold tracking-tight text-white transition-colors group-hover:text-acid-100">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-stone-400">{description}</p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-0.5 font-mono text-[11px] text-stone-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            {(repoUrl || studioUrl || demoUrl) && (
              <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                {repoUrl ? (
                  <Link
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-stone-400 transition-colors hover:text-white"
                  >
                    <Github className="h-4 w-4" />
                    source
                  </Link>
                ) : studioUrl ? (
                  <Link
                    href={studioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-xs text-stone-400 transition-colors hover:text-white"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                    {studioName || "Studio"}
                  </Link>
                ) : (
                  <span />
                )}
                {demoUrl && (
                  <Link
                    href={demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-1.5 rounded-full border border-acid-400/30 bg-acid-400/10 px-4 py-2 text-xs font-semibold text-acid-200 transition-all hover:border-acid-300 hover:bg-acid-400/20 hover:text-white hover:shadow-[0_0_20px_-4px_#c8f526]"
                  >
                    Live Demo
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </SpotlightCard>
    </motion.div>
  )
}
