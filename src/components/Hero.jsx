import React from 'react';
import { Mail, FileText, ArrowRight } from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const TwitterIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

export default function Hero({ styleMode, accentColor, portfolioData, accentHex }) {
  
  const getSocialIcon = (key) => {
    switch (key) {
      case 'github': return <GithubIcon size={24} />;
      case 'linkedin': return <LinkedinIcon size={24} />;
      case 'twitter': return <TwitterIcon size={24} />;
      case 'email': return <Mail size={24} />;
      default: return null;
    }
  };

  return (
    <section id="home" className="relative min-h-[calc(100vh-96px)] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-dots overflow-hidden">
      {/* Dynamic Animated Colorful Background Blobs */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-slow-1" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl pointer-events-none animate-pulse-slow-2" />
      <div className="absolute top-1/2 left-2/3 w-80 h-80 bg-cyan-200/25 rounded-full blur-3xl pointer-events-none animate-pulse-slow-3" />

      {/* Hero Card Container */}
      <div className="max-w-4xl w-full text-center bg-white border border-slate-200 p-8 sm:p-12 md:p-16 rounded-[40px] shadow-[12px_12px_0px_0px_rgba(148,163,184,0.12)] relative z-10 hover:scale-[1.01] transition-transform duration-300">
        
        {/* Colorful Welcome Badge */}
        <div className="inline-block px-5 py-2.5 rounded-2xl text-sm font-extrabold uppercase tracking-wider mb-8 bg-slate-100 text-slate-900 shadow-sm">
          Welcome to my space 👋
        </div>

        {/* Large Name Header */}
        <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-slate-950 leading-none mb-6">
          {portfolioData.name}
        </h1>

        {/* Subtitle / Role (Increased font size) */}
        <div className="flex justify-center mb-8">
          <span 
            className="text-2xl sm:text-4xl font-extrabold text-slate-950 font-outfit uppercase tracking-wide border-b-4 border-dashed border-slate-300 pb-1"
          >
            {portfolioData.title}
          </span>
        </div>

        {/* Short Bio (Increased font size) */}
        <p className="text-lg sm:text-2xl leading-relaxed text-slate-700 font-medium mb-10">
          {portfolioData.about}
        </p>

        {/* Buttons / CTAs (Increased dimensions) */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-10">
          <a
            href="#projects"
            className="px-10 py-5 text-white rounded-2xl text-lg font-extrabold shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
            style={{ backgroundColor: accentHex }}
          >
            View Projects
            <ArrowRight size={22} />
          </a>
          <a
            href={portfolioData.links.resume || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-slate-100 text-slate-900 border border-slate-200 rounded-2xl text-lg font-extrabold hover:bg-slate-200 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <FileText size={22} />
            Resume
          </a>
        </div>

        {/* Social Links (Increased size and color variety) */}
        <div className="flex gap-4 pt-8 border-t border-dashed border-purple-200 dark:border-purple-800/40 justify-center">
          {Object.entries(portfolioData.links).map(([key, url]) => {
            if (!url || key === 'resume' || !getSocialIcon(key)) return null;
            
            // Format mailto for email
            const href = key === 'email' ? `mailto:${url}` : url;
            
            // Assign custom vibrant background colors based on platform
            const bgColors = {
              github: 'bg-indigo-150 hover:bg-indigo-200 text-indigo-700 dark:bg-indigo-900/40 dark:hover:bg-indigo-900/60 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800',
              linkedin: 'bg-blue-150 hover:bg-blue-200 text-blue-700 dark:bg-blue-900/40 dark:hover:bg-blue-900/60 dark:text-blue-300 border-blue-200 dark:border-blue-800',
              twitter: 'bg-sky-150 hover:bg-sky-200 text-sky-700 dark:bg-sky-900/40 dark:hover:bg-sky-900/60 dark:text-sky-350 border-sky-200 dark:border-sky-800',
              email: 'bg-pink-150 hover:bg-pink-200 text-pink-700 dark:bg-pink-900/40 dark:hover:bg-pink-900/60 dark:text-pink-350 border-pink-200 dark:border-pink-850'
            };

            return (
              <a
                key={key}
                href={href}
                target={key === 'email' ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className={`p-4 rounded-full border-2 shadow-sm hover:scale-110 active:scale-90 hover:rotate-6 duration-200 ${bgColors[key] || 'bg-slate-100 text-slate-700 border-slate-200'}`}
                title={key.charAt(0).toUpperCase() + key.slice(1)}
              >
                {getSocialIcon(key)}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
