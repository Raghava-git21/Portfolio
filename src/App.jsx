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
      name: 'Resume-JD Matcher',
      problem: 'Manually checking a resume against a job description is slow, subjective, and leaves candidates guessing why they get rejected.',
      built: 'A Gradio tool that reads PDF resumes (PyMuPDF), scores text similarity with TF-IDF, and matches skills with boundary-aware regex (Java ≠ JavaScript).',
      output: 'A 0-100 blended score showing matched and missing skills, plus recommendations to improve the resume.',
      desc: 'Problem: Manually checking a resume against a job description is slow, subjective, and leaves candidates guessing why they get rejected.\n\nBuilt: A Gradio tool that reads PDF resumes (PyMuPDF), scores text similarity with TF-IDF, and matches skills with boundary-aware regex (Java ≠ JavaScript).\n\nOutput: A 0-100 blended score showing matched and missing skills, plus recommendations to improve the resume.',
      tech: 'Python, Gradio, PyMuPDF, TF-IDF, Regex',
    },
    {
      name: 'Prajna (AI Temple Management Platform)',
      problem: 'Festival rushes cause double-booked slots, long queues, and slow manual gate checks.',
      built: 'Separate React portals for devotees and staff, on a Node/Prisma/MySQL backend with Redis locks, live slot status, and HMAC-signed QR passes.',
      designFocus: 'Different interfaces for different users (devotee, gate staff, trustee), so each task takes fewer steps.',
      output: 'Instant booking confirmation with a signed QR pass, real-time slot availability, and a staff dashboard for gate verification and crowd monitoring.',
      desc: 'Problem: Festival rushes cause double-booked slots, long queues, and slow manual gate checks.\n\nBuilt: Separate React portals for devotees and staff, on a Node/Prisma/MySQL backend with Redis locks, live slot status, and HMAC-signed QR passes.\n\nDesign focus: Different interfaces for different users (devotee, gate staff, trustee), so each task takes fewer steps.\n\nOutput:Instant booking confirmation with a signed QR pass, real-time slot availability, and a staff dashboard for gate verification and crowd monitoring.',
      tech: 'React, Node.js, Prisma, MySQL, Redis, HMAC QR',
    },
    {
      name: 'Intelligent Defect Detection',
      problem: 'Manual inspection is slow, inconsistent, and easy to get wrong at scale.',
      built: 'Model [e.g. CNN/YOLO] trained on dataset to detect defect types from images.',
      output: 'Defect location, class, and confidence shown in a simple UI or report.',
      desc: 'Problem: Manual inspection is slow, inconsistent, and easy to get wrong at scale.\n\nBuilt: Model [e.g. CNN/YOLO] trained on dataset to detect defect types from images.\n\nOutput: Defect location, class, and confidence shown in a simple UI or report.',
      tech: 'Python, CNN / YOLO, OpenCV, Flask, TensorFlow',
    }
  ],
  links: {
    github: 'https://github.com/Raghava-git21',
    linkedin: 'https://www.linkedin.com/in/p-raja-raghava-b6a4a6293/',
    leetcode: 'https://leetcode.com/u/Raja_3543/',
    email: 'prajaraghava@gmail.com',
    phone: '+91 8712381577',
    resume: '/Raja_Raghava_Reddy_Resume.pdf'
  }
};

const ACCENT_COLOR_MAP = {
  purple: '#d946ef', // vibrant fuchsia/purple
};

export default function App() {
  // Dark theme by default with light mode toggle
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ather_theme') || 'dark';
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('ather_theme', next);
      return next;
    });
  };

  const [portfolioData] = useState(DEFAULT_PORTFOLIO_DATA);
  const accentHex = theme === 'dark' ? '#00f59b' : '#059669';

  return (
    <div className={`${theme} min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 font-body relative overflow-x-hidden`}>
      {/* Subtle industrial grid overlay */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        portfolioData={portfolioData}
        accentHex={accentHex}
      />

      {/* Main content grid */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32 py-10">
        <Hero
          theme={theme}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <Projects
          theme={theme}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <Skills
          theme={theme}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <About
          theme={theme}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
        <Contact
          theme={theme}
          portfolioData={portfolioData}
          accentHex={accentHex}
        />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-[var(--border-color)] text-center text-xs text-[var(--text-muted)]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {portfolioData.name}. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Designed with precision</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)]" />
            <span>AI & Industrial Design Engineering</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
