import Link from "next/link"
import type { ReactNode } from "react"
import { ArrowLeft, Mail, MapPin, Download, Globe, Linkedin, Briefcase, GraduationCap, Code, ExternalLink, User, Layers } from "lucide-react"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"
import { CosmicBackground } from "@/components/cosmic-background"

const CV_URL = "/Muazam-CV.pdf"
const gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=malik786526.68@gmail.com"

const experience = [
  {
    title: "Intern MERN Stack Development",
    company: "TecClubX (Faisalabad)",
    period: "August 2026 - Present",
    description:
      "MERN Stack Development Intern at TecClubX, building full-stack web applications with MongoDB, Express.js, React.js, and Node.js. Working on responsive frontend interfaces, REST API development, and database integration while collaborating with the development team on real-world projects. Focused on writing clean, maintainable code and learning modern development workflows.",
  },
  {
    title: "Intern MERN Stack Development",
    company: "Gamica Cloud",
    period: "October 2026 - Present",
    description:
      "Developed full-stack applications using the MERN Stack (MongoDB, Express.js, React.js, Node.js). Created authentication systems using JWT and protected API routes. Built CRUD-based dashboards and dynamic frontend interfaces.",
  },
]

const featuredProjects = [
  {
    title: "ORYX VPN Website",
    url: "https://oryxvpn.com",
    urlLabel: "oryxvpn.com",
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS, NextAuth.js v5, Stripe & OxaPay, next-intl",
    description:
      "Implemented the frontend and backend API integration for ORYX VPN's multilingual marketing site and user dashboard, built to the company designer's Figma specs. Developed the landing page, pricing with monthly/yearly toggles, download center, and full auth flows (signup/login, email verification, password reset) with NextAuth.js v5. Integrated modern payment gateways: Stripe billing and OxaPay crypto invoicing. Built the dashboard with subscription status, connected-device management and remote revoke, English/Persian/Turkish localization (next-intl), and dark/light mode. Handled advanced state and forms with React Hook Form, Zod schema validation, SWR, and Axios. Deployed October 2026.",
  },
  {
    title: "SecureTap VPN Website",
    url: "https://securetapvpn.com",
    urlLabel: "securetapvpn.com",
    stack: "Next.js 16, React 19, TypeScript, Tailwind CSS v4, HeroUI, OxaPay Crypto, i18n",
    description:
      'Built the complete SecureTap VPN web platform. Integrated Webhook-based AI Chatbot widget supporting automated user query resolution and live human agent handoff. Integrated OxaPay crypto invoicing (BTC, USDT, ETH) for payments. Built interactive tools including a live "What Is My IP" checker and VPN protocol guides, a Markdown blog/SEO engine, cross-platform download center, and complete auth flows. Implemented multi-language support with a dynamic language switcher (next-intl) and translation API endpoint. Handled advanced state and forms with React Hook Form, Zod schema validation, SWR, and Axios.',
  },
  {
    title: "Cybervol - Cybersecurity Platform",
    url: "https://www.cybervol.com",
    urlLabel: "cybervol.com",
    stack: "Next.js 16, React 19, Tailwind CSS v4, Custom Modular Architecture",
    description:
      "Developed a premium B2B enterprise cybersecurity and consulting platform. Built a services hub with dedicated pages for 6 core offerings (penetration testing, vulnerability assessment, threat detection, compliance, incident response) and industry solutions for FinTech, Healthcare, E-Commerce and corporate sectors. Created a resources hub with e-books, blogs, datasheets and webinars, plus an Elite VIP portal, company credentials page with ISO/SOC badges, and lead-generation consultation forms. Used modular component architecture with custom typography (Manrope, Sora) and dark-theme styling.",
  },
  {
    title: "Vexo - Real-Time Chat & Media Platform",
    url: "https://vexo-private-chat-app.vercel.app",
    urlLabel: "vexo-chat.vercel.app",
    stack: "Next.js 16, React 19, Node.js, Socket.io, Redis, MongoDB, Tailwind CSS v4, ZegoCloud WebRTC",
    description:
      "Built a complete full-stack WhatsApp/Telegram-style chat platform, backend and frontend. Engineered a real-time messaging engine with Socket.io and Redis (online presence, typing indicators, read receipts) on a MongoDB/Mongoose backend. Integrated ZegoCloud WebRTC for HD voice/video calls, Hugging Face API for an in-chat AI assistant, and a Cheerio-based link preview scraper. Implemented OTP email verification (Nodemailer), Google OAuth, and PIN-protected chat lock. Rich client UX with Redux Toolkit, voice messages, live location sharing (React-Leaflet), status stories, group polls, and dark/light themes.",
  },
]

