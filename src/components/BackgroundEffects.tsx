import React, { useEffect, useRef } from 'react';
import { useTheme } from '../context/ThemeContext';

const BackgroundEffects: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { getThemeColors, theme } = useTheme();
  const colors = getThemeColors();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles (reduced for better performance)
    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw particles
      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `${colors.primary}${Math.floor(particle.opacity * 255).toString(16).padStart(2, '0')}`;
        ctx.fill();

        // Add glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = colors.primary;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Special effects based on theme
      if (theme === 'midnight-matrix') {
        // Matrix rain effect
        ctx.fillStyle = `${colors.primary}20`;
        for (let i = 0; i < 10; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.fillRect(x, y, 2, Math.random() * 20 + 10);
        }
      } else if (theme === 'sakura-bloom') {
        // Floating petals
        ctx.fillStyle = `${colors.primary}30`;
        for (let i = 0; i < 5; i++) {
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          ctx.beginPath();
          ctx.ellipse(x, y, 5, 3, Math.random() * Math.PI, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [colors, theme]);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.6 }}
      />
      
      {/* Floating gradient blobs */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 animate-float-slow"
          style={{
            background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
            top: '10%',
            left: '10%',
            animation: 'float 6s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 animate-float-slow"
          style={{
            background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
            top: '60%',
            right: '15%',
            animation: 'float 8s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute w-80 h-80 rounded-full opacity-10 animate-float-slow"
          style={{
            background: `radial-gradient(circle, ${colors.accent} 0%, transparent 70%)`,
            bottom: '20%',
            left: '50%',
            animation: 'float 10s ease-in-out infinite',
          }}
        />
      </div>

      {/* Chrome shine animation */}
      <div 
        className="fixed inset-0 pointer-events-none z-20 opacity-30"
        style={{
          background: `linear-gradient(45deg, transparent 30%, ${colors.primary}20 50%, transparent 70%)`,
          animation: 'shine 8s linear infinite',
        }}
      />
    </>
  );
};

export default BackgroundEffects;