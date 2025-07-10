import React from 'react';
import { Code, Gamepad2, GraduationCap } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  return (
    <section id="about" className={`py-20 px-4 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            About <span className="text-[#33ffbe]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-[#33ffbe] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h3 className={`text-2xl md:text-3xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Get to know me!
            </h3>
            <p className={`text-lg mb-6 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm a passionate developer who loves creating digital experiences that make a difference. 
              Currently pursuing my BCA degree and constantly learning new technologies to stay ahead 
              in the ever-evolving world of web development.
            </p>
            <p className={`text-lg mb-6 leading-relaxed ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              When I'm not coding, you'll find me exploring the latest web technologies, contributing 
              to open-source projects, or enjoying online gaming sessions.
            </p>
          </div>

          <div data-aos="fade-left">
            <div className="space-y-6">
              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              } hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <GraduationCap className="w-8 h-8 text-[#33ffbe] mr-3" />
                  <h4 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Education
                  </h4>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  3rd Year BCA (2023–2026) student at Invertis University
                </p>
              </div>

              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              } hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Code className="w-8 h-8 text-[#33ffbe] mr-3" />
                  <h4 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Passion
                  </h4>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Full-stack web development with focus on modern technologies
                </p>
              </div>

              <div className={`p-6 rounded-lg ${
                darkMode ? 'bg-gray-700' : 'bg-gray-50'
              } hover:shadow-lg transition-all duration-300`}>
                <div className="flex items-center mb-4">
                  <Gamepad2 className="w-8 h-8 text-[#33ffbe] mr-3" />
                  <h4 className={`text-xl font-semibold ${
                    darkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    Hobbies
                  </h4>
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Online Gaming 🎮
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;