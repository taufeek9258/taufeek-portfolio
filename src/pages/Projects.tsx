import React from 'react';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Projects: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'JWT'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Socket.io', 'Express', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2024',
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind CSS'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
    },
    {
      title: 'Social Media Platform',
      description: 'A modern social media platform with real-time messaging, post sharing, and advanced privacy controls.',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Next.js', 'Prisma', 'NextAuth', 'Cloudinary', 'Vercel'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing my work with smooth animations, dark mode, and optimized performance.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2023',
    },
    {
      title: 'Learning Management System',
      description: 'A comprehensive LMS with course creation, progress tracking, quizzes, and certificate generation.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Django', 'PostgreSQL', 'Redis', 'AWS S3'],
      liveUrl: '#',
      githubUrl: '#',
      date: '2022',
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
            My <span style={{ color: colors.primary }}>Projects</span>
          </h1>
          <div 
            className="w-24 h-1 rounded-full mx-auto"
            style={{ backgroundColor: colors.primary }}
          />
          <p 
            className="text-xl mt-6 max-w-2xl mx-auto"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            A showcase of my recent work and the technologies I've used to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              style={{
                background: `${colors.glass}`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${colors.primary}30`,
              }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300/33ffbe/ffffff?text=Project';
                  }}
                />
                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: `${colors.primary}20`,
                    color: colors.primary,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Calendar className="w-4 h-4 inline mr-1" />
                  {project.date}
                </div>
              </div>

              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-3"
                  style={{ color: colors.text }}
                >
                  {project.title}
                </h3>
                <p 
                  className="mb-4 leading-relaxed"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm rounded-full font-medium"
                      style={{
                        background: `${colors.primary}20`,
                        color: colors.primary,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                      color: colors.background.includes('white') ? '#000' : '#fff',
                    }}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                    style={{
                      background: `${colors.primary}20`,
                      color: colors.primary,
                      border: `1px solid ${colors.primary}30`,
                    }}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;