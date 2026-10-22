import React from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects({ theme, portfolioData, accentHex }) {
  return (
    <section id="projects" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-0.5 bg-[var(--accent)]" />
          <span className="text-xs font-mono-code uppercase tracking-widest text-[var(--accent)]">
            Case Studies
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
          Selected Engineering & AI Tools
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[var(--text-muted)] max-w-2xl">
          High-performance machine learning models, automated workflows, and multi-interface architectures designed with product rigor.
        </p>
      </div>

      {/* Case Study Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {portfolioData.projects && portfolioData.projects.length > 0 ? (
          portfolioData.projects.map((project, idx) => {
            const technologies = project.tech 
              ? project.tech.split(',').map(tech => tech.trim()) 
              : [];
            
            const outputText = project.output || project.Output;
            const designFocusText = project.designFocus || project.design_focus || project['Design focus'];

            return (
              <div 
                key={idx} 
                className="card-studio p-6 sm:p-7 flex flex-col justify-between group hover:border-[var(--accent)]/50 transition-all duration-300"
              >
                <div>
                  {/* Top Bar: Index & Links */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono-code text-[var(--text-muted)]">
                      0{idx + 1} // CASE STUDY
                    </span>
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[var(--accent)] transition-all"
                        title="View Live or Code Repository"
                      >
                        {project.link.includes('github.com') ? <GithubIcon size={16} /> : <ArrowUpRight size={16} />}
                      </a>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-5 tracking-tight group-hover:text-[var(--accent)] transition-colors duration-200">
                    {project.name}
                  </h3>

                  {/* Structured Problem / Built / Output Breakdown */}
                  {project.problem ? (
                    <div className="space-y-4 mb-6 text-sm">
                      {/* Problem */}
                      <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)]/60 border border-[var(--border-color)]">
                        <span className="font-mono-code text-xs uppercase tracking-wider text-rose-400/90 font-semibold block mb-1">
                          Problem
                        </span>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm">
                          {project.problem}
                        </p>
                      </div>

                      {/* Built */}
                      <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)]/60 border border-[var(--border-color)]">
                        <span className="font-mono-code text-xs uppercase tracking-wider text-[var(--accent)] font-semibold block mb-1">
                          Built & Architecture
                        </span>
                        <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm">
                          {project.built}
                        </p>
                      </div>

                      {/* Output */}
                      {outputText && (
                        <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)]/60 border border-[var(--border-color)]">
                          <span className="font-mono-code text-xs uppercase tracking-wider text-sky-400 font-semibold block mb-1">
                            Output & Deliverable
                          </span>
                          <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm">
                            {outputText}
                          </p>
                        </div>
                      )}

                      {/* Design Focus */}
                      {designFocusText && (
                        <div className="p-3.5 rounded-xl bg-[var(--bg-surface-elevated)]/60 border border-[var(--border-color)]">
                          <span className="font-mono-code text-xs uppercase tracking-wider text-amber-400 font-semibold block mb-1">
                            Design Focus
                          </span>
                          <p className="text-[var(--text-secondary)] leading-relaxed text-xs sm:text-sm">
                            {designFocusText}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-sm text-[var(--text-secondary)] mb-6 leading-relaxed">
                      {project.desc}
                    </p>
                  )}
                </div>

                {/* Tech Tags */}
                {technologies.length > 0 && (
                  <div className="pt-4 border-t border-[var(--border-color)] flex flex-wrap gap-1.5">
                    {technologies.map((tech, techIdx) => (
                      <span 
                        key={techIdx} 
                        className="tag-badge text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-[var(--text-muted)] italic font-light">No projects added yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
