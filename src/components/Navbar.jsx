import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar({ 
  styleMode, 
  accentColor, 
  portfolioData,
  accentHex
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Monitor active sections on scroll (excluding contact)
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  // Fixed blue header style
  const getNavClasses = () => {
    return 'sticky top-0 z-40 bg-sky-100/95 backdrop-blur-md border-b border-sky-200 text-slate-950 transition-all duration-300';
  };

  const getLinkClasses = (itemId) => {
    const isActive = activeSection === itemId;
    return `px-5 py-2.5 rounded-2xl transition-all duration-300 text-md font-bold relative ${
      isActive 
        ? 'text-slate-950 scale-105 shadow-md shadow-sky-200' 
        : 'text-slate-800 hover:text-slate-950 hover:bg-sky-200/70 hover:scale-105'
    }`;
  };

  const getButtonClasses = () => {
    return 'p-3 rounded-2xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white hover:scale-110 active:scale-95 duration-200';
  };

  return (
    <nav className={getNavClasses()}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Logo / Initials */}
          <div className="flex-shrink-0 flex items-center">
            <a 
              href="#home" 
              className="text-2xl sm:text-3xl font-black tracking-tight text-slate-950 dark:text-slate-100 font-outfit rotate-[-2deg] hover:rotate-[2deg] transition-transform duration-200"
            >
            </a>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={getLinkClasses(item.id)}
                style={
                  activeSection === item.id 
                    ? { backgroundColor: accentHex } 
                    : {}
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Action */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={getButtonClasses()}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-3 pt-2 pb-5 space-y-2 bg-white/95 border-t border-slate-200/40">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 text-lg font-bold rounded-2xl transition-all ${
                activeSection === item.id 
                  ? 'text-slate-50 shadow-md bg-slate-900' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900/30 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
