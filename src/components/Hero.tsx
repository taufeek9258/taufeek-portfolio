import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (buttonRef.current) {
      VanillaTilt.init(buttonRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }

    if (imageRef.current) {
      VanillaTilt.init(imageRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        'max-glare': 0.3,
      });
    }

    return () => {
      if (buttonRef.current) {
        const instance = (buttonRef.current as any).vanillaTilt;
        if (instance) {
          instance.destroy();
        }
      }
      if (imageRef.current) {
        const instance = (imageRef.current as any).vanillaTilt;
        if (instance) {
          instance.destroy();
        }
      }
    };
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={`min-h-screen flex items-center justify-center px-4 ${
      darkMode ? 'bg-gray-900' : 'bg-[#e0e0f8]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0" data-aos="fade-right" data-aos-duration="1200">
            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            } animate-gradient bg-gradient-to-r from-[#33ffbe] via-[#ca321a] to-[#33ffbe] bg-clip-text text-transparent`}>
              Hi, I'm <span className="text-[#33ffbe]">Arbaz Khan</span>
            </h1>
            <p className={`text-xl md:text-2xl mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Turning ideas into interactive digital experiences
            </p>
            <button
              ref={buttonRef}
              onClick={scrollToProjects}
              className="inline-flex items-center px-8 py-4 bg-[#33ffbe] text-gray-900 font-semibold rounded-lg hover:bg-[#2de6a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 animate-pulse"
            >
              Explore My Work
              <ArrowDown className="ml-2 w-5 h-5" />
            </button>
          </div>
          <div className="lg:w-1/2 flex justify-center" data-aos="fade-left" data-aos-duration="1200">
            <div ref={imageRef} className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-4 border-[#33ffbe]">
                <img
                  src="https://i.ibb.co/tpfv6g0/profile-image.jpg"
                  alt="Arbaz Khan"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#33ffbe]/20 to-[#ca321a]/20 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;