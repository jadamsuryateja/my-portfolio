import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [isHovering, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.matchMedia('(max-width: 768px)').matches;
      setIsMobile(isTouchDevice || isSmallScreen);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener('resize', checkMobile);

    // Only add mouse events if not mobile
    if (!isMobile) {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };

      const handleMouseDown = () => setClicked(true);
      const handleMouseUp = () => setClicked(false);

      const handleMouseEnter = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('button, a, input, textarea')) {
          setIsHovered(true);
        }
      };

      const handleMouseLeave = () => {
        setIsHovered(false);
      };

      window.addEventListener('mousemove', updatePosition);
      window.addEventListener('mousedown', handleMouseDown);
      window.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mouseenter', handleMouseEnter, true);
      document.addEventListener('mouseleave', handleMouseLeave, true);

      return () => {
        window.removeEventListener('mousemove', updatePosition);
        window.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mouseenter', handleMouseEnter, true);
        document.removeEventListener('mouseleave', handleMouseLeave, true);
      };
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) return null;

  return (
    <>
      <div
        className={`cursor-outer ${clicked ? 'cursor-click' : ''} ${isHovering ? 'cursor-hover' : ''
          }`}
        style={{
          transform: `translate(${position.x - 20}px, ${position.y - 20}px)`,
        }}
      />
      <div
        className={`cursor-middle ${clicked ? 'cursor-click' : ''} ${isHovering ? 'cursor-hover' : ''
          }`}
        style={{
          transform: `translate(${position.x - 15}px, ${position.y - 15}px)`,
        }}
      />
      <div
        className={`cursor-inner ${clicked ? 'cursor-click' : ''} ${isHovering ? 'cursor-hover' : ''
          }`}
        style={{
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
        }}
      />
    </>
  );
}

export default CustomCursor;