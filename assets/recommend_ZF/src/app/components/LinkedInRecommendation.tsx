import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, Linkedin, ChevronDown, ChevronUp } from 'lucide-react';

interface LinkedInRecommendationProps {
  recommenderName: string;
  recommenderTitle: string;
  recommenderCompany: string;
  recommenderImage: string;
  relationship: string;
  recommendationText: string;
  date: string;
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
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Split text into paragraphs
  const paragraphs = recommendationText.split('\n\n');
  const previewText = paragraphs[0];
  const hasMoreContent = paragraphs.length > 1;

  // Animation variants for staggered children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, rotateX: -15 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ 
        duration: 0.6, 
        ease: [0.34, 1.56, 0.64, 1],
        opacity: { duration: 0.4 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* LinkedIn Brand Strip */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0.98 }}
        transition={{ 
          scaleX: isHovered ? { duration: 0.3 } : { duration: 0.8, delay: 0.3 }
        }}
        className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0077B5] to-[#00A0DC] origin-left"
      />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="p-6 md:p-8"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="flex items-start gap-4 mb-6">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.3,
              type: 'spring',
              stiffness: 200,
              damping: 15
            }}
            whileHover={{ scale: 1.05 }}
            className="relative"
          >
            <img
              src={recommenderImage}
              alt={recommenderName}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-gray-200"
            />
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.8, type: 'spring', stiffness: 300 }}
              className="absolute -bottom-1 -right-1 bg-[#0077B5] rounded-full p-1.5"
            >
              <Linkedin className="w-4 h-4 text-white" />
            </motion.div>
          </motion.div>

          {/* Recommender Info */}
          <div className="flex-1">
            <motion.h3 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl font-semibold text-gray-900 mb-1"
            >
              {recommenderName}
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-sm text-gray-700 mb-0.5"
            >
              {recommenderTitle}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="text-sm text-gray-600 mb-2"
            >
              {recommenderCompany}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="text-xs text-gray-500 italic"
            >
              {relationship}
            </motion.p>
          </div>

          {/* Quote Icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            animate={{ opacity: 0.2, scale: 1, rotate: isHovered ? 15 : 0 }}
            transition={{ 
              opacity: { delay: 0.6, duration: 0.5 },
              scale: { delay: 0.6, duration: 0.5, type: 'spring' },
              rotate: { duration: 0.3 }
            }}
          >
            <Quote className="w-8 h-8 text-[#0077B5]" />
          </motion.div>
        </motion.div>

        {/* Recommendation Text */}
        <motion.div variants={itemVariants} className="relative">
          <div className="prose prose-sm max-w-none">
            <motion.div
              layout
              className="text-gray-700 leading-relaxed space-y-4"
            >
              <p className="text-base">{previewText}</p>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    {paragraphs.slice(1).map((paragraph, index) => (
                      <p key={index} className="text-base">
                        {paragraph}
                      </p>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Gradient Fade Effect (when collapsed) */}
          {!isExpanded && hasMoreContent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none"
            />
          )}
        </motion.div>

        {/* Expand/Collapse Button */}
        {hasMoreContent && (
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 flex items-center gap-2 text-[#0077B5] font-semibold text-sm hover:text-[#005582] transition-colors"
          >
            {isExpanded ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                <span>Read Full Recommendation</span>
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </motion.button>
        )}

        {/* Footer */}
        <motion.div 
          variants={itemVariants}
          className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between"
        >
          <p className="text-xs text-gray-500">
            Recommended on {date}
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://www.linkedin.com/in/rjviernes620/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-[#0077B5] hover:text-[#005582] transition-colors"
          >
            <span>View on LinkedIn</span>
            <Linkedin className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Hover Effect Border */}
      <motion.div
        className="absolute inset-0 border-2 border-[#0077B5] rounded-xl pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 0.1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
}