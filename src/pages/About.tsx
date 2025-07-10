import React from 'react';
import { useTheme } from '../context/ThemeContext';

const About: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            About <span style={{ color: colors.primary }}>Me</span>
          </h1>
          <div 
            className="w-24 h-1 rounded-full mx-auto"
            style={{ backgroundColor: colors.primary }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div 
              className="rounded-xl overflow-hidden shadow-2xl"
              style={{
                background: `${colors.glass}`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${colors.primary}30`,
              }}
            >
              <img
                src="/tsufeek.jpg"
                alt="Taufeek Shaikh"
                className="w-full h-96 object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/400x400/33ffbe/ffffff?text=T';
                }}
              />
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 
              className="text-3xl font-bold mb-6"
              style={{ color: colors.text }}
            >
              Passionate Full Stack Developer
            </h2>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: colors.text, opacity: 0.8 }}
            >
              I'm Taufeek Shaikh, a creative and dedicated 3rd-year undergraduate at Invertis University, 
              passionate about full stack development. I love blending clean code with creative design 
              and user-first thinking to build modern, responsive and beautiful web experiences.
            </p>
            <p 
              className="text-lg mb-6 leading-relaxed"
              style={{ color: colors.text, opacity: 0.8 }}
            >
              I specialize in modern web technologies including React, Node.js, TypeScript, and 
              cloud platforms. I believe in writing clean, maintainable code and following best 
              practices to deliver exceptional user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              {['React', 'TypeScript', 'Node.js', 'MongoDB', 'AWS'].map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-lg font-semibold"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                    color: colors.primary,
                    border: `1px solid ${colors.primary}30`,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;