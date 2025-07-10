import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  useEffect(() => {
    // Check if device is mobile/touch
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    // Only add mouse events on desktop
    if (!isMobile) {
      document.addEventListener('mousemove', updatePosition);
      
      // Add hover effects to interactive elements
      const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (!isMobile) {
        document.removeEventListener('mousemove', updatePosition);
        const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      }
    };
  }, [isMobile]);

  // Don't render cursor on mobile devices
  if (isMobile) {
    return null;
  }

  return (
    <>
      <div
        className="fixed pointer-events-none z-50 mix-blend-difference"
        style={{
          left: position.x - 10,
          top: position.y - 10,
          width: 20,
          height: 20,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
          transform: `scale(${isHovering ? 2 : 1})`,
          transition: 'transform 0.2s ease',
          boxShadow: `0 0 20px ${colors.primary}`,
        }}
      />
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x - 2,
          top: position.y - 2,
          width: 4,
          height: 4,
          borderRadius: '50%',
          backgroundColor: colors.primary,
          boxShadow: `0 0 10px ${colors.primary}`,
        }}
      />
    </>
  );
};

export default CustomCursor;