import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';

const GithubIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function Projects({ styleMode, accentColor, portfolioData, accentHex }) {
  
  // Custom styles for alternating cards to ensure rich coloring
  const projectStyles = [
    {
      card: "bg-white border border-slate-200 rounded-[32px] shadow-sm hover:shadow-md transition-shadow duration-200",
      folderColor: "text-slate-700",
      techBadge: "px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-sm font-bold",
      linkBtn: "p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:scale-110 duration-200 border border-slate-200"
    },
    {
      card: "bg-white border border-slate-200 rounded-[32px] shadow-sm hover:shadow-md transition-shadow duration-200",
      folderColor: "text-slate-700",
      techBadge: "px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-sm font-bold",
      linkBtn: "p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:scale-110 duration-200 border border-slate-200"
    },
    {
      card: "bg-white border border-slate-200 rounded-[32px] shadow-sm hover:shadow-md transition-shadow duration-200",
      folderColor: "text-slate-700",
      techBadge: "px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 border border-slate-200 text-sm font-bold",
      linkBtn: "p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 hover:scale-110 duration-200 border border-slate-200"
    }
  ];

  return (
    <section id="projects" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-purple-300 font-outfit inline-block border-b-2 border-slate-200 pb-2">
            Featured Projects
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
          {portfolioData.projects && portfolioData.projects.length > 0 ? (
            portfolioData.projects.map((project, idx) => {
              // Parse technology strings: "React, CSS, Tailwind" => Array
              const technologies = project.tech 
                ? project.tech.split(',').map(tech => tech.trim()) 
                : [];

              // Alternate styles
              const styleSet = projectStyles[idx % projectStyles.length];

              return (
                <div 
                  key={idx} 
                  className={`${styleSet.card} p-8 flex flex-col h-full hover:scale-[1.02] hover:-rotate-1 transition-all duration-300`}
                >
                  {/* Card Icon & Header */}
                  <div className="flex items-center justify-between mb-6">
                    <Folder 
                      size={42} 
                      strokeWidth={1.2}
                      className={styleSet.folderColor}
                    />
                    <div className="flex items-center gap-2">
                      {project.link && (
                        <a 
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styleSet.linkBtn}
                          title="View Live or Github Project"
                        >
                          {project.link.includes('github.com') ? <GithubIcon size={20} /> : <ExternalLink size={20} />}
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Title (Increased text size) */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 font-outfit text-slate-950">
                    {project.name}
                  </h3>

                  {/* Project Description (Increased text size) */}
                  <p className="text-base sm:text-lg leading-relaxed text-slate-700 mb-6 flex-grow">
                    {project.desc}
                  </p>

                  {/* Tech stack tags (Increased text size & colored tags) */}
                  {technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2 pt-5 border-t border-dashed border-purple-200 dark:border-purple-800/40">
                      {technologies.map((tech, techIdx) => (
                        <span 
                          key={techIdx} 
                          className={styleSet.techBadge}
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
              <p className="text-zinc-400 italic font-light">No projects added yet.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
