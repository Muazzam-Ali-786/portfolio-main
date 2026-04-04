import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { CreativeHero } from "@/components/creative-hero"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Marquee } from "@/components/magicui/marquee"

const ABOUT_STOCK_IMG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop"
/** first-reppo — HTML / starter template (distinct image from other projects). */
const PROJECT_IMG_FIRST_REPO =
  "https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=1200&q=80&auto=format&fit=crop"
const PROJECT_IMG_WEB =
  "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=1200&q=80&auto=format&fit=crop"
const PROJECT_IMG_NEXT =
  "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&q=80&auto=format&fit=crop"
export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-24">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-phthalo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center text-center space-y-8">
            {/* 1. Name first */}
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
              <span className="block">Hello, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                Malik Muazzam Ali
              </span>
            </h1>
            
            {/* 2. Profile image */}
            <div className="flex justify-center">
              <CreativeHero />
            </div>
            
            {/* 3. Software engineer badge */}
            <div className="flex justify-center">
              <div className="relative px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="relative z-10">Software Developer | Web Technologies | Continuous Learner</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
              </div>
            </div>

            {/* 4. Description */}
            <p className="text-lg text-zinc-400 max-w-[600px]">
              I build responsive web experiences with modern tools, care about clean code and UI, and keep leveling up through projects and real-world practice.
            </p>
            
            {/* 5. Buttons */}
<div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Link href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="/resume">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                  <span className="relative z-10 flex items-center">
                    View Resume <Download className="ml-2 h-4 w-4" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
                >
                  Contact Me
                </Button>
              </Link>
            </div>
            
            {/* 6. Social icons */}
            <div className="flex gap-4 justify-center">
              <Link href="https://github.com/Muazzam-Ali-786" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/malik-muazzam-ali-30b44a318/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:malik86526.68@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <div className="inline-block">
                <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4">
                  <span className="relative z-10">Software Developer | Web Technologies | Continuous Learner</span>
                  <span className="absolute inset-0 rounded-full bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 animate-pulse"></span>
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                  Malik Muazzam Ali
                </span>
              </h1>
              <p className="text-xl text-zinc-400 max-w-[600px]">
                I build responsive web experiences with modern tools, care about clean code and UI, and keep leveling up through projects and real-world practice.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link href="#projects">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                    <span className="relative z-10 flex items-center">
                      View Projects <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </Link>
                <Link href="/resume">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-phthalo-600 to-phthalo-800 border-0">
                    <span className="relative z-10 flex items-center">
                      View Resume <Download className="ml-2 h-4 w-4" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-phthalo-700 to-phthalo-900 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent"
                  >
                    Contact Me
                  </Button>
                </Link>
              </div>
              <div className="flex gap-4 pt-4">
                <Link href="https://github.com/Muazzam-Ali-786" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
                <Link href="https://www.linkedin.com/in/malik-muazzam-ali-30b44a318/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:malik86526.68@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <CreativeHero />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="About Me" subtitle="Who I am and what I build" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-phthalo-500/20 to-phthalo-700/20 blur-xl opacity-70"></div>
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src={ABOUT_STOCK_IMG}
                  alt="Collaboration and workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">Available for work</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I'm Malik Muazzam Ali, a software developer focused on the modern web. I enjoy turning ideas into fast, responsive interfaces and learning something new with every project.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I work with HTML, CSS, JavaScript, and frameworks like React and Next.js, and I use Git/GitHub to ship and iterate. My aim is straightforward: write maintainable code, keep the UX polished, and grow through hands-on projects.
                </p>
