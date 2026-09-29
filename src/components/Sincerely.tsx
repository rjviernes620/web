import {
  Sparkles,
  Smartphone,
  Cpu,
  Database,
  ShieldCheck,
  Zap,
  ExternalLink,
  Code2,
  Terminal,
  CheckCircle2,
  GitBranch,
  Layers
} from 'lucide-react'

// Custom Google Play Icon
const GooglePlayIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.609 1.814C3.22 2.203 3 2.766 3 3.43v17.14c0 .664.22 1.227.609 1.616l.084.08 9.601-9.6v-.218L3.693 1.734l-.084.08z" fill="#00E676" />
    <path d="M16.593 15.75l-3.3-3.3v-.218l3.3-3.3.084.048 3.91 2.22c1.116.634 1.116 1.674 0 2.308l-3.91 2.22-.084.022z" fill="#FFD600" />
    <path d="M16.677 15.728L13.293 12.34 3.609 22.024c.368.39 .979.438 1.674.044l11.394-6.34" fill="#FF3D00" />
    <path d="M16.677 8.272L5.283 1.932C4.588 1.538 3.977 1.586 3.609 1.976L13.293 11.66l3.384-3.388z" fill="#00B0FF" />
  </svg>
)

// Custom Instagram Icon
const InstagramIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

