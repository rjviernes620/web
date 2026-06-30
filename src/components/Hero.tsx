import { useState } from 'react'
import { FileText, X, ExternalLink } from 'lucide-react'

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
            <span className="px-3 py-1 text-xs font-mono font-semibold tracking-wider text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-4">
              WELCOME TO MY PORTFOLIO
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              <span className="typing-header">Hi, I'm Roel</span>
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-300 mb-6 font-mono border-b border-indigo-500/20 pb-3">
              Computer Science BSc (Hons) Graduate | UGC Content Creator
            </p>
            <p className="text-base md:text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
              I recently graduated from the University of Greenwich with a 2:1 in Computer Science. 
              I also was previously a Faculty Social Media Assistant and a Student Ambassador. I have a passion for coding and creating content, which is what I have been doing for the past few years.
              <br /><br />
              Now I'm looking for a role either in software development, Data Analytics, Content creation, Social Media or a role that combines both of these things. I have a wide range of skills and experience that I can bring to any role, and I'm always looking to learn new things and take on new challenges.
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
