import React from 'react';
import { Mail, FileText, ArrowRight, Sparkles, Terminal } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const LeetCodeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 4.813 3.593 5.99 5.99 0 0 0 3.864-.992l6.237-6.082a1.376 1.376 0 0 0 .424-.969 1.375 1.375 0 0 0-1.375-1.375 1.377 1.377 0 0 0-.96.425l-5.877 5.73a3.25 3.25 0 0 1-2.096.538 3.235 3.235 0 0 1-2.618-1.954 3.01 3.01 0 0 1-.19-.553 3.003 3.003 0 0 1-.034-1.284 2.868 2.868 0 0 1 .658-1.145l3.85-4.12 5.405-5.788A1.376 1.376 0 0 0 13.483 0z" />
  </svg>
);

export default function Hero({ theme, portfolioData, accentHex }) {
  const socialItems = [
    { key: 'github', label: 'GitHub', url: portfolioData.links.github, icon: <GithubIcon /> },
    { key: 'linkedin', label: 'LinkedIn', url: portfolioData.links.linkedin, icon: <LinkedinIcon /> },
    { key: 'leetcode', label: 'LeetCode', url: portfolioData.links.leetcode, icon: <LeetCodeIcon /> },
    { key: 'email', label: 'Email', url: portfolioData.links.email ? `mailto:${portfolioData.links.email}` : null, icon: <Mail size={18} /> },
  ].filter(item => Boolean(item.url));

  return (
    <section id="home" className="relative pt-8 sm:pt-16 pb-12">
      {/* Subtle background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--accent-glow)] rounded-full blur-3xl pointer-events-none -z-10 opacity-60" />

      <div className="max-w-4xl mx-auto">
        {/* Availability / Specialization Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-surface)] text-xs sm:text-sm font-medium mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
          </span>
          <span className="text-[var(--text-secondary)] font-mono-code">AI Generalist & Design Technologist</span>
        </div>

        {/* Large Confident Headline */}
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--text-primary)] leading-[1.08] mb-6">
          I build AI-powered tools and workflows that make{' '}
          <span className="text-[var(--accent)] underline decoration-[var(--border-color)] underline-offset-8">
            design teams faster
          </span>.
        </h1>

        {/* Context / Bio */}
        <div className="space-y-4 mb-10 max-w-2xl">
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed font-body">
            Hi, I’m <strong className="text-[var(--text-primary)] font-semibold">{portfolioData.name}</strong>, a {portfolioData.title}.
          </p>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            {portfolioData.about}
          </p>
        </div>

        {/* Dual Clear CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 mb-12">
          <a
            href="#projects"
            className="btn-primary group"
          >
            <span>Explore Case Studies</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
          </a>

          <a
            href="#contact"
            className="btn-secondary"
          >
            <span>Get in Touch</span>
          </a>

          {portfolioData.links.resume && (
            <a
              href={portfolioData.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary text-xs sm:text-sm"
              title="Download Resume"
            >
              <FileText size={16} />
              <span>Resume PDF</span>
            </a>
          )}
        </div>

        {/* Minimalist Social Links */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-wrap items-center gap-3">
          <span className="text-xs uppercase tracking-wider font-mono-code text-[var(--text-muted)] mr-2">
            Connect:
          </span>
          {socialItems.map(item => (
            <a
              key={item.key}
              href={item.url}
              target={item.key === 'email' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="tag-badge hover:scale-105 active:scale-95"
              title={item.label}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
