import React from 'react';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 90 },
    { name: 'JavaScript', percentage: 85 },
    { name: 'GitHub', percentage: 85 },
    { name: 'Python', percentage: 80 },
    { name: 'React', percentage: 75 },
    { name: 'Tailwind CSS', percentage: 70 },
    { name: 'Node.js', percentage: 65 },
    { name: 'Firebase', percentage: 60 },
  ];

  return (
    <section id="skills" className={`py-20 px-4 ${
      darkMode ? 'bg-gray-900' : 'bg-[#e0e0f8]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-[#33ffbe]">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-[#33ffbe] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-item"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex justify-between items-center mb-3">
                <span className={`text-lg font-semibold ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {skill.name}
                </span>
                <span className={`text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {skill.percentage}%
                </span>
              </div>
              <div className={`w-full h-3 rounded-full ${
                darkMode ? 'bg-gray-700' : 'bg-gray-200'
              }`}>
                <div
                  className="h-full bg-[#33ffbe] rounded-full transition-all duration-1000 ease-out skill-progress"
                  style={{
                    width: `${skill.percentage}%`,
                    animationDelay: `${index * 100}ms`,
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;