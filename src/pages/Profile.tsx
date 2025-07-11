import React from 'react';
import { Download, MapPin, Calendar, Briefcase, GraduationCap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Profile: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  const profileData = {
    name: 'taufeek',
    title: 'Full Stack Developer',
    location: 'Bareilly, India',
    email: 'mtaufeeq333@gmail.com',
    phone: '9548151254 / 9258036178',
    website: 'www.taufeekshaikh.dev',
    summary: 'Passionate full stack developer with 3+ years of experience in building scalable web applications. Specialized in React, Node.js, and cloud technologies. Strong advocate for clean code, best practices, and continuous learning.',
    experience: [
      {
        title: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc.',
        period: '2022 - Present',
        description: 'Lead development of enterprise web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines.',
      },
      {
        title: 'Full Stack Developer',
        company: 'Digital Innovations LLC',
        period: '2021 - 2022',
        description: 'Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to implement pixel-perfect UIs.',
      },
      {
        title: 'Frontend Developer',
        company: 'StartupXYZ',
        period: '2020 - 2021',
        description: 'Built responsive web applications using React and TypeScript. Optimized application performance and implemented modern development workflows.',
      },
    ],
    education: [
      {
        degree: 'Bachelor of Science in Computer Science',
        school: 'University of Technology',
        period: '2016 - 2020',
        description: 'Graduated Magna Cum Laude. Relevant coursework: Data Structures, Algorithms, Software Engineering, Database Systems.',
      },
    ],
    skills: {
      'Frontend': ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS'],
      'Backend': ['Node.js', 'Express', 'Python', 'Django', 'GraphQL'],
      'Database': ['MongoDB', 'PostgreSQL', 'Redis', 'Firebase'],
      'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'],
      'Tools': ['Git', 'Figma', 'Jest', 'Webpack', 'Vite'],
    },
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div 
          className="p-8 rounded-xl shadow-2xl mb-8"
          style={{
            background: `${colors.glass}`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.primary}30`,
          }}
          data-aos="fade-up"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
              <img
                src="/tsufeek.jpg"
                alt="Profile"
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = 'https://via.placeholder.com/300x300/33ffbe/ffffff?text=Profile';
                }}
              />
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h1 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: colors.text }}
              >
                {profileData.name}
              </h1>
              <h2 
                className="text-xl mb-4"
                style={{ color: colors.primary }}
              >
                {profileData.title}
              </h2>
              
              <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
                <div className="flex items-center">
                  <MapPin 
                    className="w-4 h-4 mr-2"
                    style={{ color: colors.primary }}
                  />
                  <span style={{ color: colors.text, opacity: 0.8 }}>
                    {profileData.location}
                  </span>
                </div>
                <div className="flex items-center">
                  <span style={{ color: colors.text, opacity: 0.8 }}>
                    {profileData.email}
                  </span>
                </div>
                <div className="flex items-center">
                  <span style={{ color: colors.text, opacity: 0.8 }}>
                    {profileData.phone}
                  </span>
                </div>
              </div>
              
              <button
                className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                style={{
                  background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                  color: colors.background.includes('white') ? '#000' : '#fff',
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div 
          className="p-8 rounded-xl shadow-2xl mb-8"
          style={{
            background: `${colors.glass}`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.primary}30`,
          }}
          data-aos="fade-up"
        >
          <h3 
            className="text-2xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            Professional Summary
          </h3>
          <p 
            className="leading-relaxed"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            {profileData.summary}
          </p>
        </div>

        {/* Experience */}
        <div 
          className="p-8 rounded-xl shadow-2xl mb-8"
          style={{
            background: `${colors.glass}`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.primary}30`,
          }}
          data-aos="fade-up"
        >
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ color: colors.text }}
          >
            <Briefcase 
              className="w-6 h-6 inline mr-2"
              style={{ color: colors.primary }}
            />
            Experience
          </h3>
          
          <div className="space-y-6">
            {profileData.experience.map((exp, index) => (
              <div key={index} className="border-l-2 pl-6" style={{ borderColor: colors.primary }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 
                    className="text-xl font-semibold"
                    style={{ color: colors.text }}
                  >
                    {exp.title}
                  </h4>
                  <div className="flex items-center">
                    <Calendar 
                      className="w-4 h-4 mr-2"
                      style={{ color: colors.primary }}
                    />
                    <span 
                      className="text-sm"
                      style={{ color: colors.text, opacity: 0.6 }}
                    >
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p 
                  className="font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  {exp.company}
                </p>
                <p 
                  className="leading-relaxed"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div 
          className="p-8 rounded-xl shadow-2xl mb-8"
          style={{
            background: `${colors.glass}`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.primary}30`,
          }}
          data-aos="fade-up"
        >
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ color: colors.text }}
          >
            <GraduationCap 
              className="w-6 h-6 inline mr-2"
              style={{ color: colors.primary }}
            />
            Education
          </h3>
          
          <div className="space-y-6">
            {profileData.education.map((edu, index) => (
              <div key={index} className="border-l-2 pl-6" style={{ borderColor: colors.primary }}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 
                    className="text-xl font-semibold"
                    style={{ color: colors.text }}
                  >
                    {edu.degree}
                  </h4>
                  <div className="flex items-center">
                    <Calendar 
                      className="w-4 h-4 mr-2"
                      style={{ color: colors.primary }}
                    />
                    <span 
                      className="text-sm"
                      style={{ color: colors.text, opacity: 0.6 }}
                    >
                      {edu.period}
                    </span>
                  </div>
                </div>
                <p 
                  className="font-medium mb-2"
                  style={{ color: colors.primary }}
                >
                  {edu.school}
                </p>
                <p 
                  className="leading-relaxed"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  {edu.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div 
          className="p-8 rounded-xl shadow-2xl mb-8"
          style={{
            background: `${colors.glass}`,
            backdropFilter: 'blur(20px)',
            border: `1px solid ${colors.primary}30`,
          }}
          data-aos="fade-up"
        >
          <h3 
            className="text-2xl font-bold mb-6"
            style={{ color: colors.text }}
          >
            Technical Skills
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(profileData.skills).map(([category, skills]) => (
              <div key={category}>
                <h4 
                  className="text-lg font-semibold mb-3"
                  style={{ color: colors.primary }}
                >
                  {category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm rounded-full font-medium"
                      style={{
                        background: `${colors.primary}20`,
                        color: colors.primary,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;