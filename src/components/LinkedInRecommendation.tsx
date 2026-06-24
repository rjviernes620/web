import { useState } from 'react'
import { motion, AnimatePresence } from 'motion'
import { Quote, Linkedin, ChevronDown, ChevronUp } from 'lucide-react'

interface LinkedInRecommendationProps {
  recommenderName: string
  recommenderTitle: string
  recommenderCompany: string
  recommenderImage: string
  relationship: string
  recommendationText: string
  date: string
}

export function LinkedInRecommendation({
  recommenderName,
  recommenderTitle,
  recommenderCompany,
  recommenderImage,
  relationship,
  recommendationText,
  date,
}: LinkedInRecommendationProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  // Split text into paragraphs
  const paragraphs = recommendationText.split('\n\n')
  const previewText = paragraphs[0]
  const hasMoreContent = paragraphs.length > 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-[#111219]/70 backdrop-blur-md rounded-2xl border border-white/5 hover:border-indigo-500/20 p-6 md:p-8 flex flex-col justify-between shadow-xl hover:shadow-indigo-500/5 transition-all duration-300"
    >
      {/* LinkedIn Blue Glow Header Strip */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B5] to-indigo-500 rounded-t-2xl transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-40'}`} />

      <div>
        {/* Header Section */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative flex-shrink-0">
            <img
              src={recommenderImage}
              alt={recommenderName}
              className="w-16 h-16 rounded-full object-cover border-2 border-white/10"
            />
            <div className="absolute -bottom-1 -right-1 bg-[#0077B5] rounded-full p-1 border border-[#0a0b10]">
              <Linkedin className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white truncate mb-0.5">{recommenderName}</h3>
            <p className="text-xs text-gray-300 font-medium truncate mb-0.5">{recommenderTitle}</p>
            <p className="text-xs text-gray-400 truncate mb-1.5">{recommenderCompany}</p>
            <span className="text-[10px] text-gray-500 italic block font-mono bg-white/5 w-fit px-2 py-0.5 rounded-full">
              {relationship}
            </span>
          </div>

          <Quote className="w-8 h-8 text-indigo-500/20 flex-shrink-0 hidden sm:block" />
        </div>

        {/* Text Content */}
        <div className="text-gray-300 text-sm leading-relaxed mb-6 font-sans">
          <AnimatePresence initial={false}>
            {!isExpanded ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="line-clamp-4"
              >
                {previewText}
              </motion.p>
            ) : (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex flex-col gap-3"
              >
                {paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Footer Expand Button & Date */}
      <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
        <span className="text-[10px] text-gray-500 font-mono">{date}</span>
        
        {hasMoreContent && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-1 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors focus:outline-none"
          >
            {isExpanded ? (
              <>
                Show Less <ChevronUp className="w-3 h-3" />
              </>
            ) : (
              <>
                Read More <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>
    </motion.div>
  )
}
