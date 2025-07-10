import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Contact: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      alert('Please fill in all fields');
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }
    
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form after successful submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    
    alert('Thank you for your message! I will get back to you soon.');
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'mtaufeeq333@gmail.com',
      link: 'mailto:mtaufeeq333@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '9548151254 / 9258036178',
      link: 'tel:+919548151254',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Bareilly, India',
      link: '#',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com',
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
            Get In <span style={{ color: colors.primary }}>Touch</span>
          </h1>
          <div 
            className="w-24 h-1 rounded-full mx-auto"
            style={{ backgroundColor: colors.primary }}
          />
          <p 
            className="text-xl mt-6 max-w-2xl mx-auto"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ color: colors.text }}
            >
              Let's Connect
            </h2>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="flex items-center p-4 rounded-xl transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  style={{
                    background: `${colors.glass}`,
                    backdropFilter: 'blur(20px)',
                    border: `1px solid ${colors.primary}30`,
                  }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                    }}
                  >
                    <info.icon 
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </div>
                  <div>
                    <h3 
                      className="font-semibold"
                      style={{ color: colors.text }}
                    >
                      {info.title}
                    </h3>
                    <p style={{ color: colors.text, opacity: 0.8 }}>
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h3 
                className="text-xl font-bold mb-4"
                style={{ color: colors.text }}
              >
                Follow Me
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover:shadow-lg transform hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                      border: `1px solid ${colors.primary}30`,
                    }}
                  >
                    <social.icon 
                      className="w-6 h-6"
                      style={{ color: colors.primary }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form 
              onSubmit={handleSubmit}
              className="p-8 rounded-xl shadow-2xl"
              style={{
                background: `${colors.glass}`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${colors.primary}30`,
              }}
            >
              <h2 
                className="text-3xl font-bold mb-8"
                style={{ color: colors.text }}
              >
                Send Message
              </h2>

              <div className="space-y-6">
                <div>
                  <label 
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: colors.text }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      background: `${colors.background}80`,
                      borderColor: `${colors.primary}30`,
                      color: colors.text,
                    }}
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: colors.text }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      background: `${colors.background}80`,
                      borderColor: `${colors.primary}30`,
                      color: colors.text,
                    }}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: colors.text }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300"
                    style={{
                      background: `${colors.background}80`,
                      borderColor: `${colors.primary}30`,
                      color: colors.text,
                    }}
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: colors.text }}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border focus:outline-none focus:ring-2 transition-all duration-300 resize-none"
                    style={{
                      background: `${colors.background}80`,
                      borderColor: `${colors.primary}30`,
                      color: colors.text,
                    }}
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    color: colors.background.includes('white') ? '#000' : '#fff',
                  }}
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;