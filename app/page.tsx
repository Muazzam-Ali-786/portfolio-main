import Link from "next/link";
import { ArrowRight, ArrowUp, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { CodeWindow } from "@/components/code-window";
import { PulseDot } from "@/components/pulse-dot";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { SpotlightCard } from "@/components/spotlight-card";
import { ContactForm } from "@/components/contact-form";
import { CosmicBackground } from "@/components/cosmic-background";
import { Typewriter } from "@/components/typewriter";
import { Marquee } from "@/components/magicui/marquee";

const ABOUT_IMG =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=80&auto=format&fit=crop";

const EMAIL = "malik786526.68@gmail.com";
const EMAIL_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${EMAIL}`;
const GITHUB_URL = "https://github.com/Muazzam-Ali-786";
const LINKEDIN_URL = "https://www.linkedin.com/in/malik-muazzam-ali-30b44a318/";

const socials = [
  { name: "GitHub", href: GITHUB_URL, icon: Github, display: "github.com/Muazzam-Ali-786" },
  { name: "LinkedIn", href: LINKEDIN_URL, icon: Linkedin, display: "linkedin.com/in/malik-muazzam-ali-30b44a318" },
  { name: "Email", href: EMAIL_URL, icon: Mail, display: EMAIL },
];

const roles = ["Web Developer", "Frontend Engineer", "Next.js & React Builder", "UI Craftsman"];

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive UI",
];

const projects = [
  {
    title: "ORYX VPN - Next-Gen VPN Platform",
    description:
      "Implemented frontend and backend API integration for ORYX VPN's multilingual marketing site and user dashboard. Features monthly/yearly pricing toggles, Stripe checkout, download center, device management & remote revoke, and next-intl multi-language support.",
    tags: ["Next.js 16", "React 19", "TypeScript", "NextAuth.js", "Stripe", "i18n"],
    image: "/img/oryx-logo.png",
    imageFit: "contain" as const,
    demoUrl: "https://oryxvpn.com/en",
    label: "Client work",
  },
  {
    title: "SecureTap VPN - Cybersecurity Platform",
    description:
      "Full-stack SecureTap VPN web platform featuring an AI support chatbot widget with live human handoff, OxaPay crypto invoicing (BTC, USDT, ETH), live 'What Is My IP' checker, VPN protocol guides, Markdown blog/SEO engine, and dynamic multi-language switcher.",
    tags: ["Next.js 16", "React 19", "TypeScript", "HeroUI", "Crypto Payments", "i18n"],
    image: "/img/securetap-logo.png",
    imageFit: "contain" as const,
    demoUrl: "https://securetapvpn.com/en",
    label: "Client work",
  },
  {
    title: "Cybervol - Cybersecurity Platform",
    description:
      "Designed and developed the entire frontend and custom administrative dashboard for a dynamic B2B cybersecurity consulting website. Engineered a secure CMS on a dedicated subdomain to manage dynamic eBooks and blogs.",
    tags: ["Frontend", "CMS", "Admin Panel", "React", "Tailwind CSS"],
    image: "/img/cybervol.png",
    demoUrl: "https://www.cybervol.com",
    label: "Client work",
  },
  {
    title: "Medium Clone Blog",
    description:
      "A polished blog experience with a modern reading layout, hybrid content flow, and smooth UI interactions.",
    tags: ["Next.js", "Tailwind CSS", "Responsive UI"],
    image: "/img/medium-clone.png",
    demoUrl: "https://medium-clone-blog-ivory.vercel.app",
    repoUrl: "https://github.com/Muazzam-Ali-786/medium-clone-blog",
  },
  {
    title: "Multi-Step Signup Form",
    description: "A dynamic signup experience with multi-step validation and a clean, user-friendly flow.",
    tags: ["React", "Form UX", "Frontend"],
    image: "/img/multi-signup.png",
    demoUrl: "https://multi-signup-form.vercel.app",
    repoUrl: "https://github.com/Muazzam-Ali-786/multi-signup-form",
  },
  {
    title: "Headless E-Commerce Site",
    description:
      "A modern storefront concept built around flexible product data and a fast, minimal shopping experience.",
    tags: ["Next.js", "E-commerce", "UI Design"],
    image: "/img/ecommerce.png",
    demoUrl: "https://handless-e-comerce-site.vercel.app",
    repoUrl: "https://github.com/Muazzam-Ali-786/handless-e-comerce-site",
  },
  {
    title: "Time App",
    description: "A focused productivity app that helps users track time with a simple and engaging interface.",
    tags: ["JavaScript", "Productivity", "Frontend"],
    image: "/img/time-app.png",
    demoUrl: "https://time-app-chi.vercel.app",
    repoUrl: "https://github.com/Muazzam-Ali-786/time-app",
  },
  {
    title: "Diary App",
    description: "A personal journaling app with a calm interface for writing entries and organizing daily thoughts.",
    tags: ["Next.js", "UX", "Personal App"],
    image: "/img/diary-app.png",
    demoUrl: "https://diary-app-zeta-teal.vercel.app",
    repoUrl: "https://github.com/Muazzam-Ali-786/diary-app",
  },
  {
    title: "Shoe Store",
    description:
      "A sleek e-commerce frontend for a shoe brand with product listings, filtering, and a modern storefront UI.",
    tags: ["Next.js", "E-commerce", "Tailwind CSS"],
    image: "/img/shoe-store.png",
    demoUrl: "https://shoe-store-beta-eight.vercel.app",
  },
  {
    title: "Quiz Master",
    description:
      "An interactive quiz application with varied categories, real-time scoring, and a modern, engaging interface.",
    tags: ["React", "Quiz App", "Frontend"],
    image: "/img/quiz-master.png",
    demoUrl: "https://my-app-malik-muazzams-projects.vercel.app",
    repoUrl: "https://github.com/Muazzam-Ali-786/my-app",
  },
  {
    title: "Expense Tracker",
    description:
      "A personal finance and expense tracking app to monitor daily spending with clean charts and simple data entry.",
    tags: ["JavaScript", "Finance", "Frontend"],
    image: "/img/extense-tracker.png",
    demoUrl: "https://exptense-tracker.vercel.app",
  },
  {
    title: "Vexo - Private Chat App",
    description:
      "A real-time private chat application with a modern messaging interface, room-based conversations, and smooth UX.",
    tags: ["React", "Real-time", "Chat"],
    image: "/img/chat-app-image.png",
    imageFit: "contain" as const,
    demoUrl: "https://vexo-private-chat-app.vercel.app",
  },
];

const stats = [
  { value: `${projects.length}+`, label: "Projects built" },
  { value: `${projects.filter((p) => p.label).length}`, label: "Client platforms" },
  { value: "2022", label: "Started coding" },
];

const profile = [
  { key: "name", value: "Malik Muazzam Ali" },
  { key: "email", value: EMAIL },
  { key: "location", value: "Faisalabad, Punjab, Pakistan" },
  { key: "status", value: "Open to opportunities", highlight: true },
];

export default function Portfolio() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-void text-white">
      <CosmicBackground />
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32">
        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,560px)] xl:gap-20">
            <div className="space-y-8">
              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] text-stone-500">
                <span className="flex items-center gap-2 text-acid-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acid-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-acid-400" />
                  </span>
                  Available for work
                </span>
                <span className="h-px w-6 bg-stone-700" />
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3" /> Faisalabad, PK
                </span>
              </div>

              <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold leading-[0.9] tracking-[-0.04em]">
                <span className="block text-[#f2efe8]">Malik</span>
                <span className="text-holo block">Muazzam Ali</span>
              </h1>

              <div className="flex items-center gap-3 font-mono text-base text-stone-300 md:text-lg">
                <span className="rounded-md border border-ember-400/40 bg-ember-400/10 px-2 py-0.5 text-xs text-ember-300">
                  role
                </span>
                <Typewriter words={roles} />
              </div>

              <p className="max-w-xl text-lg leading-relaxed text-stone-400">
                I build responsive web experiences with modern tools, care about clean code and UI, and keep
                leveling up through projects and real-world practice.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link href="#projects" className="btn-holo group">
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/resume" className="btn-glass">
                  View Resume
                </Link>
                <Link href="#contact" className="btn-glass">
                  Contact Me
                </Link>
              </div>

              <div className="flex flex-wrap items-center gap-6 border-t border-white/10 pt-6">
                <dl className="flex gap-8">
                  {stats.map((stat) => (
                    <div key={stat.label} className="flex flex-col-reverse gap-1">
                      <dt className="font-mono text-[10px] uppercase tracking-widest text-stone-500">{stat.label}</dt>
                      <dd className="text-2xl font-bold text-[#f2efe8] sm:text-3xl">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className="flex gap-2 sm:ml-auto">
                  {socials.map(({ name, href, icon: Icon }) => (
                    <Link
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={name}
                      className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-stone-400 transition-all hover:-translate-y-0.5 hover:border-acid-400/60 hover:text-acid-300"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <CodeWindow />
            </div>
          </div>
        </div>

        <a
          href="#about"
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] text-stone-500 transition-colors hover:text-acid-300 lg:flex"
        >
          scroll
          <span className="relative h-12 w-px overflow-hidden bg-white/10">
            <span className="absolute inset-0 animate-scroll-line bg-acid-300" />
          </span>
        </a>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-28 md:py-36">
        <div className="container relative z-10">
          <SectionHeading index="01" title="About Me" subtitle="Who I am and what I build" />

          <div className="mt-16 grid grid-cols-1 items-stretch gap-10 md:grid-cols-2">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-acid-500/20 via-ember-500/10 to-acid-500/20 opacity-70 blur-2xl" />
              <SpotlightCard corners className="overflow-hidden">
                <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl">
                  <img
                    src={ABOUT_IMG}
                    alt="Collaboration and workspace"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-br from-acid-500/10 to-ember-600/20 mix-blend-overlay" />
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 animate-scan bg-gradient-to-b from-transparent via-acid-300/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
                    <div className="flex items-center gap-2 rounded-full border border-acid-400/30 bg-black/50 px-3 py-1.5 backdrop-blur-md">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-acid-400 shadow-[0_0_8px_#d9ff4d]" />
                      <span className="text-sm font-medium">Available for work</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-white/50">
                      31.4°N 73.1°E
                    </span>
                  </div>
                </div>
              </SpotlightCard>
            </div>

            <div className="order-1 md:order-2">
              <SpotlightCard className="overflow-hidden">
                {/* Terminal title bar */}
                <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.03] px-5 py-3">
                  <span className="h-3 w-3 rounded-full bg-red-400/80" />
                  <span className="h-3 w-3 rounded-full bg-yellow-400/80" />
                  <span className="h-3 w-3 rounded-full bg-acid-400/80" />
                  <span className="ml-3 font-mono text-xs text-stone-500">~/malik/about.md</span>
                </div>

                <div className="space-y-5 p-6 md:p-8">
                  <p className="font-mono text-sm text-acid-300">
                    <span className="text-acid-400">$</span> whoami
                  </p>
                  <div className="space-y-4 text-base leading-relaxed text-stone-300 md:text-lg">
                    <p>
                      I&apos;m Malik Muazzam Ali, a web developer focused on modern web technologies. I enjoy turning
                      ideas into fast, responsive interfaces and learning something new with every project.
                    </p>
                    <p>
                      I work with HTML, CSS, JavaScript, and frameworks like React and Next.js, and I use Git/GitHub
                      to ship and iterate. My aim is straightforward: write maintainable code, keep the UX polished,
                      and grow through hands-on projects.
                    </p>
                    <p>
                      I am open to internships, junior roles, and collaboration opportunities where I can
                      contribute, learn from a team, and keep building real products.
                    </p>
                  </div>

                  <p className="pt-2 font-mono text-sm text-acid-300">
                    <span className="text-acid-400">$</span> cat profile.json
                  </p>
                  <dl className="grid grid-cols-1 gap-x-6 gap-y-4 rounded-xl border border-white/10 bg-black/30 p-5 font-mono text-sm sm:grid-cols-2">
                    {profile.map((item) => (
                      <div key={item.key} className="min-w-0 space-y-1">
                        <dt className="text-xs text-ember-300/80">&quot;{item.key}&quot;</dt>
                        <dd className={item.highlight ? "text-acid-300" : "break-all text-stone-100"}>
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <Link href="/resume" className="btn-glass">
                    View Resume <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </SpotlightCard>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-28 md:py-36">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 opacity-60" aria-hidden="true">
          <Marquee className="[--duration:50s] [--gap:3rem]" repeat={3}>
            {skills.map((skill) => (
              <span key={skill} className="text-outline whitespace-nowrap text-7xl font-bold uppercase md:text-9xl">
                {skill} <span className="text-acid-400/20">✦</span>
              </span>
            ))}
          </Marquee>
        </div>

        <div className="container relative z-10">
          <SectionHeading index="02" title="My Skills" subtitle="Technologies I work with" />

          <div className="mt-16 flex flex-wrap gap-4">
            {skills.map((skill) => (
              <SkillBadge key={skill} name={skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-28 md:py-36">
        <div className="container relative z-10">
          <SectionHeading index="03" title="Featured Projects" subtitle="Some of my recent work" />

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {projects.map((project, i) => (
              <ProjectCard key={project.title} index={i} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-28 md:py-36">
        <div className="container relative z-10">
          <SectionHeading index="04" title="Work Experience" subtitle="My professional journey" />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-28 md:py-36">
        <div className="container relative z-10">
          <SectionHeading index="05" title="Get In Touch" subtitle="Reach me here" />

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SpotlightCard className="p-6 md:p-8">
              <h3 className="text-2xl font-bold tracking-tight">Contact Info</h3>
              <p className="mt-2 text-sm text-stone-400">
                Have a project, role, or idea in mind? Ping me on any channel below.
              </p>
              <div className="mt-8 space-y-4">
                {socials.map(({ name, href, icon: Icon, display }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/row flex items-center gap-4 rounded-xl border border-white/5 bg-black/20 p-3 transition-all hover:border-acid-400/40 hover:bg-acid-400/5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-acid-400/30 bg-acid-400/10 text-acid-300 transition-shadow group-hover/row:shadow-[0_0_18px_-4px_#c8f526]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-stone-500">
                        {name}
                      </span>
                      <span className="block break-all text-sm font-medium text-stone-100">{display}</span>
                    </span>
                    <ArrowUpRight className="h-4 w-4 shrink-0 text-stone-500 transition-all group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-acid-300" />
                  </a>
                ))}
              </div>
            </SpotlightCard>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-white/10 pt-16">
        <div className="container relative z-10 flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-3 text-xl font-bold tracking-tight">
              <PulseDot />
              <span>
                Muazam<span className="text-acid-300">.</span>
                <span className="font-mono text-lg font-medium text-stone-400">dev</span>
              </span>
            </Link>
            <p className="mt-2 font-mono text-xs text-stone-500">
              © {new Date().getFullYear()} Malik Muazzam Ali. All rights reserved.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ name, href, icon: Icon }) => (
              <Link
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-stone-400 transition-all hover:border-acid-400/50 hover:text-white"
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
            <Link
              href="#home"
              aria-label="Back to top"
              className="grid h-10 w-10 place-items-center rounded-xl border border-acid-400/30 bg-acid-400/10 text-acid-300 transition-all hover:-translate-y-0.5 hover:shadow-[0_0_18px_-4px_#c8f526]"
            >
              <ArrowUp className="h-4 w-4" />
            </Link>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="text-outline pointer-events-none mt-10 select-none whitespace-nowrap text-center text-[18vw] font-bold leading-[0.8] tracking-tighter"
        >
          MUAZAM.DEV
        </div>
      </footer>
    </div>
  );
}
