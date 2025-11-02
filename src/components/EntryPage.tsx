import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GradientBlinds from './GradientBlinds';

interface EntryPageProps {
  onEnter: () => void;
}

function EntryPage({ onEnter }: EntryPageProps) {
  const [hovered, setHovered] = useState(false);
  
  // Prevent scrolling when component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden flex flex-col items-center justify-center">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <GradientBlinds
          gradientColors={['#ED2202', '#FFED29']}
          angle={56}
          noise={0.5}
          blindCount={16}
          blindMinWidth={60}
          spotlightRadius={0.5}
          spotlightSoftness={1}
          spotlightOpacity={1}
          mouseDampening={0.15}
          distortAmount={0}
          shineDirection="right"
          mixBlendMode="lighten"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex flex-col items-center justify-center gap-8 sm:gap-12">
        {/* Title */}
        <motion.div
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider whitespace-normal text-center"
          style={{
            background:
              'linear-gradient(to right, #ED2202 20%, #FFED29 40%, #ED2202 60%, #FFED29 80%)',
            backgroundSize: '200% auto',
            color: 'transparent',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            textShadow: '0 0 30px rgba(237,34,2,0.3)',
            maxWidth: '90vw'
          }}
          animate={{
            backgroundPosition: ['200% center', '-200% center'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          JADAM SURYA TEJA
        </motion.div>

        {/* Button */}
        <motion.button
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          whileTap={{ scale: 0.98 }}
          onClick={onEnter}
          aria-label="Enter portfolio"
          className="relative flex items-center justify-center px-4 xs:px-6 sm:px-8 py-2 sm:py-3 
          rounded-xl sm:rounded-2xl text-xs xs:text-sm sm:text-base
          bg-black/20 backdrop-blur-xl border border-[#ED2202]/20 text-[#FFED29] font-medium 
          tracking-wider overflow-hidden transition-all duration-300 
          hover:bg-black/30 hover:border-[#ED2202]/40 hover:text-[#ED2202] 
          shadow-[0_8px_30px_rgba(237,34,2,0.1)] hover:shadow-[0_12px_40px_rgba(255,237,41,0.2)] 
          focus:outline-none"
        >
          <motion.span
            aria-hidden
            className="absolute top-0 left-0 h-full w-[420px] -skew-x-12 pointer-events-none"
            style={{
              background:
                'linear-gradient(90deg, rgba(237,34,2,0.3), rgba(255,237,41,0.1), rgba(237,34,2,0.05))',
              filter: 'blur(16px)',
              mixBlendMode: 'screen',
              opacity: hovered ? 0.9 : 0.35,
            }}
            animate={
              hovered
                ? { x: ['-220%', '220%'], opacity: [0.5, 0.5] }
                : { x: ['-220%', '220%'], opacity: [0.35, 0.35] }
            }
            transition={
              hovered
                ? { duration: 0.18, repeat: Infinity, ease: 'linear', repeatType: 'loop' }
                : { duration: 2.0, repeat: Infinity, ease: 'linear' }
            }
          />
          <span
            aria-hidden
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background:
                'linear-gradient(180deg, rgba(237,34,2,0.03), rgba(255,237,41,0.01))',
              mixBlendMode: 'overlay',
            }}
          />
          <span className="relative z-10">ENTER PORTFOLIO</span>
        </motion.button>
      </div>
    </div>
  );
}

export default EntryPage;
