import { useState, useEffect } from 'react'
import {
  User,
  FolderGit2,
  Briefcase,
  FileCode,
  MessageSquareQuote,
  Video,
  Wrench,
  Mail
} from 'lucide-react'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home_area')

  const navLinks = [
    { label: './About Me', href: '#home_area', icon: User },
    { label: './Projects', href: '#projects', icon: FolderGit2 },
    { label: './Roles', href: '#jobs', icon: Briefcase },
    { label: './Case Studies', href: '#case-studies', icon: FileCode },
    { label: './Recommendations', href: '#recommendations', icon: MessageSquareQuote },
    { label: './Videos', href: '#videos', icon: Video },
    { label: './Skill Toolkit', href: '#mini-references', icon: Wrench },
    { label: 'Contact', href: '#contact_info', icon: Mail },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3

      // Find the section that is currently visible in the viewport
      for (const link of navLinks) {
        const id = link.href.substring(1)
        const el = document.getElementById(id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Trigger once on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      {/* Name/Branding Badge - Top Left (Desktop Only) */}
      <div className="fixed top-6 left-6 z-50 hidden md:flex items-center gap-2 bg-[#0a0b10]/40 hover:bg-[#0a0b10]/60 border border-white/5 hover:border-white/10 backdrop-blur-md rounded-full px-4 py-2.5 text-xs font-bold tracking-tight text-white shadow-lg transition-all duration-300 select-none">
        <span className="text-indigo-400 font-mono">rjviernes.tech</span>
        <span className="text-gray-600 font-mono">|</span>
        <span className="text-gray-300 font-sans tracking-wide">Roel-Junior Alejo Viernes</span>
      </div>

      {/* Floating Vertical Pill Navbar - Left Hand Side (Desktop Only) */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center">
        <div className="bg-[#111219]/60 border border-white/5 hover:border-indigo-500/10 backdrop-blur-md rounded-full py-5 px-2.5 flex flex-col items-center gap-4 shadow-2xl transition-all duration-500">

          {/* Top small spacer/decorator */}
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500/50 mb-1 animate-pulse" />

          {navLinks.map((link) => {
            const id = link.href.substring(1)
            const isActive = activeSection === id
            const Icon = link.icon
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 border ${isActive
                  ? 'bg-indigo-600/20 border-indigo-500/30 text-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.25)]'
                  : 'bg-transparent border-transparent text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
              >
                <Icon size={18} className="transition-transform duration-300 group-hover:scale-110" />

                {/* Sliding Pill Label Tooltip */}
                <span className="absolute left-14 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-indigo-600 border border-indigo-500 text-white text-xs font-mono whitespace-nowrap opacity-0 scale-90 origin-left group-hover:opacity-100 group-hover:scale-100 group-hover:translate-x-1.5 transition-all duration-200 pointer-events-none shadow-lg shadow-indigo-600/20">
                  {link.label}
                </span>
              </a>
            )
          })}

          {/* Bottom small spacer/decorator */}
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500/50 mt-1 animate-pulse" />

        </div>
      </nav>

      {/* Floating Horizontal Bottom Pill Navbar - (Mobile Only) */}
      <nav className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex md:hidden w-[92%] max-w-md bg-[#111219]/80 border border-white/5 backdrop-blur-lg rounded-full py-2 px-3 items-center justify-between shadow-2xl">
        {navLinks.map((link) => {
          const id = link.href.substring(1)
          const isActive = activeSection === id
          const Icon = link.icon
          return (
            <a
              key={link.href}
              href={link.href}
              className={`p-2.5 rounded-full flex items-center justify-center transition-all duration-300 ${isActive
                ? 'bg-indigo-600/20 text-indigo-400 border border-indigo-500/20'
                : 'text-gray-400 hover:text-white'
                }`}
            >
              <Icon size={18} />
            </a>
          )
        })}
      </nav>
    </>
  )
}