<p className="text-lg text-zinc-300 mt-4">
                  I am open to internships, junior roles, and collaboration opportunities where I can contribute, learn from a team, and keep building real products.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Malik Muazzam Ali</div>
                  </div> 

                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium break-all">malik86526.68@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Faisalabad, Punjab, Pakistan</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">Open to opportunities</div>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/resume">
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md border-0">
                      View Resume
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="My Skills" subtitle="Technologies I work with" />

          {/* Desktop: Two horizontal rows */}
          <div className="hidden md:block mt-16">
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                <SkillBadge name="HTML" level={95} />
                <SkillBadge name="CSS" level={95} />
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="React" level={85} />
                <SkillBadge name="Next.js" level={85} />
                <SkillBadge name="TypeScript" level={80} />
              </Marquee>
              <Marquee reverse pauseOnHover className="[--duration:20s]">
                <SkillBadge name="Tailwind CSS" level={90} />
                <SkillBadge name="Git" level={90} />
                <SkillBadge name="GitHub" level={90} />
                <SkillBadge name="Python" level={75} />
                <SkillBadge name="REST APIs" level={75} />
                <SkillBadge name="Responsive UI" level={90} />
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-900"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-900"></div>
            </div>
          </div>

          {/* Mobile: Two vertical columns */}
          <div className="md:hidden mt-16">
            <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden">
              <Marquee pauseOnHover vertical className="[--duration:20s]">
                <SkillBadge name="HTML" level={95} />
                <SkillBadge name="CSS" level={95} />
                <SkillBadge name="JavaScript" level={90} />
                <SkillBadge name="React" level={85} />
                <SkillBadge name="Next.js" level={85} />
                <SkillBadge name="TypeScript" level={80} />
              </Marquee>
              <Marquee reverse pauseOnHover vertical className="[--duration:20s]">
                <SkillBadge name="Tailwind CSS" level={90} />
                <SkillBadge name="Git" level={90} />
                <SkillBadge name="GitHub" level={90} />
                <SkillBadge name="Python" level={75} />
                <SkillBadge name="REST APIs" level={75} />
                <SkillBadge name="Responsive UI" level={90} />
              </Marquee>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-zinc-900"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-zinc-900"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Featured Projects" subtitle="Some of my recent work" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="first-reppo"
              description="An introductory HTML template project on GitHub — a practical starting point for learning page structure, styling basics, and how to publish code with version control."
              tags={["HTML", "GitHub", "Git", "Learning"]}
              image={PROJECT_IMG_FIRST_REPO}
              repoUrl="https://github.com/Muazzam-Ali-786/first-reppo"
            />
            <ProjectCard
              title="reppo-4"
              description="A small HTML practice repository focused on layout, components, and iterating on front-end fundamentals. Useful for experimenting with markup and deployment basics."
              tags={["HTML", "GitHub Pages", "Web"]}
              image={PROJECT_IMG_WEB}
              repoUrl="https://github.com/Muazzam-Ali-786/reppo-4"
            />
            <ProjectCard
              title="Personal portfolio (this site)"
              description="This Next.js portfolio site — sections for about, skills, projects, experience, and contact, with a polished dark UI. You can fork or extend it as your own landing page."
              tags={["Next.js", "React", "TypeScript", "Tailwind CSS"]}
              image={PROJECT_IMG_NEXT}
              repoUrl="https://github.com/Muazzam-Ali-786"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-phthalo-700 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Reach me here" />

          <div className="max-w-xl mx-auto mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">Email</div>
                    <a
                      href="mailto:malik86526.68@gmail.com"
                      className="font-medium text-phthalo-400 hover:underline break-all"
                    >
                      malik86526.68@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Linkedin className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <a
                      href="https://www.linkedin.com/in/malik-muazzam-ali-30b44a318/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-phthalo-400 hover:underline break-all"
                    >
                      linkedin.com/in/malik-muazzam-ali-30b44a318
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center shrink-0">
                    <Github className="h-5 w-5 text-phthalo-400" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <a
                      href="https://github.com/Muazzam-Ali-786"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-phthalo-400 hover:underline break-all"
                    >
                      github.com/Muazzam-Ali-786
                    </a>
                  </div>
                </div>
              </div>
            </GlassmorphicCard>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-phthalo-400 to-phthalo-600">
                Malik
              </span>
              <span className="text-white"> Muazzam Ali</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Malik Muazzam Ali. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="https://github.com/Muazzam-Ali-786" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/malik-muazzam-ali-30b44a318/" target="_blank" rel="noopener noreferrer">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:malik86526.68@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}