"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Play, ChevronLeft, ChevronRight, Trophy, Target, GripHorizontal } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { useMobile } from "@/hooks/use-mobile"

const csJourney = [
  {
    year: "2018",
    title: "First steps on the web",
    description: "Learned how pages are structured with HTML and styled with CSS — simple layouts, links, and the basics of how browsers render content.",
    achievement: "Semantic markup & layout fundamentals",
  },
  {
    year: "2019",
    title: "JavaScript & interactivity",
    description: "Moved from static pages to scripts: events, the DOM, and small exercises that made sites feel alive.",
    achievement: "DOM basics & problem solving",
  },
  {
    year: "2020",
    title: "Responsive & accessible habits",
    description: "Practiced mobile-first layouts, flexbox, and caring about readability and contrast — not only how a page looks on one screen.",
    achievement: "Responsive CSS & UX awareness",
  },
  {
    year: "2021",
    title: "Git & GitHub",
    description: "Adopted version control for every project: commits, branches, and publishing work so progress is visible and reversible.",
    achievement: "Git workflow & collaboration basics",
  },
  {
    year: "2022 - 2023",
    title: "Components & modern JS",
    description: "Deeper JavaScript patterns and an introduction to component-style thinking before frameworks — modules, tooling, and cleaner structure.",
    achievement: "ES6+ & project organization",
  },
  {
    year: "2024 - 2025",
    title: "React & Next.js",
    description: "Building with React and Next.js: routing, styling with Tailwind, and shipping a portfolio that reflects real skills.",
    achievement: "App structure, SSR concepts, deployment practice",
  },
  {
    year: "2026",
    title: "Current focus",
    description: "Sharpening full-stack basics, APIs, and performance — always one project away from the next leap.",
    achievement: "Continuous delivery & learning in public",
  },
]

const fitnessJourney = [
  {
    year: "2018",
    title: "Building the habit",
    description: "Started with consistency over intensity — showing up regularly and learning form before chasing numbers.",
    achievement: "Routine & discipline",
  },
  {
    year: "2020",
    title: "Stronger foundation",
    description: "Added structured training blocks and paid attention to recovery, sleep, and nutrition as part of progress.",
    achievement: "Balanced training weeks",
  },
  {
    year: "2022",
    title: "Mind–body balance",
    description: "Balanced gym time with study and screen breaks — treating fitness as support for focus, not a separate life.",
    achievement: "Sustainable schedule",
  },
  {
    year: "2024",
    title: "Functional & conditioning",
    description: "Mixed strength work with conditioning — mobility drills and lighter sessions when schedules get busy.",
    achievement: "Adaptable workouts",
  },
  {
    year: "2025 - 2026",
    title: "Today",
    description: "Training for longevity: steady effort, listening to the body, and keeping movement a non-negotiable part of the week.",
    achievement: "Health-first consistency",
  },
]

const mathImages = ["/project-portfolio.jpg", "/project-first-reppo.jpg", "/project-reppo-4.jpg"]

export function GrindSection() {
  const [mode, setMode] = useState<"physical" | "mental" | "quote">("quote")
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [sliderValue, setSliderValue] = useState(0) // -50 to 50, 0 is center
  const [isDragging, setIsDragging] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)
  const isMobile = useMobile()

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % mathImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + mathImages.length) % mathImages.length)
  }

  const handleSliderChange = (value: number) => {
    setSliderValue(value)
    if (value < -15) {
      setMode("physical")
    } else if (value > 15) {
      setMode("mental")
    } else {
      setMode("quote")
    }
  }

