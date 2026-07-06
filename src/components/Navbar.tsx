import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home_area')
  const [scrolled, setScrolled] = useState(false)

  const navLinks = [
    { label: './About Me', href: '#home_area' },
    { label: './Projects', href: '#projects' },
    { label: './Roles', href: '#jobs' },
    { label: './Case Studies', href: '#case-studies' },
    { label: './Recommendations', href: '#recommendations' },
    { label: './Videos', href: '#videos' },
    { label: './Skill Toolkit', href: '#mini-references' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Highlight active section
      const sections = navLinks.map(link => link.href.substring(1))
      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? 'bg-[#0a0b10]/80 backdrop-blur-md py-2 md:py-2.5 border-b border-white/5 shadow-lg'
        : 'bg-transparent py-4 md:py-5'
      }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-12 flex items-center justify-between">
        <a href="#home_area" className="text-base sm:text-lg md:text-sm lg:text-lg xl:text-xl font-bold tracking-tight text-white flex items-center gap-1 group">
          <span className="text-indigo-400 group-hover:text-indigo-300 transition-colors">Roel-Junior Alejo Viernes</span>
          <span className="text-emerald-400 font-mono text-sm group-hover:text-emerald-300 transition-colors">_</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center md:gap-3 lg:gap-5 xl:gap-8">
          {navLinks.map((link) => {
            const id = link.href.substring(1)
            const isActive = activeSection === id
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-xs lg:text-sm font-mono transition-colors relative py-1 ${isActive ? 'text-indigo-400 font-semibold' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-full shadow-[0_0_8px_#6366f1]" />
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact_info"
            className="md:px-3 md:py-1.5 md:text-xs lg:px-5 lg:py-2 lg:text-sm font-consolas rounded-full bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0a0b10]/95 backdrop-blur-lg border-b border-white/5 shadow-2xl py-6 px-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const id = link.href.substring(1)
              const isActive = activeSection === id
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block text-base font-mono py-1 border-l-2 pl-3 ${isActive
                        ? 'text-indigo-400 border-indigo-500 font-semibold bg-indigo-500/5'
                        : 'text-gray-400 border-transparent hover:text-white'
                      }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
            <li className="pt-2">
              <a
                href="#contact_info"
                onClick={() => setIsOpen(false)}
                className="block text-center py-2.5 rounded-lg bg-indigo-600 text-white font-medium shadow-md shadow-indigo-600/10"
              >
                Contact Me
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
