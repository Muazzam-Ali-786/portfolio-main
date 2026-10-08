import { cn } from "@/lib/utils"

interface PulseDotProps {
  className?: string
}

/** Brand mark: a gradient dot with a continuous lub-dub heartbeat and an expanding ring. */
export function PulseDot({ className }: PulseDotProps) {
  return (
    <span aria-hidden="true" className={cn("relative inline-grid h-3 w-3 place-items-center", className)}>
      <span className="absolute inset-0 animate-heartbeat-ring rounded-full bg-gradient-to-br from-acid-300 to-ember-400" />
      <span className="relative h-full w-full animate-heartbeat rounded-full bg-gradient-to-br from-acid-300 via-acid-400 to-ember-400 shadow-[0_0_12px_rgba(200,245,38,0.7)]" />
    </span>
  )
}
