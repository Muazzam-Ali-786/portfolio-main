import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

import { CosmicBackground } from "@/components/cosmic-background"
import { PulseDot } from "@/components/pulse-dot"

export default function NotFound() {
  return (
    <div className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-void text-[#f2efe8]">
      <CosmicBackground />

      <header className="container flex items-center px-4 pt-8 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="Muazam.dev, home">
          <PulseDot />
          <span className="text-lg font-bold tracking-tight">
            Muazam<span className="text-acid-300">.</span>
            <span className="font-mono text-base font-medium text-stone-400">dev</span>
          </span>
        </Link>
      </header>

      <main className="container flex flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-acid-300">/ error 404</p>

        <h1 className="text-outline-acid mt-4 select-none font-mono text-[clamp(7rem,22vw,14rem)] font-semibold leading-none">
          404
        </h1>

        <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-5xl">
          Page not found<span className="text-ember-400">.</span>
        </h2>
        <p className="mt-4 max-w-md text-stone-400">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <div className="mt-8 w-full max-w-md rounded-xl border border-white/10 bg-black/40 px-5 py-4 text-left font-mono text-xs leading-relaxed sm:text-sm">
          <div>
            <span className="text-acid-400">$</span> <span className="text-stone-300">cd requested-page</span>
          </div>
          <div className="text-ember-300">error: no such file or directory</div>
          <div>
            <span className="text-acid-400">$</span> <span className="text-stone-300">cd ~</span>
            <span className="caret" />
          </div>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-holo group">
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to Home
          </Link>
          <Link href="/resume" className="btn-glass">
            <FileText className="h-4 w-4" />
            View Resume
          </Link>
        </div>
      </main>
    </div>
  )
}