export default function Sincerely() {
  const techStack = [
    { name: 'React 18', role: 'Frontend Core' },
    { name: 'TypeScript', role: 'Type Safety' },
    { name: 'Capacitor 6', role: 'Native Android Bridge' },
    { name: 'Android SDK 34', role: 'Target Platform' },
    { name: 'Cloud Firestore', role: 'Real-Time Sync' },
    { name: 'Firebase Storage', role: 'Encrypted Media CDN' },
    { name: 'Tailwind CSS', role: 'Responsive Design' },
    { name: 'RevenueCat', role: 'Subscription Billing' },
    { name: 'Motion', role: 'Hardware-Accelerated UI' }
  ]

  const metrics = [
    { value: '95%+', label: 'Shared Codebase', subtext: 'Single codebase powering Android & Web' },
    { value: '< 1.2s', label: 'Cold Unbox Hydration', subtext: 'Optimized chunking on mobile WebKit' },
    { value: '0 Apps', label: 'Required for Recipients', subtext: 'Instant unboxing via URL / 4"×6" QR slip' },
    { value: '100%', label: 'Private & Ad-Free', subtext: 'Zero ad trackers or third-party cookies' }
  ]

  const architecturalDecisions = [
    {
      title: 'Unified Native & Web Runtime (Capacitor 6)',
      icon: Smartphone,
      color: 'text-indigo-400',
      badge: 'Architecture',
      description:
        'Instead of building separate apps in Kotlin and web frameworks, I chose Capacitor 6 with React and TypeScript. This allowed me to share 95%+ of my business logic and UI while maintaining direct access to native Android APIs—including Google Play In-App Review, hardware clipboard, and push notifications.'
    },
    {
      title: 'Zero-Install Recipient Unboxing Engine',
      icon: Zap,
      color: 'text-amber-400',
      badge: 'Performance',
      description:
        'I identified that the number one friction point in digital gifting was forcing recipients to download an app or register an account. I engineered a lightweight progressive web unbox client that loads personalized animations, audio memos, and falling particle effects in under 1.2 seconds directly inside any mobile browser.'
    },
    {
      title: 'Real-Time Sync & Encrypted Media Pipeline',
      icon: Database,
      color: 'text-emerald-400',
      badge: 'Backend',
      description:
        'I structured Cloud Firestore to handle real-time state synchronization between the card creator and the recipient unbox session. Heavy multimodal assets (voice recordings, HD videos, polaroid images) are streamed through Firebase Storage using signed URLs, keeping the core metadata payload extremely lean.'
    },
    {
      title: 'In-App Subscriptions & Play Store Compliance',
      icon: ShieldCheck,
      color: 'text-rose-400',
      badge: 'Monetization',
      description:
        'I integrated RevenueCat with Google Play Billing to manage recurring subscription entitlements and seasonal wax seal packs. I also authored custom ProGuard rules to ensure strict compliance with Google Play background execution and exact alarm clock policies.'
    }
  ]

  return (
    <section className="py-24 bg-[#0a0b10] relative overflow-hidden" id="sincerely">
      {/* Background radial lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-6xl h-96 bg-indigo-500/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-mono font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              CURRENTLY BUILDING
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-mono font-semibold tracking-wide">
              <Code2 className="w-3.5 h-3.5 text-indigo-400" />
              FLAGSHIP PRODUCTION PROJECT
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-mono font-semibold tracking-wide">
              <GooglePlayIcon className="w-3.5 h-3.5" />
              LIVE ON GOOGLE PLAY
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-consolas font-bold text-white tracking-tight mb-4">
            What I'm Currently Building: Sincerely
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-3xl mx-auto leading-relaxed font-sans">
            I'm building and scaling <strong>Sincerely</strong>, a mobile keepsake studio available on Android with universal web unboxing. Here is an overview of how I engineered the application, the architectural decisions I made, and the problems I solved.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <a
              href="https://play.google.com/store/apps/details?id=com.sw15sy.sincerely"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 group border border-indigo-400/20"
            >
              <GooglePlayIcon className="w-4 h-4" />
              <span>View Live on Google Play</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
            </a>

            <a
              href="https://www.instagram.com/sincerelyapp.cc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-gray-200 hover:text-white font-medium text-sm border border-white/10 hover:border-pink-500/40 transition-all transform hover:-translate-y-0.5 group"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform" />
              <span>@sincerelyapp.cc on Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </div>

        {/* 1st Person POV Engineering Story / Context Box */}
        <div className="bg-[#111219]/80 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-md mb-12 relative overflow-hidden">
          <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-5 text-xs font-mono text-gray-400">
            <Terminal className="w-4 h-4 text-indigo-400" />
            <span>engineering_notes.md</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8 space-y-4 text-gray-300 text-sm md:text-base leading-relaxed">
              <p>
                Digital greetings today are largely broken: people receive generic text links or static PDF e-cards that get buried in spam folders. I wanted to build something tactile and genuine—combining the sensory anticipation of peeling an authentic wax seal with rich multimedia (voice notes, HD videos, polaroid photo memories, and ambient particle physics).
              </p>
              <p>
                From an engineering standpoint, my primary goal was <strong>zero recipient friction</strong>. If the person opening the card has to download an app from an app store, sign in with OAuth, or navigate popups, the emotional moment is completely lost. I designed Sincerely so that creators get the full native power of an Android creation studio, while recipients can unbox their keepsakes in any web browser in sub-1.2 seconds, whether they are on an iPhone, Android, tablet, or desktop.
              </p>
            </div>

            {/* Quick Metadata Column */}
            <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl p-5 font-mono text-xs space-y-3">
              <div>
                <span className="text-gray-400 block text-[11px]">My Role</span>
                <span className="text-white font-medium">Creator & Founder</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[11px]">Development Status</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1.5 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Development (Production)
                </span>
              </div>
              <div>
                <span className="text-gray-400 block text-[11px]">Production Package</span>
                <span className="text-indigo-300 font-medium">com.sw15sy.sincerely</span>
              </div>
              <div>
                <span className="text-gray-400 block text-[11px]">Primary Target</span>
                <span className="text-white font-medium">Android (Native) + Universal Web</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Architecture Decisions Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Cpu className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl md:text-2xl font-consolas font-bold text-white">
              Key Architectural Decisions I Made
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {architecturalDecisions.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-[#111219]/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex flex-col justify-between hover:border-indigo-500/30 transition-all duration-300 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                        <Icon className={`w-5 h-5 ${item.color}`} />
                      </div>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/5 text-gray-400 border border-white/10 text-[11px] font-mono">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-base font-consolas font-bold text-white mb-2.5">
                      {item.title}
                    </h4>

                    <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Engineering Metrics / Telemetry */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {metrics.map((metric, idx) => (
            <div
              key={idx}
              className="bg-[#111219]/70 border border-white/10 rounded-2xl p-5 text-center backdrop-blur-md"
            >
              <div className="text-2xl md:text-3xl font-mono font-bold text-white mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-mono text-indigo-300 font-semibold mb-1">
                {metric.label}
              </div>
              <div className="text-[11px] text-gray-400 leading-tight">
                {metric.subtext}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Bar */}
        <div className="bg-[#111219]/60 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
          <div className="flex items-center gap-2 mb-4">
            <Layers className="w-4 h-4 text-indigo-400" />
            <span className="font-mono text-xs text-gray-300 uppercase tracking-wider font-semibold">
              Technologies I'm Using in Production
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 flex items-center gap-2 text-xs font-mono hover:border-indigo-500/40 hover:bg-white/[0.06] transition-colors"
              >
                <span className="text-white font-medium">{tech.name}</span>
                <span className="text-[10px] text-gray-400 border-l border-white/10 pl-2">
                  {tech.role}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
