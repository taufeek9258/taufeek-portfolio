import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import VanillaTilt from 'vanilla-tilt';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      VanillaTilt.init(cardRef.current, {
        max: 25,
        speed: 400,
        glare: true,
        'max-glare': 0.5,
      });
    }

    return () => {
      if (cardRef.current) {
        const instance = (cardRef.current as any).vanillaTilt;
        if (instance) {
          instance.destroy();
        }
      }
    };
  }, []);

  return (
    <section id="projects" className={`py-20 px-4 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-[#33ffbe]">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-[#33ffbe] rounded-full mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <div
            ref={cardRef}
            className={`max-w-lg rounded-xl shadow-2xl overflow-hidden ${
              darkMode ? 'bg-gray-700' : 'bg-white'
            } hover:shadow-3xl transition-all duration-300`}
            data-aos="fade-up"
          >
            <div className="relative">
              <div className="h-48 bg-gradient-to-br from-[#33ffbe] to-[#ca321a] flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Movie & Web Series Recommendation
                  </h3>
                  <p className="text-gray-100">
                    Interactive Content Discovery
                  </p>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className={`text-lg mb-6 leading-relaxed ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                A modern UI application that recommends trending movies and web series 
                using advanced filtering options. Built with responsive design and 
                intuitive user experience.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://arbazkhan47k.github.io/movie-recommendation/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-6 py-3 bg-[#33ffbe] text-gray-900 font-semibold rounded-lg hover:bg-[#2de6a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Live Demo
                </a>
                <a
                  href="https://github.com/arbazkhan47k/movie-recommendation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center px-6 py-3 border-2 border-[#33ffbe] text-[#33ffbe] font-semibold rounded-lg hover:bg-[#33ffbe] hover:text-gray-900 transition-all duration-300 ${
                    darkMode ? 'hover:text-gray-900' : 'hover:text-white'
                  }`}
                >
                  <Github className="w-5 h-5 mr-2" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;