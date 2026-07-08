import { useState } from 'react'
import { FileText, X, ExternalLink, Github, Linkedin, Instagram, Mail } from 'lucide-react'

export default function Hero() {
  const [showModal, setShowModal] = useState(false)

  const cvs = [
    { title: 'Tech CV', path: '/assets/CV/Roel_CV_vT.pdf' },
    { title: 'Social Media CV', path: '/assets/CV/Roel_CV_SM1.pdf' },
    { title: 'General CV', path: '/assets/CV/Roel_CV_RT.pdf' }
  ]

  return (
    <header className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-indigo-950/10 via-[#0a0b10] to-[#0a0b10]" id="home_area">
      {/* Ambient Light Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 leading-tight">
              <span className="typing-header">Hi, I'm Roel</span>
            </h1>

            {/* Social Links Row */}
            <div className="flex items-center gap-3 mb-6">
              {[
                { icon: <Github className="w-5 h-5" />, href: 'https://github.com/rjviernes620', color: 'hover:text-white hover:scale-110 hover:border-white/20', label: 'GitHub' },
                { icon: <Linkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/in/roel-junior-alejo-viernes-bab8a7253/', color: 'hover:text-[#0077B5] hover:scale-110 hover:border-[#0077B5]/30', label: 'LinkedIn' },
                { icon: <Instagram className="w-5 h-5" />, href: 'https://www.instagram.com/rj.viernes04', color: 'hover:text-[#E1306C] hover:scale-110 hover:border-[#E1306C]/30', label: 'Instagram' },
                { icon: <Mail className="w-5 h-5" />, href: 'mailto:roel@rjviernes.tech', color: 'hover:text-indigo-400 hover:scale-110 hover:border-indigo-500/30', label: 'Email' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={item.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className={`p-2 rounded-full bg-white/[0.03] border border-white/5 text-gray-400 transition-all duration-300 ${item.color}`}
                  title={item.label}
                >
                  {item.icon}
                </a>
              ))}
            </div>
            <p className="text-lg md:text-xl font-medium text-gray-300 mb-6 font-mono border-b border-indigo-500/20 pb-3">
              Web Dev | UGC Content Creator | Full Stack Dev
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              I’m a Computer Science graduate from the University of Greenwich who builds at the intersection of software engineering and digital storytelling. Combining structured coding with creative content production, I turn complex concepts into clean code and engaging media.
              <br /><br />
              Whether developing full-stack experiences, analyzing marketing data, or building UGC campaigns, I focus on crafting premium digital experiences. I am currently looking for roles in Software Development, Data Analytics, or Social Media Marketing, feel free to get in touch!
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 px-6 py-3 font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-indigo-600/20 hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <FileText className="w-5 h-5" />
              See my CV Here
            </button>
          </div>

          {/* Profile Picture */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative transform transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/assets/img/team/Untitled.png"
                alt="Roel"
                className="w-72 h-96 lg:w-80 lg:h-[420px] object-cover rounded-xl shadow-2xl"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>

      {/* CV Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            onClick={() => setShowModal(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Card */}
          <div className="relative w-full max-w-md bg-[#111219] border border-white/10 rounded-2xl p-6 shadow-2xl z-10 transform scale-100 transition-transform">
            <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-indigo-400" />
                Select a CV Version
              </h3>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 rounded-full text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Choose the version of my CV that best fits the role you are looking to fill.
            </p>

            <div className="flex flex-col gap-3">
              {cvs.map((cv) => (
                <a
                  key={cv.path}
                  href={cv.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-white/15 text-white font-medium transition-all group"
                >
                  <span>{cv.title}</span>
                  <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowModal(false)}
                className="px-5 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
