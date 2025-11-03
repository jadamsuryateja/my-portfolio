import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import GradientBlinds from './GradientBlinds';

interface EntryPageProps {
  onEnter: () => void;
}

function EntryPage({ onEnter }: EntryPageProps) {
  const [hovered, setHovered] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Create smooth spring animation for blur movement
  const blurX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const blurY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // Update mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const rect = document.body.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      // Update blur position
      mouseX.set((x * 2 - 1) * 20);
      mouseY.set((y * 2 - 1) * 20);

      // Create canvas-specific coordinates for GradientBlinds
      const blindsElement = document.querySelector('.gradientBlinds canvas') as HTMLCanvasElement;
      if (blindsElement) {
        const blindsRect = blindsElement.getBoundingClientRect();
        const blindsEvent = new MouseEvent('pointermove', {
          clientX: e.clientX,
          clientY: e.clientY,
          bubbles: true,
          cancelable: true
        });
        blindsElement.dispatchEvent(blindsEvent);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Disable scrolling when component mounts
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black overflow-hidden select-none" style={{ touchAction: 'none' }}>
      {/* Background Animation - Base layer */}
      <div className="fixed inset-0 gradientBlinds" style={{ zIndex: 0 }}>
        <GradientBlinds
          gradientColors={['#ED2202', '#FF6929']}
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

      {/* Magnetic Blur Overlay - Make it pointer-events-none */}
      <motion.div 
        className="fixed inset-0 bg-black/30 backdrop-blur-md pointer-events-none" 
        style={{ 
          zIndex: 1,
          x: blurX,
          y: blurY,
        }} 
      />

      {/* Content Container - Updated with select-none */}
      <div 
        className="fixed inset-0 flex flex-col items-center justify-center px-4 gap-6 select-none" 
        style={{ zIndex: 2 }}
        onClick={onEnter}
      >
        {/* Title */}
        <motion.div
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider whitespace-normal text-center p-4 cursor-pointer"
          style={{
            background: 'linear-gradient(to right, #ED2202, #FFED29)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textShadow: '0 0 30px rgba(237,34,2,0.3)',
            maxWidth: '90vw'
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: 'easeOut'
          }}
        >
          JADAM SURYA TEJA
        </motion.div>

        {/* Caption Text */}
        <motion.p
          className="text-[#FFED29] text-sm sm:text-base md:text-lg font-medium tracking-wider cursor-pointer opacity-75 hover:opacity-100 transition-opacity"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.75, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: 'easeOut'
          }}
        >
          CLICK ANYWHERE TO ENTER MY PORTFOLIO
        </motion.p>
      </div>
    </div>
  );
}

export default EntryPage;
