import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const DEFAULT_PORTFOLIO_DATA = {
  name: 'P.Raja Raghava Reddy',
  title: 'Full Stack Developer and ML Engineer',
  about: 'I am a passionate software developer specializing in building modern, interactive, and user-centric web applications. I love turning complex problems into elegant designs with clean code. Currently, I am focused on mastering React, Tailwind CSS, and exploring interactive motion graphics.',
  skills: {
    languages: ['Python', 'JavaScript', 'HTML5/CSS3'],
    frameworks: ['React.js', 'Next.js', 'Tailwind CSS', 'Node.js', 'Git & GitHub'],

  },
  projects: [
    {
      name: 'Prajna',
      desc: 'A religious tourism and temple management domain associated with helping users discover temples, view cultural and historical details, and allowing admins to manage temple information through a web-based platform.',
      tech: 'React, FastAPI, PostgreSQL, Tailwind',
      link: 'https://prajna-frontend.onrender.com/'
    },
    {
      name: 'Tic-Tac-Toe Game',
      desc: 'A classic Tic-Tac-Toe game built with React, allowing two players to play against each other in a web browser.',
      tech: 'React, Tailwind CSS, Chart.js',
      link: 'https://github.com/raghu/dashboard'
    },
    {
      name: 'Smart Voice Recognition System',
      desc: 'A voice recognition system that can identify and respond to specific voice commands, built using Python and machine learning techniques.',
      tech: 'Python, PyTorch,SpeechBrain 1.0.0 — ECAPA-TDNN speaker embeddings',
      link: 'https://github.com/Raghava-git21/Voice-Recognition'
    }
  ],
  links: {
    github: 'https://github.com/Raghava-git21',
    linkedin: 'https://www.linkedin.com/in/p-raja-raghava-b6a4a6293/',
    email: 'prajaraghava@gmail.com',
    phone: '+91 8712381577',
    resume: 'Raghava_Resume.pdf'
  }
};

const ACCENT_COLOR_MAP = {
  purple: '#d946ef', // vibrant fuchsia/purple
};

export default function App() {
  // Lock styleMode to playful (our colorful layout engine)
  const styleMode = 'playful';
  const accentColor = 'purple';
  const accentHex = '#d946ef';

  const [portfolioData] = useState(DEFAULT_PORTFOLIO_DATA);

  // Fixed application background and text palette
  const getAppWrapperClasses = () => {
    return 'font-outfit style-playful min-h-screen bg-[#041d4f] text-white transition-colors duration-500 pb-10';
  };

  return (
    <div
      className={getAppWrapperClasses()}
      style={{
        '--accent-color': accentHex,
        '--accent-light': `${accentHex}1a`
      }}
    >
      <style dangerouslySetInnerHTML={{
        __html: `
        :root {
          --accent-primary: ${accentHex};
          --accent-secondary: #c084fc;
          --scroll-bg: #f3e8ff;
        }
        .text-accent { color: ${accentHex} !important; }
        .bg-accent { background-color: ${accentHex} !important; }
        .border-accent { border-color: ${accentHex} !important; }
      `}} />

      {/* Navigation */}
      <Navbar
        styleMode={styleMode}
        accentColor={accentColor}
        portfolioData={portfolioData}
        accentHex={accentHex}
      />

      {/* Main content grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero
          styleMode={styleMode}
          accentColor={accentColor}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <About
          styleMode={styleMode}
          accentColor={accentColor}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <Skills
          styleMode={styleMode}
          accentColor={accentColor}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <Projects
          styleMode={styleMode}
          accentColor={accentColor}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <Contact
          styleMode={styleMode}
          accentColor={accentColor}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
      </main>

      {/* Footer */}
      <footer className="py-10 border-t border-dashed border-purple-300/30 text-center text-sm font-medium">
        <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
        <p className="mt-1 text-slate-500 text-xs">
          Built with React & Tailwind CSS. Designed in a clean, modern aesthetic.
        </p>
      </footer>
    </div>
  );
}
