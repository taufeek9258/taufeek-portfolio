import React from 'react';
import { Award } from 'lucide-react';

interface CertificateProps {
  darkMode: boolean;
}

const Certificate: React.FC<CertificateProps> = ({ darkMode }) => {
  return (
    <section id="certificate" className={`py-20 px-4 ${
      darkMode ? 'bg-gray-900' : 'bg-[#e0e0f8]'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${
            darkMode ? 'text-white' : 'text-gray-900'
          }`}>
            <span className="text-[#33ffbe]">Certificate</span>
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
                  <Award className="w-8 h-8 text-gray-900" />
                </div>
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${
                darkMode ? 'text-white' : 'text-gray-900'
              }`}>
                IBM Certification
              </h3>
              <p className={`text-lg mb-6 ${
                darkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Completed certification program demonstrating proficiency in modern development practices and technologies.
              </p>
              <a
                href="https://courses.cognitiveclass.ai/certificates/25c835416a5c400e86647fe4348d8e51#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-[#33ffbe] text-gray-900 font-semibold rounded-lg hover:bg-[#2de6a8] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View Certificate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;