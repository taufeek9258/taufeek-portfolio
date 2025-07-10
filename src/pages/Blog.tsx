import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Blog: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  const blogPosts = [
    {
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, best practices for component architecture, and advanced patterns for maintainable code.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['React', 'TypeScript', 'Architecture'],
      slug: 'scalable-react-typescript',
    },
    {
      title: 'Mastering Node.js Performance Optimization',
      excerpt: 'Discover advanced techniques for optimizing Node.js applications, including memory management, clustering, and database optimization strategies.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['Node.js', 'Performance', 'Backend'],
      slug: 'nodejs-performance-optimization',
    },
    {
      title: 'Modern CSS Techniques for Better UX',
      excerpt: 'Explore cutting-edge CSS features like container queries, CSS Grid subgrid, and advanced animations to create exceptional user experiences.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2024-01-05',
      readTime: '6 min read',
      tags: ['CSS', 'UX', 'Frontend'],
      slug: 'modern-css-techniques',
    },
    {
      title: 'Deploying Full-Stack Apps with Docker and AWS',
      excerpt: 'A comprehensive guide to containerizing your applications with Docker and deploying them to AWS using ECS, with CI/CD pipeline setup.',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-28',
      readTime: '15 min read',
      tags: ['Docker', 'AWS', 'DevOps'],
      slug: 'docker-aws-deployment',
    },
    {
      title: 'GraphQL vs REST: When to Use Which',
      excerpt: 'An in-depth comparison of GraphQL and REST APIs, including performance considerations, use cases, and implementation strategies.',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-20',
      readTime: '10 min read',
      tags: ['GraphQL', 'REST', 'API'],
      slug: 'graphql-vs-rest',
    },
    {
      title: 'Building Real-time Applications with WebSockets',
      excerpt: 'Learn how to implement real-time features in your web applications using WebSockets, Socket.io, and modern browser APIs.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      date: '2023-12-15',
      readTime: '9 min read',
      tags: ['WebSockets', 'Real-time', 'JavaScript'],
      slug: 'websockets-realtime-apps',
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
            My <span style={{ color: colors.primary }}>Blog</span>
          </h1>
          <div 
            className="w-24 h-1 rounded-full mx-auto"
            style={{ backgroundColor: colors.primary }}
          />
          <p 
            className="text-xl mt-6 max-w-2xl mx-auto"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            Thoughts, tutorials, and insights about web development, technology, and software engineering
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="rounded-xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
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
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300/33ffbe/ffffff?text=Blog';
                  }}
                />
                <div 
                  className="absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-semibold"
                  style={{
                    background: `${colors.primary}20`,
                    color: colors.primary,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Clock className="w-4 h-4 inline mr-1" />
                  {post.readTime}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center mb-3">
                  <Calendar 
                    className="w-4 h-4 mr-2"
                    style={{ color: colors.primary }}
                  />
                  <span 
                    className="text-sm"
                    style={{ color: colors.text, opacity: 0.6 }}
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>

                <h2 
                  className="text-xl font-bold mb-3 line-clamp-2"
                  style={{ color: colors.text }}
                >
                  {post.title}
                </h2>
                
                <p 
                  className="mb-4 leading-relaxed line-clamp-3"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-3 py-1 text-sm rounded-full font-medium"
                      style={{
                        background: `${colors.primary}20`,
                        color: colors.primary,
                      }}
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    color: colors.background.includes('white') ? '#000' : '#fff',
                  }}
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div 
          className="mt-20 p-8 rounded-xl text-center"
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
            Stay Updated
          </h3>
          <p 
            className="mb-6"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            Subscribe to my newsletter for the latest articles and web development insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
              style={{
                background: `${colors.background}80`,
                borderColor: `${colors.primary}30`,
                color: colors.text,
                focusRingColor: colors.primary,
              }}
            />
            <button
              className="px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                color: colors.background.includes('white') ? '#000' : '#fff',
              }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;