const otherProjects = [
  {
    title: "Headless E-Commerce Site",
    stack: "Next.js",
    description: "Modern storefront concept built around flexible product data with a fast, minimal shopping experience.",
  },
  {
    title: "Quiz Master",
    stack: "React",
    description: "Interactive quiz application with varied categories, real-time scoring, and an engaging modern interface.",
  },
  {
    title: "Medium Clone Blog",
    stack: "Next.js, Tailwind CSS",
    description: "Polished blog experience with a modern reading layout, hybrid content flow, and smooth UI interactions.",
  },
  {
    title: "Expense Tracker",
    stack: "JavaScript",
    description: "Personal finance app to monitor daily spending with clean charts and simple data entry.",
  },
]

const skills = [
  { label: "Languages", value: "TypeScript, JavaScript (ES6+), HTML5, CSS3" },
  {
    label: "Frontend",
    value: "Next.js 16 (App Router), React 19, Redux Toolkit, Tailwind CSS v4, HeroUI, Shadcn UI, Framer Motion, React Hook Form, Zod",
  },
  {
    label: "Backend & Database",
    value: "Node.js, Express.js, REST APIs, Socket.io (WebSockets), MongoDB & Mongoose, Redis (ioredis)",
  },
  {
    label: "Auth & Payments",
    value: "NextAuth.js v5, JWT, Stripe Payments, OxaPay Crypto Invoicing, WebRTC (ZegoCloud), next-intl",
  },
  { label: "Tools", value: "Git & GitHub, Vercel, Postman, Figma to Code, MERN Stack" },
]

function CardTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <h3 className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4 text-xl font-bold tracking-tight text-[#f2efe8]">
      <span className="grid h-8 w-8 place-items-center rounded-lg border border-acid-400/30 bg-acid-400/10 text-acid-300">
        {icon}
      </span>
      <span>
        {children}
        <span className="text-ember-400">.</span>
      </span>
    </h3>
  )
}

