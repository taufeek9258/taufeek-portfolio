import React from 'react';
import { Heart } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <footer 
      className="py-8 px-4 border-t"
      style={{
        background: `${colors.glass}`,
        backdropFilter: 'blur(20px)',
        borderColor: `${colors.primary}30`,
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p 
            className="text-sm"
            style={{ color: colors.text, opacity: 0.8 }}
          >
            © 2025 Taufeek Shaikh. All Rights Reserved.
          </p>
          <div className="flex items-center justify-center mt-2">
            <span 
              className="text-sm"
              style={{ color: colors.text, opacity: 0.8 }}
            >
              Made with
            </span>
            <Heart 
              className="w-4 h-4 mx-1 animate-pulse"
              style={{ color: colors.primary }}
            />
            <span 
              className="text-sm"
              style={{ color: colors.text, opacity: 0.8 }}
            >
              by Taufeek Shaikh
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;