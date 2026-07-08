import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import {
  AlertCircle,
  Terminal,
  Cpu,
  Activity,
  ChevronRight,
  CornerDownRight,
  CheckCircle2,
  Sparkles,
  Server
} from 'lucide-react'

interface CaseStudy {
  id: number
  index: string
  company: string
  title: string
  role: string
  period: string
  metric: string
  metricLabel: string
  tags: string[]
  image?: string
  logo?: string
  diagnostic: {
    overview: string
    challenges: string[]
  }
  resolution: {
    strategy: string
    steps: { title: string; desc: string }[]
  }
  telemetry: {
    impact: string
    stats: { label: string; value: string }[]
  }
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    index: "01",
    company: "JuiceGels.com",
    title: "Creating juicegels.com",
    role: "Web Developer",
    period: "June 2026 - Present",
    metric: "+15%",
    metricLabel: "Conversion Increase",
    tags: ["Analytics", "Web development", "SEO", "Sanity Studio", "React", "Git", "Render", "Python"],
    image: "/assets/img/code-1076536_1280.jpg",
    logo: "/assets/img/juicegels-logo.png",
    diagnostic: {
      overview: "Juicegels is a relatively new business with a small online presence. They have been operating for 2 years using Instagram DMs to sell their products. However, they have been facing challenges in managing their sales and customer service, which has led to lost leads and poor customer experience.",
      challenges: [
        "- Sales were initially made solely via Instagram DM, leading to lost leads and poor customer experience.",
        "- Inventory is presented via Instagram Posts",
        "- Response time is slow due to the communication lag between the response team and the admissions database"
      ]
    },
    resolution: {
      strategy: "Revamped the JuiceGels.com online presence with a modern, intuitive storefront, Easy to use CMS and integrated Instagram/Facebook shop connectivity.",
      steps: [
        {
          title: "Ease to use CMS",
          desc: "Implemented a simple product database using Sanity studio, Allowing the client to easily manage their product inventory on the website with no changes needed to the codebase. "
        },
        {
          title: "Clean, Intuitive Storefront",
          desc: "Implemented a modern, intuitive storefront for JuiceGels.com, allowing customers to easily browse and purchase products."
        },
        {
          title: "Connectivity with Instagram/Facebook shop",
          desc: "Integrate Instagram and Facebook shop with the website, allowing customers to easily browse and purchase products on Instagram and seamlessly continue the checkout process on the website."
        }
      ]
    },
    telemetry: {
      impact: "Successfully amplified the business's online presence, introducing a new way to interact with customers and improving the customer experience",
      stats: [
        { label: "Conversion Rates", value: "10% +" },
        { label: "Order Processing Times", value: "10% Faster" }
      ]
    }
  },
  {
    id: 2,
    index: "02",
    company: "University of Greenwich",
    title: "FES Recruitment & Digital Content Pipeline",
    role: "Social Media & Content Operations Coordinator",
    period: "June 2023 — Oct 2025",
    metric: "+10%",
    metricLabel: "Social Reach Growth",
    tags: ["Adobe Premiere", "After Effects", "Digital Strategy", "Asset Pipelines", "Audience Engagement"],
    image: "/assets/img/chatbot-3936760_1280.jpg",
    diagnostic: {
      overview: "The Faculty of Engineering & Science's outreach channels lacked consistent, high-impact branding. Complex academic and computer science concepts were not successfully translating into digestible, engaging digital media for prospective undergraduate candidates.",
      challenges: [
        "Uncoordinated content pipelines leading to irregular publishing cadences during recruitment cycles.",
        "Low engagement rates on static, text-heavy promotional materials regarding advanced research.",
        "Ineffective digital/physical hybrid touchpoints at university open days to spark interest in STEM fields."
      ]
    },
    resolution: {
      strategy: "Designed a centralized production schedule and established a high-impact organic video content pipeline. Introduced physical-digital hybrid interaction models to make tech exhibits highly tangible.",
      steps: [
        {
          title: "Creative Content Pipeline",
          desc: "Established a structured digital asset framework converting complex research projects into fast-paced reels and TikToks."
        },
        {
          title: "NFC Event Integration",
          desc: "Engineered and deployed interactive NFC-powered event guides at Campus Open Days, instantly linking physical visitors to digital portfolios."
        },
        {
          title: "Robotic Tech Showcases",
          desc: "Filmed, highlighted, and facilitated live robotic demonstration streams to boost engagement and highlight engineering programs."
        }
      ]
    },
    telemetry: {
      impact: "Dramatically increased online brand authority for the faculty, directly contributing to enrollment targets for computer science and engineering modules.",
      stats: [
        { label: "Organic Reach Growth", value: "+10%" },
        { label: "Clearing Media CTR", value: "+22%" },
        { label: "Open Day Engagement", value: "Record High" },
        { label: "Admissions Met", value: "100%" }
      ]
    }
  },
  {
    id: 3,
    index: "03",
    company: "comptech.gre Society",
    title: "Community Growth & Partnership Outreach",
    role: "President",
    period: "Sep 2023 — May 2025",
    metric: "300+",
    metricLabel: "Ball Attendees",
    tags: ["Community Operations", "Notion Workspace", "Budget Management", "Logistics", "Sponsor Relations"],
    image: "/assets/img/comptech crest v2.png",
    diagnostic: {
      overview: "The University Computer Technology Society had suffered from declining post-pandemic engagement, outdated marketing strategies, and fragmented digital workspace environments, leaving students without a strong technical network.",
      challenges: [
        "Declining active membership and engagement across programming workshops.",
        "Fragmented, low-efficiency collaborative systems for the student executive committee.",
        "Absence of flagship professional networking events to connect computer technology students with industry leaders."
      ]
    },
    resolution: {
      strategy: "Revitalized operations by centralizing planning within Notion workspaces, establishing external community sponsorships, and scaling up interactive workshops and flagship events.",
      steps: [
        {
          title: "Operations Centralization",
          desc: "Migrated all society planning, budget trackers, and tasks to an integrated Notion workspace, boosting committee output."
        },
        {
          title: "Sponsorship & Outreach",
          desc: "Partnered directly with Notion and local brands to secure event sponsorships and developer resources for student members."
        },
        {
          title: "Flagship Event Engineering",
          desc: "Re-established the Faculty End of Year Ball, managing a 300+ attendee gala with live audio-visuals, catering, and guest logistics."
        }
      ]
    },
    telemetry: {
      impact: "Successfully built one of the university's most active and recognized STEM communities, leaving a robust operations blueprint for future leaders.",
      stats: [
        { label: "Membership Expansion", value: "+15%" },
        { label: "Ball Attendees", value: "300+" },
        { label: "Notion Sponsorship", value: "Active" },
        { label: "Budget Cleared", value: "100% Audit" }
      ]
    }
  }
]

