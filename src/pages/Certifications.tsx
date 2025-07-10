import React from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Certifications: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CSA-2024-001',
      image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Demonstrates expertise in designing distributed systems on AWS platform.',
      verifyUrl: '#',
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2024',
      credentialId: 'GCP-PD-2024-002',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Validates skills in developing scalable applications on Google Cloud Platform.',
      verifyUrl: '#',
    },
    {
      title: 'Meta React Developer Certificate',
      issuer: 'Meta (Facebook)',
      date: '2023',
      credentialId: 'META-RD-2023-003',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Professional certificate in React development and modern JavaScript.',
      verifyUrl: '#',
    },
    {
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB University',
      date: '2023',
      credentialId: 'MDB-CD-2023-004',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Certification in MongoDB database design and development.',
      verifyUrl: '#',
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023',
      credentialId: 'DCA-2023-005',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Validates skills in containerization and Docker ecosystem.',
      verifyUrl: '#',
    },
    {
      title: 'Kubernetes Administrator (CKA)',
      issuer: 'Cloud Native Computing Foundation',
      date: '2022',
      credentialId: 'CKA-2022-006',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Certification in Kubernetes cluster administration and management.',
      verifyUrl: '#',
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
            My <span style={{ color: colors.primary }}>Certifications</span>
          </h1>
          <div 
            className="w-24 h-1 rounded-full mx-auto"
            style={{ backgroundColor: colors.primary }}
          />
          <p 
            className="text-xl mt-6 max-w-2xl mx-auto"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            Professional certifications that validate my expertise in various technologies and platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
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
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://via.placeholder.com/400x300/33ffbe/ffffff?text=Certificate';
                  }}
                />
                <div 
                  className="absolute top-4 right-4 p-2 rounded-full"
                  style={{
                    background: `${colors.primary}20`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <Award 
                    className="w-6 h-6"
                    style={{ color: colors.primary }}
                  />
                </div>
              </div>

              <div className="p-6">
                <h3 
                  className="text-xl font-bold mb-2"
                  style={{ color: colors.text }}
                >
                  {cert.title}
                </h3>
                <p 
                  className="font-semibold mb-3"
                  style={{ color: colors.primary }}
                >
                  {cert.issuer}
                </p>
                <p 
                  className="mb-4 leading-relaxed"
                  style={{ color: colors.text, opacity: 0.8 }}
                >
                  {cert.description}
                </p>

                <div className="space-y-2 mb-6">
                  <div className="flex items-center">
                    <Calendar 
                      className="w-4 h-4 mr-2"
                      style={{ color: colors.primary }}
                    />
                    <span 
                      className="text-sm"
                      style={{ color: colors.text, opacity: 0.8 }}
                    >
                      Issued: {cert.date}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <span 
                      className="text-sm font-mono"
                      style={{ color: colors.text, opacity: 0.6 }}
                    >
                      ID: {cert.credentialId}
                    </span>
                  </div>
                </div>

                <a
                  href={cert.verifyUrl}
                  className="inline-flex items-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
                    color: colors.background.includes('white') ? '#000' : '#fff',
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Verify Certificate
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;