export default function ResumePage() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-void text-[#f2efe8]">
      <CosmicBackground />
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      <section className="relative px-4 pb-20 pt-32">
        <div className="container relative z-10 mx-auto max-w-4xl">
          {/* Top Actions Bar */}
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <Link href="/" className="btn-glass group">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <a href={CV_URL} download="Muazam-CV.pdf" className="btn-holo">
              <Download className="h-4 w-4" />
              Download CV
            </a>
          </div>

          {/* Profile Header */}
          <GlassmorphicCard className="mb-8">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="holo-ring h-32 w-32 shrink-0 rounded-full p-[3px]">
                <img
                  src="/profile-photo.jpg"
                  alt="Malik Muazzam Ali"
                  className="h-full w-full rounded-full border-4 border-void object-cover"
                />
              </div>
              <div className="flex-grow space-y-3 text-center md:text-left">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-acid-300">/ resume</p>
                <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                  Malik <span className="text-holo">Muazzam Ali</span>
                </h1>
                <h2 className="font-mono text-sm text-ember-300 md:text-base">Intern MERN Stack Development at TecClubX</h2>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 pt-2 text-sm text-stone-300 md:justify-start">
                  <a href={gmailUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-acid-300">
                    <Mail className="h-4 w-4 text-acid-400" />
                    malik786526.68@gmail.com
                  </a>
                  <a href="https://linkedin.com/in/m-muazzam-ali" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-acid-300">
                    <Linkedin className="h-4 w-4 text-acid-400" />
                    linkedin.com/in/m-muazzam-ali
                  </a>
                  <a href="https://muazzam-ali-portfolio.vercel.app" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-acid-300">
                    <Globe className="h-4 w-4 text-acid-400" />
                    muazzam-ali-portfolio.vercel.app
                  </a>
                  <span className="flex items-center gap-2 text-stone-400">
                    <MapPin className="h-4 w-4 text-acid-400" />
                    Faisalabad, Punjab, Pakistan
                  </span>
                </div>
              </div>
            </div>
          </GlassmorphicCard>

          {/* About */}
          <GlassmorphicCard className="mb-8">
            <CardTitle icon={<User className="h-4 w-4" />}>About</CardTitle>
            <p className="text-sm leading-relaxed text-stone-300 md:text-base">
              Hi, I'm Muazam Ali, a Full-Stack Developer who enjoys building responsive, user-friendly web applications that combine clean UI with scalable backend architecture. From developing modern frontend interfaces to creating secure REST APIs and authentication systems, I focus on delivering fast, reliable, and maintainable solutions. I'm passionate about writing clean code, optimizing performance, and continuously learning new technologies. Currently, I'm expanding my knowledge of cloud technologies and modern automated deployment workflows. I'm always open to connecting with developers, recruiters, and teams working on exciting web projects.
            </p>
          </GlassmorphicCard>

          {/* Work Experience */}
          <GlassmorphicCard className="mb-8">
            <CardTitle icon={<Briefcase className="h-4 w-4" />}>Work Experience</CardTitle>
            <div className="space-y-6">
              {experience.map((job) => (
                <div key={job.company} className="relative space-y-2 border-l-2 border-acid-400/40 pl-5">
                  <span className="absolute -left-[7px] top-2 h-3 w-3 rotate-45 border-2 border-acid-400 bg-void" />
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <h4 className="text-lg font-bold">{job.title}</h4>
                    <span className="rounded-md border border-acid-400/30 bg-acid-400/10 px-2.5 py-1 font-mono text-[11px] text-acid-200">
                      {job.period}
                    </span>
                  </div>
                  <div className="font-mono text-xs uppercase tracking-widest text-ember-300">{job.company}</div>
                  <p className="text-sm leading-relaxed text-stone-300">{job.description}</p>
                </div>
              ))}
            </div>
          </GlassmorphicCard>

          {/* Featured Projects */}
          <GlassmorphicCard className="mb-8">
            <CardTitle icon={<Code className="h-4 w-4" />}>Featured Projects</CardTitle>
            <div className="space-y-5">
              {featuredProjects.map((project) => (
                <div key={project.title} className="space-y-2 rounded-xl border border-white/10 bg-black/30 p-5">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h4 className="text-lg font-bold">{project.title}</h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 font-mono text-xs text-acid-300 hover:underline"
                    >
                      {project.urlLabel} <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                  <div className="font-mono text-[11px] text-ember-300">{project.stack}</div>
                  <p className="text-sm leading-relaxed text-stone-300">{project.description}</p>
                </div>
              ))}

              <div className="grid grid-cols-1 gap-3 pt-2 sm:grid-cols-2">
                {otherProjects.map((project) => (
                  <div key={project.title} className="rounded-lg border border-white/5 bg-black/20 p-4">
                    <div className="text-sm font-semibold">{project.title}</div>
                    <div className="font-mono text-[11px] text-acid-300">{project.stack}</div>
                    <p className="mt-1 text-xs text-stone-400">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </GlassmorphicCard>

          {/* Education & Skills */}
          <div className="mb-10 grid gap-8 md:grid-cols-2">
            <GlassmorphicCard>
              <CardTitle icon={<GraduationCap className="h-4 w-4" />}>Education</CardTitle>
              <h4 className="text-base font-bold">Matric, Computer Science</h4>
              <p className="mt-1 text-xs text-stone-400">Board of Intermediate and Secondary Education (BISE), Faisalabad</p>
              <span className="mt-3 inline-block rounded-md border border-acid-400/30 bg-acid-400/10 px-2 py-0.5 font-mono text-[11px] text-acid-200">
                August 2023 - September 2025
              </span>
            </GlassmorphicCard>

            <GlassmorphicCard>
              <CardTitle icon={<Layers className="h-4 w-4" />}>Skills Overview</CardTitle>
              <dl className="space-y-3 text-xs">
                {skills.map((skill) => (
                  <div key={skill.label}>
                    <dt className="font-mono uppercase tracking-widest text-acid-300">{skill.label}</dt>
                    <dd className="mt-0.5 text-stone-300">{skill.value}</dd>
                  </div>
                ))}
              </dl>
            </GlassmorphicCard>
          </div>

          {/* Bottom Download */}
          <div className="text-center">
            <a href={CV_URL} download="Muazam-CV.pdf" className="btn-holo !h-12 !px-8 !text-base">
              <Download className="h-5 w-5" />
              Download Complete Resume (PDF)
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
