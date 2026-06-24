import { useState } from 'react'

export default function Skills() {
  const skillImages = [
    'Untitled-1.png', 'Untitled-2.png', 'Untitled-3.png',
    'Untitled-4.png', 'Untitled-5.png', 'Untitled-6.png',
    'Untitled-7.png', 'Untitled-8.png', 'Untitled-9.png',
    'Untitled-10.png', 'Untitled-11.png', 'Untitled-12.png',
    'Untitled-13.png'
  ]

  // Double the list for infinite looping scroll
  const loopSkills = [...skillImages, ...skillImages, ...skillImages]

  return (
    <section className="py-20 bg-[#0a0b10] overflow-hidden" id="mini-references">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-indigo-400 uppercase bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
            Skills & Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-4">
            What I can use and work with
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of the languages, frameworks, and technologies I have worked with.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative w-full py-6">
          {/* Left Gradient Shadow */}
          <div className="absolute top-0 left-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[#0a0b10] to-transparent z-10 pointer-events-none" />
          
          {/* Right Gradient Shadow */}
          <div className="absolute top-0 right-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[#0a0b10] to-transparent z-10 pointer-events-none" />

          <div className="flex w-max gap-8 animate-[autoScroll_40s_linear_infinite] hover:[animation-play-state:paused]">
            {loopSkills.map((img, i) => (
              <div 
                key={`${img}-${i}`} 
                className="flex items-center justify-center h-28 w-28 md:h-36 md:w-36 bg-white/[0.02] border border-white/5 rounded-2xl p-4 hover:bg-white/[0.08] hover:border-white/20 transition-all transform hover:scale-105 shadow-md hover:shadow-indigo-500/10 cursor-pointer"
              >
                <img
                  src={`/assets/img/skills/${img}`}
                  alt={`Skill icon ${i % 13 + 1}`}
                  className="max-h-full max-w-full object-contain pointer-events-none select-none filter brightness-90 hover:brightness-100 transition-all"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          
          <small className="block text-center text-gray-500 font-mono mt-6">
            Hover to pause the scroll
          </small>
        </div>
      </div>
    </section>
  )
}
