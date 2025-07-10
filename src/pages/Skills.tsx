import React from 'react';
import { Code, Database, Globe, Smartphone, Server, Palette } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Skills: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js', 'Angular'],
    },
    {
      icon: Server,
      title: 'Backend Development',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'PHP', 'Laravel'],
    },
    {
      icon: Database,
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase', 'Supabase'],
    },
    {
      icon: Globe,
      title: 'Web Technologies',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'REST APIs', 'GraphQL', 'WebSockets'],
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      skills: ['React Native', 'Flutter', 'Ionic', 'PWA', 'Cordova', 'Expo'],
    },
    {
      icon: Palette,
      title: 'Design & Tools',
      skills: ['Figma', 'Adobe XD', 'Git', 'Docker', 'AWS', 'Vercel'],
    },
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            My <span style={{ color: colors.primary }}>Skills</span>
          </h1>
          <div 
            className="w-24 h-1 rounded-full mx-auto"
            style={{ backgroundColor: colors.primary }}
          />
          <p 
            className="text-xl mt-6 max-w-2xl mx-auto"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: `${colors.glass}`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${colors.primary}30`,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center mb-6">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                  }}
                >
                  <category.icon 
                    className="w-8 h-8"
                    style={{ color: colors.primary }}
                  />
                </div>
                <h3 
                  className="text-xl font-bold"
                  style={{ color: colors.text }}
                >
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center justify-between p-3 rounded-lg"
                    style={{
                      background: `${colors.primary}10`,
                      border: `1px solid ${colors.primary}20`,
                    }}
                  >
                    <span 
                      className="font-medium"
                      style={{ color: colors.text }}
                    >
                      {skill}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: i < 4 ? colors.primary : `${colors.primary}30`,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;