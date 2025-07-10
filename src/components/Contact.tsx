import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter, MessageSquare, Send } from 'lucide-react';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/arbazkhan47k', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/arbaz-khan-869581292', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://x.com/iarbazkhan47', label: 'Twitter' },
    { icon: MessageSquare, href: 'https://discordapp.com/users/946024684108017794', label: 'Discord' },
  ];

  return (
    <section id="contact" className={`py-20 px-4 ${
      darkMode ? 'bg-gray-800' : 'bg-white'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            Get In <span className="text-[#33ffbe]">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-[#33ffbe] rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div data-aos="fade-right">
            <h3 className={`text-2xl font-semibold mb-6 ${
              darkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Let's Connect
            </h3>
            <p className={`text-lg mb-8 ${
              darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I'm always open to discussing new opportunities, collaborations, or just having a chat about technology.
            </p>
            
            <div className="flex items-center mb-6">
              <Mail className="w-6 h-6 text-[#33ffbe] mr-4" />
              <a
                href="mailto:iarbazkhan47@gmail.com"
                className={`text-lg hover:text-[#33ffbe] transition-colors ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                iarbazkhan47@gmail.com
              </a>
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg ${
                    darkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-100 hover:bg-gray-200'
                  } transition-all duration-300 hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6 text-[#33ffbe]" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-[#33ffbe]' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-[#33ffbe]'
                  } focus:outline-none focus:ring-2 focus:ring-[#33ffbe]/20 transition-all duration-300`}
                />
              </div>
              <div>
                <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-[#33ffbe]' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-[#33ffbe]'
                  } focus:outline-none focus:ring-2 focus:ring-[#33ffbe]/20 transition-all duration-300`}
                />
              </div>
              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                  darkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                  className={`w-full px-4 py-3 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-700 border-gray-600 text-white focus:border-[#33ffbe]' 
                      : 'bg-white border-gray-300 text-gray-900 focus:border-[#33ffbe]'
                  } focus:outline-none focus:ring-2 focus:ring-[#33ffbe]/20 transition-all duration-300 resize-none`}
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 bg-[#33ffbe] text-gray-900 font-semibold rounded-lg hover:bg-[#2de6a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;