const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    const rect = sliderRef.current!.getBoundingClientRect()

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width - 0.5) * 100
      const clampedValue = Math.max(-50, Math.min(50, percentage))
      handleSliderChange(clampedValue)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    const rect = sliderRef.current!.getBoundingClientRect()

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault()
      const x = e.touches[0].clientX - rect.left
      const percentage = (x / rect.width - 0.5) * 100
      const clampedValue = Math.max(-50, Math.min(50, percentage))
      handleSliderChange(clampedValue)
    }

    const handleTouchEnd = () => {
      setIsDragging(false)
      document.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("touchend", handleTouchEnd)
    }

    document.addEventListener("touchmove", handleTouchMove, { passive: false })
    document.addEventListener("touchend", handleTouchEnd)
  }

  return (
    <div className="space-y-16">
      <SectionHeading title="The Grind" subtitle="Mind & Body Excellence" />

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar-red::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar-red::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar-red::-webkit-scrollbar-thumb {
          background: rgba(239, 68, 68, 0.6);
          border-radius: 2px;
        }
        .custom-scrollbar-red::-webkit-scrollbar-thumb:hover {
          background: rgba(239, 68, 68, 0.8);
        }

        .custom-scrollbar-blue::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar-blue::-webkit-scrollbar-track {
          background: rgba(39, 39, 42, 0.3);
          border-radius: 2px;
        }
        .custom-scrollbar-blue::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.6);
          border-radius: 2px;
        }
        .custom-scrollbar-blue::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.8);
        }
      `}</style>

      {/* Creative Slider Control */}
      <div className="flex justify-center mb-12">
        <div
          ref={sliderRef}
          className="relative w-96 h-20 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-full overflow-hidden cursor-pointer select-none"
        >
          {/* Animated background glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 via-phthalo-500/20 to-blue-500/20 rounded-full blur-lg opacity-50 animate-pulse"></div>

          {/* Track background with dynamic gradient */}
          <div
            className="absolute inset-0 rounded-full transition-all duration-300"
            style={{
              background: `linear-gradient(to right, 
                rgba(239, 68, 68, ${Math.max(0, -sliderValue / 50) * 0.4}) 0%, 
                rgba(38, 128, 74, ${Math.abs(sliderValue) < 15 ? 0.3 : 0.1}) 50%, 
                rgba(59, 130, 246, ${Math.max(0, sliderValue / 50) * 0.4}) 100%)`,
            }}
          />

          {/* Track rails */}
          <div className="absolute inset-2 border border-zinc-600/30 rounded-full"></div>

          {/* Labels with enhanced styling */}
          <div className="absolute left-6 top-1/2 -translate-y-1/2 flex items-center gap-2 text-red-400 font-bold">
            <span className="text-2xl">💪</span>
            <span className="text-sm tracking-wider">PHYSICAL</span>
          </div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex items-center gap-2 text-blue-400 font-bold">
            <span className="text-sm tracking-wider">MENTAL</span>
            <span className="text-2xl">🧠</span>
          </div>

          {/* Center zone indicator */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-16 h-12 rounded-lg flex items-center justify-center">
          </div>

          {/* Slider Handle with enhanced design */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-16 h-16 rounded-full shadow-2xl cursor-grab active:cursor-grabbing flex items-center justify-center"
            style={{
              left: `calc(50% + ${sliderValue}% - 32px)`,
              background:
                sliderValue < -15
                  ? "linear-gradient(135deg, #ef4444, #dc2626, #b91c1c)"
                  : sliderValue > 15
                    ? "linear-gradient(135deg, #3b82f6, #2563eb, #1d4ed8)"
                    : "linear-gradient(135deg, #26804a, #20653c, #16a34a)",
              boxShadow: `0 8px 32px ${
                sliderValue < -15
                  ? "rgba(239, 68, 68, 0.4)"
                  : sliderValue > 15
                    ? "rgba(59, 130, 246, 0.4)"
                    : "rgba(38, 128, 74, 0.4)"
              }`,
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: isDragging ? 1.15 : 1,
            }}
            transition={{ duration: 0.1 }}
          >
            {/* Handle inner design */}
            <div className="relative w-full h-full rounded-full border-2 border-white/20 flex items-center justify-center">
              <GripHorizontal className="h-6 w-6 text-white/80" />

              {/* Pulsing center dot */}
              <div className="absolute w-2 h-2 bg-white rounded-full animate-pulse"></div>

              {/* Handle glow effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse"></div>
            </div>
          </motion.div>

          {/* Progress indicators */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            <div
              className={`w-2 h-1 rounded-full transition-colors ${mode === "physical" ? "bg-red-400" : "bg-zinc-600"}`}
            ></div>
            <div
              className={`w-2 h-1 rounded-full transition-colors ${mode === "quote" ? "bg-phthalo-400" : "bg-zinc-600"}`}
            ></div>
            <div
              className={`w-2 h-1 rounded-full transition-colors ${mode === "mental" ? "bg-blue-400" : "bg-zinc-600"}`}
            ></div>
          </div>

          {/* Interaction hint */}
          {!isDragging && (
            <motion.div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-zinc-500 flex items-center gap-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <GripHorizontal className="h-3 w-3" />
              <span>Drag to explore</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {mode === "physical" && (
            <motion.div
              key="physical"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Video Section */}
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 h-[600px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-xl blur opacity-50"></div>

                <div className="relative p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-red-400">Moments in motion</h3>
                  <div className="relative flex-1 bg-zinc-900 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-red-700/20"></div>
                    <video 
                      controls
                      className="w-full h-full object-contain relative z-10"
                      poster="/profile-photo.jpg"
                    >
                      <source src="/grind-highlight.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Trophy className="h-5 w-5 text-red-400" />
                      <span className="text-sm font-medium">Training highlight</span>
                    </div>
                    <div className="text-sm text-zinc-400">2026</div>
                  </div>
                </div>
              </div>

              {/* Gym Journey Timeline */}
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-[600px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-xl blur opacity-50"></div>

                <div className="relative h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-red-400">Strength Journey</h3>

                  {/* Timeline with scrolling */}
                  <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar-red pr-3">
                    <div className={`space-y-10 relative ${!isMobile ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-red-700 before:h-full before:z-0" : ""}`}>
                      {fitnessJourney.map((experience, index) => (
                        <div
                          key={index}
                          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                        >
                          <motion.div
                            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} min-w-0`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-red-700/30 p-4 transition-all duration-300 hover:border-red-500/50">
                              <div className="absolute -inset-1 bg-gradient-to-r from-red-500/10 to-red-700/10 rounded-lg blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

                              <div className="relative">
                                <h4 className="text-lg font-bold text-red-400">{experience.title}</h4>
                                <div className="text-red-300 mb-3 text-sm">{experience.year}</div>
                                <p className="text-zinc-300 text-sm mb-3 leading-relaxed">{experience.description}</p>
                                <p className="text-xs text-red-200 font-medium">{experience.achievement}</p>
                              </div>
                            </div>
                          </motion.div>

                          {!isMobile && (
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                              <motion.div
                                className="w-5 h-5 rounded-full bg-gradient-to-r from-red-500 to-red-700 z-10 flex items-center justify-center"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                              >
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              </motion.div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {mode === "mental" && (
            <motion.div
              key="mental"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            >
              {/* Math Images Slider */}
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 h-[600px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-xl blur opacity-50"></div>

                <div className="relative p-6 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">Projects & snapshots</h3>
                  <div className="relative flex-1 bg-zinc-900 rounded-lg overflow-hidden">
                    <img
                      src={mathImages[currentImageIndex] || "/placeholder.svg"}
                      alt={`Math board ${currentImageIndex + 1}`}
                      className={`w-full h-full object-cover ${
                        mathImages[currentImageIndex] === "/m1.jpg" ? "sm:object-center object-left" : ""
                      }`}
                    />

                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4 text-white" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ChevronRight className="h-4 w-4 text-white" />
                    </button>

                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                      {mathImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                            index === currentImageIndex ? "bg-blue-400" : "bg-white/30"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Target className="h-5 w-5 text-blue-400" />
                      <span className="text-sm font-medium">
                        {currentImageIndex + 1} of {mathImages.length}
                      </span>
                    </div>
                    <div className="text-sm text-zinc-400">Portfolio & code</div>
                  </div>
                </div>
              </div>

              {/* Math Journey Timeline */}
              <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 h-[600px]">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-blue-700/20 rounded-xl blur opacity-50"></div>

                <div className="relative h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-6 text-blue-400">Learning journey</h3>

                  {/* Timeline with same style as work experience */}
                  <div className="flex-1 overflow-y-auto overflow-x-hidden custom-scrollbar-blue pr-3">
                    <div className={`space-y-10 relative ${!isMobile ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-blue-700 before:h-full before:z-0" : ""}`}>
                      {csJourney.map((experience, index) => (
                        <div
                          key={index}
                          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
                        >
                          <motion.div
                            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-8" : "md:pr-8"} min-w-0`}
                            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                          >
                            <div className="relative overflow-hidden rounded-lg bg-zinc-900/50 backdrop-blur-sm border border-blue-700/30 p-4 transition-all duration-300 hover:border-blue-500/50">
                              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-blue-700/10 rounded-lg blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

                              <div className="relative">
                                <h4 className="text-lg font-bold text-blue-400">{experience.title}</h4>
                                <div className="text-blue-300 mb-3 text-sm">{experience.year}</div>
                                <p className="text-zinc-300 text-sm mb-3 leading-relaxed">{experience.description}</p>
                                <p className="text-xs text-blue-200 font-medium">{experience.achievement}</p>
                              </div>
                            </div>
                          </motion.div>

                          {!isMobile && (
                            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                              <motion.div
                                className="w-5 h-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 z-10 flex items-center justify-center"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: 1 }}
                                transition={{ duration: 0.3 }}
                                viewport={{ once: true }}
                              >
                                <div className="w-2 h-2 rounded-full bg-white"></div>
                              </motion.div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {mode === "quote" && (
            <motion.div
              key="quote"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-[600px]"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 p-12 col-span-2 flex items-center justify-center">
                <div className="absolute -inset-1 bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 rounded-2xl blur opacity-50"></div>

                <div className="relative text-center">
                  <div className="text-6xl text-phthalo-400 mb-6">"</div>
                  <blockquote className="text-xl md:text-2xl font-light text-zinc-200 leading-relaxed mb-8">
                    The society that separates its scholars from its warriors will have its thinking done by cowards and
                    its fighting by fools.
                  </blockquote>
                  <cite className="text-lg text-phthalo-400 font-medium">— Thucydides</cite>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}