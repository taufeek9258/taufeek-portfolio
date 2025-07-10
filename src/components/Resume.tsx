import React from 'react';
import { Download, FileText } from 'lucide-react';

interface ResumeProps {
  darkMode: boolean;
}

const Resume: React.FC<ResumeProps> = ({ darkMode }) => {
  return (
    <section id="resume" className={`py-20 px-4 ${
      darkMode ? 'bg-gray-900' : 'bg-[#e0e0f8]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            My <span className="text-[#33ffbe]">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-[#33ffbe] rounded-full mx-auto"></div>
        </div>

        <div className="flex justify-center">
          <div
            className={`max-w-2xl p-8 rounded-xl shadow-2xl ${
              darkMode ? 'bg-gray-800' : 'bg-white'
            } hover:shadow-3xl transition-all duration-300`}
            data-aos="fade-up"
          >
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-[#33ffbe] rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                Download My Resume
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Get a comprehensive overview of my skills, experience, and educational background.
              </p>
              <button
                className="inline-flex items-center px-8 py-3 bg-[#33ffbe] text-gray-900 font-semibold rounded-lg hover:bg-[#2de6a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => {
                  // You can add the actual PDF download functionality here
                  console.log('Resume download clicked');
                }}
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;