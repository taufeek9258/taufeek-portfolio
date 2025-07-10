import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Settings, Palette } from 'lucide-react';
import { useTheme, Theme } from '../context/ThemeContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showThemeSelector, setShowThemeSelector] = useState(false);
  const { theme, setTheme, getThemeColors } = useTheme();
  const colors = getThemeColors();
  const location = useLocation();

  // Close theme selector when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.theme-selector')) {
        setShowThemeSelector(false);
      }
    };

    if (showThemeSelector) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showThemeSelector]);

  // Scroll lock for mobile menu
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('mobile-menu-open');
    } else {
      document.body.classList.remove('mobile-menu-open');
    }
    return () => {
      document.body.classList.remove('mobile-menu-open');
    };
  }, [isOpen]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  const themes: { key: Theme; label: string; colors: string[] }[] = [
    { key: 'neon-cyber', label: 'Neon Cyber', colors: ['#00ffff', '#ff00ff'] },
    { key: 'mint-fresh', label: 'Mint Fresh', colors: ['#00ffa1', '#40e0d0'] },
    { key: 'midnight-matrix', label: 'Midnight Matrix', colors: ['#00ff41', '#39ff14'] },
    { key: 'sakura-bloom', label: 'Sakura Bloom', colors: ['#ff69b4', '#ffc0cb'] },
    { key: 'dark-aurora', label: 'Dark Aurora', colors: ['#00ff7f', '#7fffd4'] },
    { key: 'glass-frost', label: 'Glass Frost', colors: ['#87ceeb', '#b0e0e6'] },
    { key: 'sunset-luxe', label: 'Sunset Luxe', colors: ['#ffa500', '#ff6347'] },
  ];

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md border-b"
      style={{
        background: `${colors.glass}`,
        borderColor: `${colors.primary}30`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center group">
            <span 
              className="text-2xl font-bold relative"
              style={{ color: colors.text }}
            >
              Taufeek
              <div 
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-current to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ background: `linear-gradient(90deg, transparent, ${colors.primary}, transparent)` }}
              />
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  location.pathname === item.path ? 'text-current' : 'hover:text-current'
                }`}
                style={{ 
                  color: location.pathname === item.path ? colors.primary : colors.text 
                }}
              >
                {item.label}
                <div 
                  className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-300 ${
                    location.pathname === item.path ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                  style={{ backgroundColor: colors.primary }}
                />
              </Link>
            ))}
            
            <div className="relative theme-selector">
              <button
                onClick={() => setShowThemeSelector(!showThemeSelector)}
                className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
                style={{ 
                  background: `${colors.glass}`,
                  color: colors.primary 
                }}
                aria-label="Toggle theme selector"
                aria-expanded={showThemeSelector}
              >
                <Palette className="w-5 h-5" />
              </button>
              
              {showThemeSelector && (
                <div 
                  className="absolute right-0 mt-2 w-64 rounded-lg shadow-xl border backdrop-blur-md p-4 z-50"
                  style={{
                    background: `${colors.glass}`,
                    borderColor: `${colors.primary}30`,
                  }}
                >
                  <h3 className="text-sm font-semibold mb-3" style={{ color: colors.text }}>
                    Choose Theme
                  </h3>
                  <div className="grid grid-cols-1 gap-2">
                    {themes.map((themeOption) => (
                      <button
                        key={themeOption.key}
                        onClick={() => {
                          setTheme(themeOption.key);
                          setShowThemeSelector(false);
                        }}
                        className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-300 ${
                          theme === themeOption.key ? 'ring-2' : 'hover:bg-opacity-20'
                        }`}
                        style={{
                          backgroundColor: theme === themeOption.key ? `${colors.primary}20` : 'transparent',
                          ringColor: theme === themeOption.key ? colors.primary : 'transparent',
                        }}
                      >
                        <div className="flex space-x-1">
                          {themeOption.colors.map((color, index) => (
                            <div
                              key={index}
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                        </div>
                        <span className="text-sm" style={{ color: colors.text }}>
                          {themeOption.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/profile"
              className="p-2 rounded-lg transition-all duration-300 hover:scale-110"
              style={{ 
                background: `${colors.glass}`,
                color: colors.primary 
              }}
            >
              <Settings className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => setShowThemeSelector(!showThemeSelector)}
              className="p-2 rounded-lg transition-all duration-300"
              style={{ 
                background: `${colors.glass}`,
                color: colors.primary 
              }}
              aria-label="Toggle theme selector"
              aria-expanded={showThemeSelector}
            >
              <Palette className="w-5 h-5" />
            </button>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                // Close theme selector when opening mobile menu
                if (!isOpen) {
                  setShowThemeSelector(false);
                }
              }}
              className="p-2 rounded-lg transition-all duration-300"
              style={{ 
                background: `${colors.glass}`,
                color: colors.primary 
              }}
              aria-label="Toggle mobile menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium rounded-md transition-all duration-300 ${
                    location.pathname === item.path ? 'text-current' : 'hover:text-current'
                  }`}
                  style={{ 
                    color: location.pathname === item.path ? colors.primary : colors.text,
                    backgroundColor: location.pathname === item.path ? `${colors.primary}20` : 'transparent'
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/profile"
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium rounded-md transition-all duration-300"
                style={{ color: colors.text }}
              >
                Profile Settings
              </Link>
            </div>
          </div>
        )}

        {/* Mobile Theme Selector */}
        {showThemeSelector && (
          <div className="md:hidden mt-4 p-4 rounded-lg z-50 relative theme-selector" style={{ background: `${colors.glass}` }}>
            <h3 className="text-sm font-semibold mb-3" style={{ color: colors.text }}>
              Choose Theme
            </h3>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((themeOption) => (
                <button
                  key={themeOption.key}
                  onClick={() => {
                    setTheme(themeOption.key);
                    setShowThemeSelector(false);
                  }}
                  className={`flex items-center space-x-2 p-2 rounded-lg transition-all duration-300 ${
                    theme === themeOption.key ? 'ring-2' : ''
                  }`}
                  style={{
                    backgroundColor: theme === themeOption.key ? `${colors.primary}20` : 'transparent',
                    ringColor: theme === themeOption.key ? colors.primary : 'transparent',
                  }}
                >
                  <div className="flex space-x-1">
                    {themeOption.colors.map((color, index) => (
                      <div
                        key={index}
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span className="text-xs" style={{ color: colors.text }}>
                    {themeOption.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;