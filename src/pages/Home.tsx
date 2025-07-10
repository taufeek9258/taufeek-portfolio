import React, { useEffect, useRef } from 'react';
import { ArrowDown, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import VanillaTilt from 'vanilla-tilt';
import { useTheme } from '../context/ThemeContext';

const Home: React.FC = () => {
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  useEffect(() => {
    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      });
    }

    if (buttonRef.current) {
      VanillaTilt.init(buttonRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }

    return () => {
      if (imageRef.current) {
        const instance = (imageRef.current as any).vanillaTilt;
        if (instance) {
          instance.destroy();
        }
      }
      if (buttonRef.current) {
        const instance = (buttonRef.current as any).vanillaTilt;
        if (instance) {
          instance.destroy();
        }
      }
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('featured-projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
        {/* Abstract wave animation background */}
        <div className="absolute inset-0 overflow-hidden">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1200 800"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor={colors.primary} stopOpacity="0.1" />
                <stop offset="100%" stopColor={colors.secondary} stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              d="M0,400 Q300,200 600,400 T1200,400 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
              className="animate-wave"
            />
            <path
              d="M0,500 Q300,300 600,500 T1200,500 L1200,800 L0,800 Z"
              fill="url(#waveGradient)"
              className="animate-wave-reverse"
            />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0" data-aos="fade-right">
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                style={{ color: colors.text }}
              >
                Hi, I'm{' '}
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent animate-gradient"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 50%, ${colors.accent} 100%)`,
                    backgroundSize: '200% 200%',
                  }}
                >
                  Taufeek
                </span>
                <br />
                <span 
                  className="bg-gradient-to-r bg-clip-text text-transparent animate-gradient"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
                    backgroundSize: '200% 200%',
                  }}
                >
                  Full Stack Developer
                </span>
              </h1>
              <p 
                className="text-xl md:text-2xl mb-8 leading-relaxed"
                style={{ color: colors.text, opacity: 0.8 }}
              >
                Crafting digital experiences with passion, creativity, and cutting-edge technology
              </p>
              <button
                ref={buttonRef}
                onClick={scrollToProjects}
                className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.background.includes('white') ? '#000' : '#fff',
                  boxShadow: `0 10px 30px ${colors.primary}40`,
                }}
              >
                Explore My Work
                <ArrowDown className="ml-2 w-5 h-5 animate-bounce" />
              </button>
            </div>
            
            <div className="lg:w-1/2 flex justify-center" data-aos="fade-left">
              <div ref={imageRef} className="relative">
                <div 
                  className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 relative"
                  style={{
                    borderImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent}) 1`,
                    animation: 'float 6s ease-in-out infinite',
                  }}
                >
                  <img
                    src="/tsufeek.jpg"
                    alt="Taufeek Shaikh"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://via.placeholder.com/320x320/33ffbe/ffffff?text=T';
                    }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                    }}
                  />
                </div>
                <div 
                  className="absolute inset-0 rounded-full animate-pulse pointer-events-none"
                  style={{
                    background: `radial-gradient(circle, ${colors.primary}15 0%, ${colors.secondary}10 50%, transparent 70%)`,
                    filter: 'blur(25px)',
                    transform: 'scale(1.1)',
                  }}
                />
                <div 
                  className="absolute -inset-4 rounded-full opacity-20 animate-spin"
                  style={{
                    background: `conic-gradient(from 0deg, ${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary})`,
                    filter: 'blur(15px)',
                    animation: 'spin 8s linear infinite',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown 
            className="w-8 h-8"
            style={{ color: colors.primary }}
          />
        </div>
      </section>

      {/* Featured Projects Banner */}
      <section id="featured-projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: colors.text }}
            >
              Featured <span style={{ color: colors.primary }}>Projects</span>
            </h2>
            <div 
              className="w-24 h-1 rounded-full mx-auto"
              style={{ backgroundColor: colors.primary }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div
                key={project}
                className="rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                style={{
                  background: `${colors.glass}`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.primary}30`,
                }}
                data-aos="fade-up"
                data-aos-delay={project * 100}
              >
                <div 
                  className="h-48 flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                  }}
                >
                  <div className="text-center">
                    <h3 
                      className="text-2xl font-bold mb-2"
                      style={{ color: colors.text }}
                    >
                      Project {project}
                    </h3>
                    <p style={{ color: colors.text, opacity: 0.8 }}>
                      Amazing web application
                    </p>
                  </div>
                </div>
                <div className="p-6">
                  <p 
                    className="mb-4 leading-relaxed"
                    style={{ color: colors.text, opacity: 0.8 }}
                  >
                    A cutting-edge application built with modern technologies and best practices.
                  </p>
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      color: colors.background.includes('white') ? '#000' : '#fff',
                    }}
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: '50+', label: 'Projects Completed' },
              { number: '3+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-xl"
                style={{
                  background: `${colors.glass}`,
                  backdropFilter: 'blur(20px)',
                  border: `1px solid ${colors.primary}30`,
                }}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <h3 
                  className="text-4xl font-bold mb-2"
                  style={{ color: colors.primary }}
                >
                  {stat.number}
                </h3>
                <p style={{ color: colors.text, opacity: 0.8 }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;