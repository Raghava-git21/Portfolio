import React from 'react';
import { Terminal, Cpu, Layers, Database, Sparkles, Wrench } from 'lucide-react';

export default function Skills({ theme, portfolioData, accentHex }) {
  // Group existing skills and related core proficiencies into clean domain groups
  const skillGroups = [
    {
      title: "Core Languages",
      icon: <Terminal size={18} className="text-[var(--accent)]" />,
      description: "Foundational programming & scripting",
      skills: portfolioData.skills?.languages || ['Python', 'JavaScript', 'HTML5/CSS3']
    },
    {
      title: "Frontend & UI Systems",
      icon: <Layers size={18} className="text-sky-400" />,
      description: "Interactive interfaces & design engineering",
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Vite', 'Responsive UI']
    },
    {
      title: "AI, ML & Computer Vision",
      icon: <Cpu size={18} className="text-emerald-400" />,
      description: "Intelligent pipelines & algorithmic models",
      skills: ['PyTorch', 'TensorFlow', 'OpenCV', 'Scikit-learn', 'TF-IDF / NLP', 'CNN / YOLO']
    },
    {
      title: "Backend, Data & Tooling",
      icon: <Database size={18} className="text-amber-400" />,
      description: "Data integrity, concurrency & developer workflow",
      skills: ['Node.js', 'Prisma ORM', 'MySQL', 'Redis Mutex', 'Git & GitHub', 'Gradio']
    }
  ];

  return (
    <section id="skills" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-0.5 bg-[var(--accent)]" />
          <span className="text-xs font-mono-code uppercase tracking-widest text-[var(--accent)]">
            Capabilities
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
          Technical Stack & Tooling
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[var(--text-muted)] max-w-2xl">
          The engineering building blocks, libraries, and machine learning toolchains used to build fast, reliable products.
        </p>
      </div>

      {/* Grouped Chips Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillGroups.map((group, idx) => (
          <div 
            key={idx}
            className="card-studio p-6 sm:p-7 flex flex-col justify-between hover:border-[var(--accent)]/40 transition-all duration-300"
          >
            <div>
              {/* Group Title & Header */}
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-[var(--border-color)] flex items-center justify-center">
                  {group.icon}
                </div>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-[var(--text-primary)]">
                    {group.title}
                  </h3>
                  <p className="text-xs text-[var(--text-muted)] font-mono-code">
                    {group.description}
                  </p>
                </div>
              </div>

              {/* Grouped Chips */}
              <div className="flex flex-wrap gap-2 pt-5">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="tag-badge text-xs sm:text-sm py-1.5 px-3 hover:scale-105 active:scale-95 transition-transform cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] opacity-70" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
