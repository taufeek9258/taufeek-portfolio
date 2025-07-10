import React, { createContext, useContext, useState, useEffect } from 'react';

export type Theme = 
  | 'neon-cyber'
  | 'mint-fresh'
  | 'midnight-matrix'
  | 'sakura-bloom'
  | 'dark-aurora'
  | 'glass-frost'
  | 'sunset-luxe';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  getThemeColors: () => {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
    glass: string;
  };
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    // Fallback to default theme if context is not available
    return {
      theme: 'neon-cyber' as Theme,
      setTheme: () => {},
      getThemeColors: () => themeConfigs['neon-cyber'],
    };
  }
  return context;
};

const themeConfigs = {
  'neon-cyber': {
    primary: '#00ffff',
    secondary: '#ff00ff',
    accent: '#8a2be2',
    background: 'linear-gradient(135deg, #0a0a23 0%, #1a1a3a 100%)',
    text: '#ffffff',
    glass: 'rgba(0, 255, 255, 0.1)',
  },
  'mint-fresh': {
    primary: '#00ffa1',
    secondary: '#40e0d0',
    accent: '#98fb98',
    background: 'linear-gradient(135deg, #f0fff0 0%, #e0ffff 100%)',
    text: '#2d5a27',
    glass: 'rgba(0, 255, 161, 0.1)',
  },
  'midnight-matrix': {
    primary: '#00ff41',
    secondary: '#39ff14',
    accent: '#32cd32',
    background: 'linear-gradient(135deg, #000000 0%, #0d1b0d 100%)',
    text: '#00ff41',
    glass: 'rgba(0, 255, 65, 0.1)',
  },
  'sakura-bloom': {
    primary: '#ff69b4',
    secondary: '#ffc0cb',
    accent: '#ffb6c1',
    background: 'linear-gradient(135deg, #fff0f5 0%, #ffe4e1 100%)',
    text: '#8b4b8b',
    glass: 'rgba(255, 105, 180, 0.1)',
  },
  'dark-aurora': {
    primary: '#00ff7f',
    secondary: '#7fffd4',
    accent: '#40e0d0',
    background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 100%)',
    text: '#ffffff',
    glass: 'rgba(0, 255, 127, 0.1)',
  },
  'glass-frost': {
    primary: '#87ceeb',
    secondary: '#b0e0e6',
    accent: '#add8e6',
    background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f3ff 100%)',
    text: '#2f4f4f',
    glass: 'rgba(135, 206, 235, 0.1)',
  },
  'sunset-luxe': {
    primary: '#ffa500',
    secondary: '#ff6347',
    accent: '#ffd700',
    background: 'linear-gradient(135deg, #2c1810 0%, #4a2c17 100%)',
    text: '#ffffff',
    glass: 'rgba(255, 165, 0, 0.1)',
  },
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Try to get theme from localStorage
    const savedTheme = localStorage.getItem('portfolio-theme') as Theme;
    return savedTheme && themeConfigs[savedTheme] ? savedTheme : 'neon-cyber';
  });

  const getThemeColors = () => themeConfigs[theme];

  const handleThemeChange = (newTheme: Theme) => {
    setTheme(newTheme);
    localStorage.setItem('portfolio-theme', newTheme);
  };

  useEffect(() => {
    const root = document.documentElement;
    const colors = getThemeColors();
    
    root.style.setProperty('--primary-color', colors.primary);
    root.style.setProperty('--secondary-color', colors.secondary);
    root.style.setProperty('--accent-color', colors.accent);
    root.style.setProperty('--text-color', colors.text);
    root.style.setProperty('--glass-color', colors.glass);
    
    document.body.style.background = colors.background;
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleThemeChange, getThemeColors }}>
      {children}
    </ThemeContext.Provider>
  );
};