type ActiveTab = 'diagnostic' | 'resolution' | 'telemetry'

export default function CaseStudies() {
  const [activeStudy, setActiveStudy] = useState<CaseStudy>(caseStudies[0])
  const [activeTab, setActiveTab] = useState<ActiveTab>('diagnostic')

  const tabDetails = [
    { id: 'diagnostic' as ActiveTab, label: '01. DIAGNOSTIC', icon: AlertCircle },
    { id: 'resolution' as ActiveTab, label: '02. RESOLUTION', icon: Cpu },
    { id: 'telemetry' as ActiveTab, label: '03. TELEMETRY', icon: Activity },
  ]

  return (
    <section className="py-24 bg-[#0a0b10] border-t border-white/5 relative overflow-hidden" id="case-studies">
      {/* Background glow graphics */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            Diagnostics & Resolution Logs
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Detailed case files analyzing problems I've solved, the engineering and leadership strategies deployed, and final metrics achieved.
          </p>
        </div>

        {/* Console Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">

          {/* Left Panel: Selector List (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-2 px-1 text-gray-500 font-mono text-xs">
              <Terminal size={14} className="text-indigo-400" />
              <span>ACTIVE_REPORTS.LOG</span>
            </div>

            <div className="flex flex-col gap-3">
              {caseStudies.map((study) => {
                const isActive = activeStudy.id === study.id
                return (
                  <button
                    key={study.id}
                    onClick={() => {
                      setActiveStudy(study)
                      setActiveTab('diagnostic') // Reset tab on study switch
                    }}
                    className={`text-left w-full p-4 rounded-xl border transition-all duration-300 relative group cursor-pointer ${isActive
                      ? 'bg-[#111219]/90 border-indigo-500/40 shadow-[0_0_20px_rgba(99,102,241,0.08)]'
                      : 'bg-[#111219]/45 border-white/5 hover:border-indigo-500/20 hover:bg-[#111219]/60'
                      }`}
                  >
                    {/* Glowing highlight indicator */}
                    {isActive && (
                      <span className="absolute top-0 bottom-0 left-0 w-[3px] bg-indigo-500 rounded-l-xl" />
                    )}

                    <div className="flex items-center justify-between mb-2">
                      <span className={`text-[10px] font-mono tracking-wider ${isActive ? 'text-indigo-400 font-bold' : 'text-gray-500'}`}>
                        REPORT // #{study.index}
                      </span>
                      <span className="font-mono text-[10px] text-gray-400 bg-white/5 px-2 py-0.5 rounded">
                        {study.period.split(' — ')[1] || study.period}
                      </span>
                    </div>

                    <h3 className={`text-sm font-bold transition-colors mb-2 ${isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                      {study.title}
                    </h3>

                    <p className="text-xs text-indigo-300/80 font-mono mb-3 truncate">
                      @{study.company}
                    </p>

                    {/* Stats Snippet */}
                    <div className="flex items-center justify-between p-2 rounded-lg bg-black/20 border border-white/5">
                      <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider">
                        {study.metricLabel}
                      </span>
                      <span className={`text-xs font-consolas font-bold ${isActive ? 'text-emerald-400' : 'text-emerald-500/80'}`}>
                        {study.metric}
                      </span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Panel: Active Case Study Terminal (8 cols) */}
          <div className="lg:col-span-8 flex flex-col">

            {/* Terminal Topbar Info */}
            <div className="flex items-center justify-between px-1 mb-2 text-gray-500 font-mono text-xs">
              <span className="flex items-center gap-1.5">
                <Server size={13} className="text-purple-400" />
                <span>RESOLVER_CONSOLE: v1.0.4</span>
              </span>
              <span className="text-gray-600 font-mono">STATUS: COMPILED</span>
            </div>

            {/* Simulated Terminal Window */}
            <div className="flex-1 flex flex-col bg-[#111219]/90 border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-md">

              {/* Window Header */}
              <div className="bg-[#0c0d13] px-4 py-3 border-b border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ef4444]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#eab308]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#22c55e]/80" />
                  <span className="text-xs text-gray-400 font-mono ml-2 truncate">
                    case_study_{activeStudy.index}.sh
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  <span className="text-[10px] font-mono text-gray-500 uppercase bg-white/5 px-2 py-0.5 rounded">
                    SYS_LOG
                  </span>
                </div>
              </div>

              {/* Console Tabs */}
              <div className="bg-[#14151f] border-b border-white/5 flex flex-wrap">
                {tabDetails.map((tab) => {
                  const isActive = activeTab === tab.id
                  const Icon = tab.icon
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-5 py-3 text-[11px] font-mono border-r border-white/5 transition-colors cursor-pointer ${isActive
                        ? 'bg-[#111219] text-indigo-400 font-bold border-b-2 border-b-indigo-500'
                        : 'text-gray-400 hover:bg-white/[0.02] hover:text-white'
                        }`}
                    >
                      <Icon size={12} className={isActive ? 'text-indigo-400' : 'text-gray-500'} />
                      <span>{tab.label}</span>
                    </button>
                  )
                })}
              </div>

              {/* Terminal Screen Content */}
              <div className="p-6 md:p-8 flex-1 min-h-[300px] font-mono text-xs md:text-sm text-gray-300 space-y-6">

                {/* Active Info Header */}
                <div className="border-b border-white/5 pb-4 mb-4 font-sans flex items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-indigo-400 uppercase tracking-widest mb-1">
                      <span>REPORT CONTEXT</span>
                      <span className="text-gray-600">|</span>
                      <span>{activeStudy.period}</span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-white leading-tight">
                      {activeStudy.title}
                    </h4>
                    <p className="text-xs text-gray-400 font-mono mt-1">
                      Role: <span className="text-indigo-300">{activeStudy.role}</span>
                    </p>
                  </div>
                  {activeStudy.logo && (
                    <div className="shrink-0">
                      <img
                        src={activeStudy.logo}
                        alt={`${activeStudy.company} Logo`}
                        className="w-16 h-16 md:w-20 md:h-20 object-contain rounded-full border border-white/10 bg-white/5 p-1"
                      />
                    </div>
                  )}
                </div>
                {/* Dual Column Layout (Text + Optional Image) */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">

                  {/* Left side: Tab content */}
                  <div className={activeStudy.image ? 'md:col-span-7 space-y-4' : 'md:col-span-12 space-y-4'}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeStudy.id}-${activeTab}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.25 }}
                        className="space-y-4"
                      >
                        {/* --- TAB 1: DIAGNOSTIC --- */}
                        {activeTab === 'diagnostic' && (
                          <div className="space-y-5">
                            <div>
                              <div className="text-[10px] font-mono text-indigo-400/70 mb-2">// PROBLEM OVERVIEW</div>
                              <p className="text-gray-300 leading-relaxed font-sans font-light">
                                {activeStudy.diagnostic.overview}
                              </p>
                            </div>

                            <div className="space-y-3 pt-2">
                              <div className="text-[10px] font-mono text-indigo-400/70">// SYSTEMIC CHALLENGES</div>
                              {activeStudy.diagnostic.challenges.map((challenge, idx) => (
                                <div key={idx} className="flex items-start gap-2.5">
                                  <span className="text-rose-500 shrink-0 select-none mt-0.5">!</span>
                                  <span className="text-gray-400 text-xs md:text-sm leading-relaxed font-sans">
                                    {challenge}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* --- TAB 2: RESOLUTION --- */}
                        {activeTab === 'resolution' && (
                          <div className="space-y-5">
                            <div>
                              <div className="text-[10px] font-mono text-indigo-400/70 mb-2">// STRATEGY STATEMENT</div>
                              <p className="text-gray-300 leading-relaxed font-sans font-light">
                                {activeStudy.resolution.strategy}
                              </p>
                            </div>

                            <div className="space-y-4 pt-2">
                              <div className="text-[10px] font-mono text-indigo-400/70">// EXECUTED TASKS</div>
                              {activeStudy.resolution.steps.map((step, idx) => (
                                <div key={idx} className="flex gap-3">
                                  <CornerDownRight size={14} className="text-indigo-400 shrink-0 mt-1" />
                                  <div className="font-sans">
                                    <span className="font-mono text-xs text-white font-semibold block sm:inline mr-2">
                                      Task_{idx + 1}: {step.title}
                                    </span>
                                    <span className="text-gray-400 text-xs leading-relaxed block sm:inline">
                                      — {step.desc}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* --- TAB 3: TELEMETRY --- */}
                        {activeTab === 'telemetry' && (
                          <div className="space-y-6">
                            <div>
                              <div className="text-[10px] font-mono text-indigo-400/70 mb-2">// RESOLUTION OUTCOME</div>
                              <p className="text-gray-300 leading-relaxed font-sans font-light">
                                {activeStudy.telemetry.impact}
                              </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4 pt-2">
                              {activeStudy.telemetry.stats.map((stat, idx) => (
                                <div key={idx} className="p-4 rounded-xl bg-black/30 border border-white/5 flex flex-col justify-between group relative overflow-hidden">
                                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2 z-10">
                                    {stat.label}
                                  </span>
                                  <div className="flex items-baseline gap-2 z-10">
                                    <span className="text-2xl font-bold font-consolas text-emerald-400 tracking-tight">
                                      {stat.value}
                                    </span>
                                    <CheckCircle2 size={13} className="text-emerald-400/60" />
                                  </div>
                                  {/* Pulse decoration */}
                                  <div className="absolute top-0 right-0 w-8 h-8 bg-emerald-500/5 rounded-full blur-md group-hover:bg-emerald-500/10 transition-colors" />
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Right side: Visual Attachment */}
                  {activeStudy.image && (
                    <div className="md:col-span-5 flex flex-col w-full">
                      <div className="text-[10px] font-mono text-indigo-400/70 mb-2">// VISUAL_ATTACHMENT</div>
                      <div className="relative group overflow-hidden rounded-xl border border-white/10 bg-black/30 p-1.5 backdrop-blur-sm transition-all duration-300 hover:border-indigo-500/30">
                        <img
                          src={activeStudy.image}
                          alt={activeStudy.title}
                          className="w-full aspect-video md:aspect-[4/3] object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-all duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg" />
                      </div>
                    </div>
                  )}

                </div>

                {/* Applied Skills footer in terminal */}
                <div className="pt-6 border-t border-white/5">
                  <div className="text-[10px] font-mono text-gray-500 mb-2.5 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles size={11} className="text-indigo-400" />
                    <span>Applied_Tech_Stack.sh</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/5 border border-indigo-500/10 text-indigo-300/90"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
