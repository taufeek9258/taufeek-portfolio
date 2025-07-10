import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Preloader: React.FC = () => {
  const { getThemeColors } = useTheme();
  const colors = getThemeColors();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" style={{ background: colors.background }}>
      <div className="text-center">
        <div className="relative mb-8">
          <div 
            className="w-24 h-24 rounded-full border-4 animate-spin mx-auto"
            style={{ 
              borderColor: `${colors.primary}40`,
              borderTopColor: colors.primary,
            }}
          >
            <div 
              className="absolute inset-4 rounded-full flex items-center justify-center text-4xl font-bold animate-pulse"
              style={{ color: colors.primary }}
            >
              T
            </div>
          </div>
        </div>
        <h1 
          className="text-3xl md:text-5xl font-bold mb-4 animate-pulse"
          style={{ color: colors.text }}
        >
          Welcome to Taufeek Shaikh's Portfolio
        </h1>
        <div 
          className="w-32 h-1 rounded-full mx-auto animate-pulse"
          style={{ backgroundColor: colors.primary }}
        ></div>
      </div>
    </div>
  );
};

export default Preloader;