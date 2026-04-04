import Link from "next/link"
import { ArrowLeft, Phone, Mail, MapPin, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { FloatingNav } from "@/components/floating-nav"
import { MouseFollower } from "@/components/mouse-follower"
import { ScrollProgress } from "@/components/scroll-progress"

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />
      
      <section className="relative py-24 px-4 min-h-screen">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-phthalo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-phthalo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="container relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Link href="/">
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block w-32 h-32 rounded-full bg-gradient-to-r from-phthalo-500 to-phthalo-700 p-1 mb-6">
              <img 
                src="/profile-photo.jpg" 
                alt="M. Muazzam Ali" 
                className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-white/20"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-phthalo-400 to-phthalo-600 bg-clip-text text-transparent mb-4">
              M. Muazzam Ali
            </h1>
            <h2 className="text-2xl font-semibold text-phthalo-400 mb-8">
              WEB DEVELOPER
            </h2>
            <div className="flex flex-wrap gap-4 justify-center text-sm mb-8">
              <div className="flex items-center gap-2 text-zinc-400">
                <Mail className="h-4 w-4" />
                malik786526.68@gmail.com
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Phone className="h-4 w-4" />
                +92-3247405406
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <MapPin className="h-4 w-4" />
                Faisalabad
              </div>
            </div>
          </div>

          {/* Profile Summary */}
          <GlassmorphicCard className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-phthalo-400 border-b border-white/20 pb-4">
              Profile Summary
            </h3>
            <p className="text-zinc-300 leading-relaxed">
              Full-stack developer specializing in MERN and Next.js, experienced in SSR, API development, and responsive UI design. Passionate about creating efficient and user-friendly web solutions. Backend APIs, and database integration. Committed to delivering optimized and maintainable applications.
            </p>
          </GlassmorphicCard>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Skills */}
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-phthalo-400 border-b border-white/20 pb-4">
                Technical Skills
              </h3>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-phthalo-600/50 text-phthalo-200 rounded-full text-sm font-medium border border-phthalo-500/50">HTML</span>
                  <span className="px-3 py-1 bg-phthalo-600/50 text-phthalo-200 rounded-full text-sm font-medium border border-phthalo-500/50">CSS</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-phthalo-600/50 text-phthalo-200 rounded-full text-sm font-medium border border-phthalo-500/50">JavaScript</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-phthalo-600/50 text-phthalo-200 rounded-full text-sm font-medium border border-phthalo-500/50">React.js</span>
                  <span className="px-3 py-1 bg-phthalo-600/50 text-phthalo-200 rounded-full text-sm font-medium border border-phthalo-500/50">Next.js</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-phthalo-600/50 text-phthalo-200 rounded-full text-sm font-medium border border-phthalo-500/50">Express.js</span>
                  <span className="px-3 py-1 bg-phthalo-600/50 text-phthalo-200 rounded-full text-sm font-medium border border-phthalo-500/50">Node.js</span>
                </div>
              </div>
            </GlassmorphicCard>

            {/* Work Experience */}
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6 text-phthalo-400 border-b border-white/20 pb-4">
                Work Experience
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Frontend Development</h4>
                  <ul className="text-zinc-300 space-y-1 list-disc list-inside text-sm">
                    <li>Designed responsive user interfaces using HTML5, CSS3, and JavaScript</li>
                    <li>Built reusable UI components using React.js</li>
                    <li>Collaborated with backend teams to integrate REST APIs</li>
                    <li>Used Figma and Canva for designing UI mockups and prototypes</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Backend Development</h4>
                  <ul className="text-zinc-300 space-y-1 list-disc list-inside text-sm">
                    <li>Developed full-stack applications using the MERN Stack</li>
                    <li>Created authentication systems using JWT and protected API routes</li>
                    <li>Built CRUD-based dashboards and dynamic frontend interfaces</li>
                  </ul>
                </div>
              </div>
            </GlassmorphicCard>
          </div>

          {/* Education */}
          <GlassmorphicCard className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-phthalo-400 border-b border-white/20 pb-4">
              Education
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-xl mb-2">Matric</h4>
                <p className="text-zinc-400 text-sm">Private</p>
                <p className="text-zinc-400 text-sm mt-1">2024 - 2025</p>
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-2">Gamica Cloud — Internship</h4>
                <p className="text-zinc-400 text-sm">Media relation</p>
                <p className="text-zinc-400 text-sm mt-1">Supervisor (Contact details available on request)</p>
              </div>
            </div>
          </GlassmorphicCard>
        </div>
      </section>
    </div>
  )
}

