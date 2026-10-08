"use client"

import { motion } from "framer-motion"
import { ComponentType } from "react"
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiRedux,
  SiPostman,
  SiStripe,
  SiSocketdotio,
  SiRedis,
} from "react-icons/si"
import { Layout } from "lucide-react"

interface SkillBadgeProps {
  name: string
}

interface SkillConfig {
  icon: ComponentType<{ className?: string; style?: React.CSSProperties }>
  color: string
}

const skillConfigs: Record<string, SkillConfig> = {
  HTML: { icon: SiHtml5, color: "#E34F26" },
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#1572B6" },
  CSS3: { icon: SiCss, color: "#1572B6" },
  JavaScript: { icon: SiJavascript, color: "#F7DF1E" },
  React: { icon: SiReact, color: "#61DAFB" },
  "Next.js": { icon: SiNextdotjs, color: "#FFFFFF" },
  TypeScript: { icon: SiTypescript, color: "#3178C6" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#06B6D4" },
  "Node.js": { icon: SiNodedotjs, color: "#5FA04E" },
  "Express.js": { icon: SiExpress, color: "#FFFFFF" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Redux: { icon: SiRedux, color: "#764ABC" },
  "Socket.io": { icon: SiSocketdotio, color: "#FFFFFF" },
  Redis: { icon: SiRedis, color: "#DC382D" },
  Stripe: { icon: SiStripe, color: "#635BFF" },
  Git: { icon: SiGit, color: "#F05032" },
  GitHub: { icon: SiGithub, color: "#FFFFFF" },
  "REST APIs": { icon: SiPostman, color: "#FF6C37" },
  "Responsive UI": { icon: Layout, color: "#10B981" },
}

export function SkillBadge({ name }: SkillBadgeProps) {
  const config = skillConfigs[name] || { icon: Layout, color: "#10B981" }
  const SkillIcon = config.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="w-[calc(50%-0.5rem)] sm:w-40"
      style={{ "--brand": config.color } as React.CSSProperties}
    >
      <div className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md transition-all duration-300 hover:border-[color:var(--brand)] hover:shadow-[0_0_40px_-12px_var(--brand)]">
        {/* Brand-colored glow that fades in on hover */}
        <div className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full bg-[color:var(--brand)] opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

        <div className="relative flex flex-col items-center justify-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110">
            <SkillIcon
              className="h-7 w-7 drop-shadow-[0_0_8px_var(--brand)]"
              style={{ color: config.color }}
            />
          </div>
          <div className="text-center font-mono text-xs tracking-wide text-stone-300 transition-colors group-hover:text-white">
            {name}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
