import React from 'react'
import confetti from 'canvas-confetti'

interface Skill {
  img: string
  glowFilter: string // Tailwind hover filter classes
}

export default function Skills() {
  const skills: Skill[] = [
    { img: 'Untitled-1.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(99,102,241,0.7)]' },     // indigo
    { img: 'Untitled-2.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(16,185,129,0.7)]' },    // emerald
    { img: 'Untitled-3.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(168,85,247,0.7)]' },    // purple
    { img: 'Untitled-4.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(236,72,153,0.7)]' },    // pink
    { img: 'Untitled-5.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(14,165,233,0.7)]' },    // sky
    { img: 'Untitled-6.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(245,158,11,0.7)]' },     // amber
    { img: 'Untitled-7.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(244,63,94,0.7)]' },     // rose
    { img: 'Untitled-8.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(234,179,8,0.7)]' },     // yellow
    { img: 'Untitled-9.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.7)]' },    // violet
    { img: 'Untitled-10.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(20,184,166,0.7)]' },    // teal
    { img: 'Untitled-11.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(132,204,22,0.7)]' },    // lime
    { img: 'Untitled-12.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(6,182,212,0.7)]' },     // cyan
    { img: 'Untitled-13.png', glowFilter: 'hover:drop-shadow-[0_0_18px_rgba(239,68,68,0.7)]' }      // red
  ]

  const handleBrickClick = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (rect.left + rect.width / 2) / window.innerWidth
    const y = (rect.top + rect.height / 2) / window.innerHeight
    
    const colorsList = [
      ['#6366f1', '#4f46e5'],
      ['#10b981', '#059669'],
      ['#a855f7', '#7c3aed'],
      ['#ec4899', '#db2777'],
      ['#0ea5e9', '#0284c7'],
      ['#f59e0b', '#d97706'],
      ['#f43f5e', '#e11d48'],
      ['#eab308', '#ca8a04'],
      ['#8b5cf6', '#6d28d9'],
      ['#14b8a6', '#0d9488'],
      ['#84cc16', '#65a30d'],
      ['#06b6d4', '#0891b2'],
      ['#ef4444', '#dc2626']
    ]

    confetti({
      origin: { x, y },
      particleCount: 30,
      spread: 60,
      colors: colorsList[index % colorsList.length]
    })
  }

  return (
    <section className="py-24 bg-[#0a0b10] relative overflow-hidden" id="mini-references">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-full bg-gradient-radial from-indigo-500/5 to-transparent pointer-events-none blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Skills & Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            What I can use and work with
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of the languages, frameworks, and technologies I have worked with. Click on a logo to pop custom-colored interactive confetti!
          </p>
        </div>

        {/* Boundary-free Interactive Masonry/Grid */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-14 max-w-5xl mx-auto">
          {skills.map((skill, i) => (
            <div
              key={skill.img}
              onClick={(e) => handleBrickClick(e, i)}
              className="relative flex items-center justify-center cursor-pointer transition-all duration-350 transform hover:-translate-y-2 hover:scale-110 active:scale-95 select-none p-3 group"
            >
              <img
                src={`/assets/img/skills/${skill.img}`}
                alt={`Skill ${i + 1}`}
                className={`
                  h-14 sm:h-16 md:h-20 w-auto object-contain
                  filter grayscale brightness-[0.7] opacity-50
                  group-hover:grayscale-0 group-hover:brightness-100 group-hover:opacity-100
                  transition-all duration-350 ease-out
                  ${skill.glowFilter}
                `}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
