import { useEffect } from 'react'

export default function Videos() {
  useEffect(() => {
    // Inject Instagram embed script
    const scriptId = 'instagram-embed-script'
    let script = document.getElementById(scriptId) as HTMLScriptElement
    
    if (!script) {
      script = document.createElement('script')
      script.id = scriptId
      script.src = 'https://www.instagram.com/embed.js'
      script.async = true
      script.defer = true
      document.body.appendChild(script)
    } else {
      // If script is already there, trigger processing
      // @ts-ignore
      if (window.instgrm) {
        // @ts-ignore
        window.instgrm.Embeds.process()
      }
    }
  }, [])

  const instagramFes = [
    'https://www.instagram.com/reel/DCEemcqoPJo/',
    'https://www.instagram.com/reel/DLHseObSzgC/',
    'https://www.instagram.com/reel/DTAeynnjbxU',
    'https://www.instagram.com/reel/DEFVzEJIyJS',
    'https://www.instagram.com/reel/DDzesm6oM_7',
    'https://www.instagram.com/reel/C-Zvr77AjWB',
  ]

  const instagramSw = [
    'https://www.instagram.com/reel/DUUYQeKCAlL',
    'https://www.instagram.com/reel/DVqNf_5DIHy/?igsh=ZmUwZnI2cGg3eHEw',
  ]

  const youtubeVideos = [
    'https://www.youtube.com/embed/51TtSJR6Yog?si=RzGjly9Uiv-T4gwf',
    'https://www.youtube.com/embed/0nG3yea1OmU?si=N5aseqFCwhhm3KY3'
  ]

  return (
    <section className="py-20 bg-[#0a0b10]" id="videos">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs font-mono font-bold tracking-wider text-emerald-400 uppercase bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            Social Media & Production
          </span>
          <h2 className="text-3xl md:text-4xl font-consolas font-bold text-white mt-4 mb-4">
            Some of My Video Content
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of the videos that I have created for my personal channel and for the University of Greenwich.
          </p>
        </div>

        {/* Section 1: Greenwich */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
            <h3 className="text-lg font-bold font-mono text-gray-200">
              Instagram Reels for @uniofgreenwichfes
            </h3>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-indigo-500/20 scroll-smooth snap-x snap-mandatory">
            {instagramFes.map((url, i) => (
              <div 
                key={url} 
                className="flex-shrink-0 w-[320px] sm:w-[350px] bg-[#111219]/40 border border-white/5 rounded-2xl p-3 snap-start hover:border-indigo-500/20 transition-colors"
              >
                <div className="relative rounded-xl overflow-hidden h-[540px] bg-black/20 flex items-center justify-center instagram-media-wrapper">
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink={url} 
                    data-instgrm-version="14" 
                    style={{ background: '#000', margin: 0, width: '100%', height: '100%' }}
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer"></a>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* YouTube Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {youtubeVideos.map((src, i) => (
            <div key={src} className="glass-card p-4 rounded-2xl overflow-hidden shadow-2xl hover:scale-[1.01] transition-transform duration-300">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40 border border-white/5">
                <iframe
                  width="100%"
                  height="100%"
                  className="absolute inset-0"
                  src={src}
                  title={`YouTube video player ${i + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Section 2: Personal */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <span className="h-2 w-2 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
            <h3 className="text-lg font-bold font-mono text-gray-200">
              Instagram Reels for @sw15sy
            </h3>
          </div>

          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-indigo-500/20 scroll-smooth snap-x snap-mandatory">
            {instagramSw.map((url) => (
              <div 
                key={url} 
                className="flex-shrink-0 w-[320px] sm:w-[350px] bg-[#111219]/40 border border-white/5 rounded-2xl p-3 snap-start hover:border-indigo-500/20 transition-colors"
              >
                <div className="relative rounded-xl overflow-hidden h-[540px] bg-black/20 flex items-center justify-center instagram-media-wrapper">
                  <blockquote 
                    className="instagram-media" 
                    data-instgrm-permalink={url} 
                    data-instgrm-version="14" 
                    style={{ background: '#000', margin: 0, width: '100%', height: '100%' }}
                  >
                    <a href={url} target="_blank" rel="noopener noreferrer"></a>
                  </blockquote>
                </div>
              </div>
            ))}
            
            {/* Coming Soon Card */}
            <div className="flex-shrink-0 w-[320px] sm:w-[350px] h-[566px] bg-[#111219]/20 border border-dashed border-white/10 rounded-2xl p-6 flex flex-col items-center justify-center text-center snap-start">
              <span className="coming-soon-badge mb-3">More coming soon</span>
              <p className="text-sm text-gray-500 font-mono">Stay tuned for new content updates!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
