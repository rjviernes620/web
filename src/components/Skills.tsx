import React, { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'
import {
  Terminal,
  Users2,
  Sparkles,
  Code2,
  Database,
  Palette,
  Laptop,
  GitBranch,
  FileSpreadsheet,
  Figma,
  Github,
  GitCommit,
  ExternalLink,
  Loader2
} from 'lucide-react'

// Define types for Tools
interface Tool {
  name: string
  category: 'tech' | 'creative' | 'analytics'
  icon: React.ReactNode
  color: string[] // Confetti colors (primary and secondary hex)
  borderColor: string // Hover border classes
  textColor: string // Icon/Text styling classes
}

interface GitHubStats {
  followers: number
  public_repos: number
  avatar_url: string
  html_url: string
  login: string
  name: string
}

interface Commit {
  repo: string
  message: string
  date: string
  sha: string
  url: string
}

export default function Skills() {
  // Code Editor Tab State
  const [activeTab, setActiveTab] = useState<'ts' | 'sql' | 'css'>('ts')

  // GitHub States
  const [ghStats, setGhStats] = useState<GitHubStats | null>(null)
  const [commits, setCommits] = useState<Commit[]>([])
  const [loading, setLoading] = useState(true)

  // Confetti trigger helper
  const triggerConfetti = (colors: string[]) => {
    confetti({
      particleCount: 35,
      spread: 50,
      origin: { y: 0.8 },
      colors: colors
    })
  }

  // Fetch GitHub Stats and Commits: SWR (Stale-While-Revalidate) Hybrid
  useEffect(() => {
    const loadGitHubData = async () => {
      let cachedData: any = null
      
      // 1. Load cached static JSON immediately
      try {
        const res = await fetch('/github-data.json')
        if (res.ok) {
          cachedData = await res.json()
          setGhStats(cachedData.stats)
          setCommits(cachedData.commits)
          setLoading(false) // Render cached data instantly
        }
      } catch (err) {
        console.error('Error loading local cached GitHub stats:', err)
      }

      // 2. Fetch fresh real-time data from GitHub API in the background
      try {
        const profileRes = await fetch('https://api.github.com/users/rjviernes620')
        if (!profileRes.ok) throw new Error('Profile fetch failed')
        const profileData = await profileRes.json()
        
        const freshStats = {
          followers: profileData.followers,
          public_repos: profileData.public_repos,
          avatar_url: profileData.avatar_url,
          html_url: profileData.html_url,
          login: profileData.login,
          name: profileData.name || profileData.login
        }
        setGhStats(freshStats)

        const commitsRes = await fetch('https://api.github.com/search/commits?q=author:rjviernes620&sort=author-date&order=desc&per_page=4')
        if (!commitsRes.ok) throw new Error('Commits search failed')
        const commitsData = await commitsRes.json()

        const freshCommits = (commitsData.items || []).map((item: any) => ({
          repo: item.repository.name,
          message: item.commit.message.split('\n')[0],
          date: new Date(item.commit.author.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
          sha: item.sha.substring(0, 7),
          url: item.html_url
        }))
        setCommits(freshCommits)
      } catch (err) {
        console.warn('Background GitHub API refresh failed (likely rate-limited), keeping cached data:', err)
        // If we failed to load cached data initially, use fallback mockup
        if (!cachedData) {
          setGhStats({
            followers: 12,
            public_repos: 15,
            avatar_url: 'https://github.com/rjviernes620.png',
            html_url: 'https://github.com/rjviernes620',
            login: 'rjviernes620',
            name: 'Roel Viernes'
          })
          setCommits([
            { repo: 'web', message: 'Redesign skills & experience sections into bento layout', date: 'Jul 6', sha: 'a8b3f1c', url: 'https://github.com/rjviernes620/web' },
            { repo: 'web', message: 'Initial commit of Vite + TS portfolio site', date: 'Jun 28', sha: 'c7d2e4a', url: 'https://github.com/rjviernes620/web' },
            { repo: 'HandTyper', message: 'Improve Mediapipe gesture calibration scripts', date: 'May 12', sha: 'f9e0d1c', url: 'https://github.com/rjviernes620/HandTyper' },
            { repo: 'event-guides', message: 'Update NFC tag registry and database schemas', date: 'Apr 24', sha: 'b5d1f2a', url: 'https://github.com/rjviernes620/web' }
          ])
        }
      } finally {
        setLoading(false)
      }
    }

    loadGitHubData()
  }, [])

  // Tools listing
  const tools: Tool[] = [
    { name: 'Figma', category: 'creative', icon: <Figma size={18} />, color: ['#F24E1E', '#FF7262'], borderColor: 'hover:border-[#F24E1E]/50', textColor: 'text-[#F24E1E]' },
    { name: 'Canva', category: 'creative', icon: <Palette size={18} />, color: ['#00C4CC', '#7D2AE8'], borderColor: 'hover:border-[#00C4CC]/50', textColor: 'text-[#00C4CC]' },
    { name: 'Premiere Pro', category: 'creative', icon: <Palette size={18} />, color: ['#EA77FF', '#9E00FF'], borderColor: 'hover:border-[#EA77FF]/50', textColor: 'text-[#EA77FF]' },
    { name: 'After Effects', category: 'creative', icon: <Palette size={18} />, color: ['#9E00FF', '#0000FF'], borderColor: 'hover:border-[#9E00FF]/50', textColor: 'text-[#9E00FF]' },
    { name: 'Photoshop', category: 'creative', icon: <Palette size={18} />, color: ['#31A8FF', '#001E36'], borderColor: 'hover:border-[#31A8FF]/50', textColor: 'text-[#31A8FF]' },
    { name: 'Lightroom', category: 'creative', icon: <Palette size={18} />, color: ['#31A8FF', '#8FF2FF'], borderColor: 'hover:border-[#31A8FF]/50', textColor: 'text-[#8FF2FF]' },
    { name: 'CapCut', category: 'creative', icon: <Palette size={18} />, color: ['#000000', '#FFFFFF'], borderColor: 'hover:border-white/50', textColor: 'text-white' },
    { name: 'OBS Studio', category: 'creative', icon: <Laptop size={18} />, color: ['#302e3b', '#4a465c'], borderColor: 'hover:border-indigo-400/50', textColor: 'text-indigo-400' },
    { name: 'Git', category: 'tech', icon: <GitBranch size={18} />, color: ['#F1502F', '#FD9765'], borderColor: 'hover:border-[#F1502F]/50', textColor: 'text-[#F1502F]' },
    { name: 'GitHub', category: 'tech', icon: <GitBranch size={18} />, color: ['#24292e', '#4078c0'], borderColor: 'hover:border-white/40', textColor: 'text-white' },
    { name: 'VS Code', category: 'tech', icon: <Code2 size={18} />, color: ['#007ACC', '#1F9CF0'], borderColor: 'hover:border-[#007ACC]/50', textColor: 'text-[#007ACC]' },
    { name: 'Dynamics365 CRM', category: 'analytics', icon: <Database size={18} />, color: ['#00205B', '#00A1E0'], borderColor: 'hover:border-[#00A1E0]/50', textColor: 'text-[#00A1E0]' },
    { name: 'Notion', category: 'analytics', icon: <Laptop size={18} />, color: ['#000000', '#FFFFFF'], borderColor: 'hover:border-gray-200/50', textColor: 'text-white' },
    { name: 'Trello', category: 'analytics', icon: <Laptop size={18} />, color: ['#0079BF', '#5198D9'], borderColor: 'hover:border-[#0079BF]/50', textColor: 'text-[#0079BF]' },
    { name: 'Excel', category: 'analytics', icon: <FileSpreadsheet size={18} />, color: ['#107C41', '#1F9A55'], borderColor: 'hover:border-[#107C41]/50', textColor: 'text-[#107C41]' }
  ]

  return (
    <section className="py-24 bg-[#0a0b10] relative overflow-hidden" id="mini-references">
      {/* Background radial lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-gradient-radial from-indigo-500/5 via-purple-500/0 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Skills Toolkit
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            Interactive Skills Dashboard
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A cohesive view of my technical and creative capabilities. Interact with the bento items below to see my skills in action.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          {/* Card 1: Tech Code Console (Col Span 2) */}
          <div className="lg:col-span-2 bg-[#111219]/60 border border-white/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md flex flex-col justify-between group hover:border-indigo-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            {/* Window header */}
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
              <div className="flex items-center gap-2">
                <Terminal className="text-indigo-400 w-4 h-4" />
                <span className="font-mono text-xs text-gray-400">developer_console.sh</span>
              </div>
              <div className="flex gap-1.5 font-mono">
                <button
                  onClick={() => setActiveTab('ts')}
                  className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors cursor-pointer ${activeTab === 'ts' ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30' : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                  skills.ts
                </button>
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors cursor-pointer ${activeTab === 'sql' ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                  analytics.sql
                </button>
                <button
                  onClick={() => setActiveTab('css')}
                  className={`font-mono text-[11px] px-2.5 py-1 rounded transition-colors cursor-pointer ${activeTab === 'css' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' : 'text-gray-500 hover:text-gray-300'
                    }`}
                >
                  styling.css
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="flex-1 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto min-h-[220px] bg-[#0c0d13] p-4 rounded-lg border border-white/5">
              {activeTab === 'ts' && (
                <div className="text-gray-400">
                  <span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span className="text-emerald-400">"Roel-Junior Viernes"</span>,<br />
                  &nbsp;&nbsp;languages: [<span className="text-emerald-400">"Python"</span>, <span className="text-emerald-400">"Java"</span>, <span className="text-emerald-400">"JavaScript"</span>, <span className="text-emerald-400">"TypeScript"</span>, <span className="text-emerald-400">"SQL"</span>, <span className="text-emerald-400">"PowerShell"</span>],<br />
                  &nbsp;&nbsp;frameworks: [<span className="text-emerald-400">"React.js"</span>, <span className="text-emerald-400">"Vite"</span>, <span className="text-emerald-400">"TailwindCSS"</span>, <span className="text-emerald-400">"Node.js"</span>],<br />
                  &nbsp;&nbsp;specialties: [<span className="text-emerald-400">"Computer Vision"</span>, <span className="text-emerald-400">"Automations"</span>, <span className="text-emerald-400">"UX/HCI Design"</span>],<br />
                  &nbsp;&nbsp;status: <span className="text-emerald-400">"Ready to Build"</span><br />
                  &#125;
                </div>
              )}
              {activeTab === 'sql' && (
                <div className="text-gray-400">
                  <span className="text-purple-400">SELECT</span> skill, efficiency_rating<br />
                  <span className="text-purple-400">FROM</span> technical_toolkit<br />
                  <span className="text-purple-400">WHERE</span> classification = <span className="text-emerald-400">'Data & Automation'</span><br />
                  <span className="text-purple-400">ORDER BY</span> productivity_gain <span className="text-purple-400">DESC</span>;<br /><br />
                  <span className="text-gray-500">-- Output:</span><br />
                  <span className="text-gray-500">&gt;&gt; Python Scripting &amp; Excel Automations: 10% Administrative reduction</span><br />
                  <span className="text-gray-500">&gt;&gt; SQL Database Querying &amp; Dynamics365: CRM Workflow efficiency</span>
                </div>
              )}
              {activeTab === 'css' && (
                <div className="text-gray-400">
                  <span className="text-blue-400">.creative-developer</span> &#123;<br />
                  &nbsp;&nbsp;<span className="text-purple-400">skills-intersection</span>: <span className="text-blue-300">technology</span> <span className="text-purple-300">digital-storytelling</span>;<br />
                  &nbsp;&nbsp;<span className="text-purple-400">visual-aesthetic</span>: <span className="text-emerald-400">premium-glassmorphism</span>;<br />
                  &nbsp;&nbsp;<span className="text-purple-400">interaction</span>: <span className="text-amber-400">hover-3d-confetti</span>;<br />
                  &nbsp;&nbsp;<span className="text-purple-400">animation-speed</span>: <span className="text-orange-400">smooth-350ms</span>;<br />
                  &#125;
                </div>
              )}
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gray-500 font-mono">
              <span>Stack: Python, Java, JS, TS, HTML/CSS, SQL, PowerShell</span>
              <span className="flex items-center gap-1.5 text-indigo-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Active Sandbox
              </span>
            </div>
          </div>

          {/* Card 2: GitHub Status and Commits (Col Span 1, Row Span 2) */}
          <div className="bg-[#111219]/60 border border-white/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md flex flex-col justify-between group hover:border-indigo-500/20 transition-all duration-300 lg:row-span-2">
            <div className="absolute top-0 right-0 w-36 h-36 bg-indigo-500/5 rounded-full blur-2xl pointer-events-none" />

            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Github className="text-gray-400 group-hover:text-white transition-colors w-4 h-4 animate-pulse" />
                  <span className="font-mono text-xs text-gray-400">git_status.sh</span>
                </div>
                {ghStats && (
                  <a
                    href={ghStats.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-indigo-400 transition-colors"
                    title="View Profile"
                  >
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>

              {/* Profile Card */}
              {loading ? (
                <div className="h-32 flex items-center justify-center">
                  <Loader2 className="w-6 h-6 text-indigo-400 animate-spin" />
                </div>
              ) : ghStats ? (
                <div className="flex items-center gap-3.5 mb-6 bg-[#0c0d13] p-3.5 rounded-xl border border-white/5">
                  <img
                    src={ghStats.avatar_url}
                    alt={ghStats.name}
                    className="w-12 h-12 rounded-full border border-indigo-500/30 group-hover:border-indigo-400 transition-colors shadow-lg"
                  />
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white truncate leading-tight">
                      {ghStats.name}
                    </h4>
                    <p className="font-mono text-[10px] text-indigo-400">
                      @{ghStats.login}
                    </p>
                    <div className="flex gap-4 mt-2 font-mono text-[10px] text-gray-500">
                      <span>
                        <strong className="text-gray-300">{ghStats.public_repos}</strong> repos
                      </span>
                      <span>
                        <strong className="text-gray-300">{ghStats.followers}</strong> followers
                      </span>
                    </div>
                  </div>
                </div>
              ) : null}

              {/* Commits Section */}
              <div className="space-y-3">
                <span className="font-mono text-[10px] tracking-wider text-gray-500 uppercase block mb-1">
                  ./recent-activity
                </span>

                {loading ? (
                  <div className="space-y-4 py-2">
                    {[1, 2, 3].map((n) => (
                      <div key={n} className="flex gap-3 items-start animate-pulse">
                        <div className="w-2.5 h-2.5 rounded-full bg-white/5 mt-1 shrink-0" />
                        <div className="flex-1 space-y-1.5">
                          <div className="h-2 bg-white/5 rounded w-3/4" />
                          <div className="h-1.5 bg-white/5 rounded w-1/2" />
                        </div>
                      </div>
                    ))}
                  </div>
                ) : commits.length > 0 ? (
                  <div className="relative pl-3 border-l border-white/5 space-y-4">
                    {commits.map((commit, index) => (
                      <div key={index} className="relative group/commit flex gap-3 items-start">
                        {/* Timeline Bullet */}
                        <div className="absolute -left-[17px] top-1.5 w-2 h-2 rounded-full bg-[#111219] border border-indigo-500/50 group-hover/commit:border-emerald-400 transition-colors flex items-center justify-center">
                          <div className="w-1 h-1 rounded-full bg-indigo-400 group-hover/commit:bg-emerald-400" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <a
                            href={commit.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[11px] font-medium text-gray-300 hover:text-indigo-400 group-hover/commit:text-indigo-300 leading-snug break-words transition-colors inline-block"
                          >
                            <span className="text-[10px] font-mono text-emerald-400 mr-1.5">
                              [{commit.repo}]
                            </span>
                            {commit.message}
                          </a>
                          <div className="flex items-center gap-2 mt-0.5 font-mono text-[9px] text-gray-500">
                            <span className="flex items-center gap-0.5 text-gray-600">
                              <GitCommit size={8} />
                              {commit.sha}
                            </span>
                            <span>•</span>
                            <span>{commit.date}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs font-mono text-gray-600 text-center py-4">No recent push events</p>
                )}
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-white/5 text-[9px] text-gray-600 flex justify-between font-mono">
              <span>Status: Live Webhook</span>
              <span>Updated: Realtime</span>
            </div>
          </div>


          {/* Card 4: Leadership & Influence (Col Span 2) */}
          <div className="lg:col-span-2 bg-[#111219]/60 border border-white/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md flex flex-col justify-between group hover:border-indigo-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Users2 className="text-indigo-400 w-4 h-4" />
                  <span className="font-mono text-xs text-gray-400">leadership_roles.log</span>
                </div>
              </div>

              {/* Grid representation of leadership strengths */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#0c0d13] p-4 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                    <h4 className="text-xs font-semibold text-white">CS Technology Society President</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Directed 5 student executive leads to organise academic workshops, industry networking, and a 300+ attendee faculty gala.
                  </p>
                </div>
                <div className="bg-[#0c0d13] p-4 rounded-lg border border-white/5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <h4 className="text-xs font-semibold text-white">UK Senior Student Recruitment Ambassador</h4>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-relaxed">
                    Managed telephone and CRM databases while mentoring new ambassadors. Led critical Clearing campaigns.
                  </p>
                </div>
              </div>
            </div>

            {/* Badging list */}
            <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap gap-2">
              {['Team Management', 'Public Speaking', 'Event Operations', 'Academic Representation', 'Mentorship'].map((badge) => (
                <span
                  key={badge}
                  className="font-mono text-[9px] px-2 py-0.5 rounded bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Card 5: Toolbox Badge Cluster (Col Span 3) */}
          <div className="lg:col-span-3 bg-[#111219]/60 border border-white/5 rounded-2xl p-6 relative overflow-hidden backdrop-blur-md flex flex-col justify-between group hover:border-indigo-500/20 transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-amber-400 w-4 h-4" />
                  <span className="font-mono text-xs text-gray-400">interactive_toolbox (click badges for confetti!)</span>
                </div>
              </div>

              {/* Cluster items */}
              <div className="flex flex-wrap gap-3.5 justify-center py-2 max-w-5xl mx-auto">
                {tools.map((tool) => (
                  <button
                    key={tool.name}
                    onClick={() => triggerConfetti(tool.color)}
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0c0d13] border border-white/5 
                      cursor-pointer select-none transition-all duration-300
                      hover:scale-105 active:scale-95 text-gray-300 hover:text-white
                      ${tool.borderColor}
                    `}
                  >
                    <span className={`${tool.textColor} transition-transform group-hover:scale-110`}>
                      {tool.icon}
                    </span>
                    <span className="font-mono text-xs font-semibold">{tool.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-center gap-4 text-[10px] text-gray-500 font-mono">
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#EA77FF]" /> Creative Production
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#007ACC]" /> Technical Dev
              </span>
              <span className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#107C41]" /> Analytics & CRM
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
