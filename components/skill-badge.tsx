"use client"

import { motion } from "framer-motion"
import {
  Atom,
  Braces,
  Code2,
  FileCode2,
  Github,
  GitBranch,
  Globe2,
  Layout,
  Network,
  Triangle,
  Wind,
} from "lucide-react"

interface SkillBadgeProps {
  name: string
}

const skillIcons = {
  HTML: FileCode2,
  CSS: Code2,
  JavaScript: Braces,
  React: Atom,
  "Next.js": Triangle,
  TypeScript: Code2,
  "Tailwind CSS": Wind,
  Git: GitBranch,
  GitHub: Github,
  Python: Braces,
  "REST APIs": Network,
  "Responsive UI": Layout,
} as const

export function SkillBadge({ name }: SkillBadgeProps) {
  const SkillIcon = skillIcons[name as keyof typeof skillIcons] ?? Globe2

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-full transition-all duration-300 hover:border-phthalo-500/50">
        <div className="absolute -inset-1 bg-gradient-to-r from-phthalo-500/10 to-phthalo-700/10 rounded-xl blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>

        <div className="relative">
          <SkillIcon
            aria-hidden="true"
            className="mx-auto mb-4 h-10 w-10 text-phthalo-400"
            strokeWidth={1.5}
          />
          <div className="text-center font-medium text-lg">{name}</div>
        </div>
      </div>
    </motion.div>
  )
}
