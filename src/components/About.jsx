import React from 'react';
import { Sparkles, Terminal, Code, Compass, ArrowRight } from 'lucide-react';

export default function About({ theme, portfolioData, accentHex }) {
  const pillars = [
    {
      title: "Design-Driven Engineering",
      desc: "Software isn't just about logic—it's an interactive physical-digital touchpoint. I design tools with high ergonomics, minimal clicks, and instant feedback.",
      icon: <Compass size={20} className="text-[var(--accent)]" />
    },
    {
      title: "Intelligent Workflows",
      desc: "Leveraging machine learning (CNN, YOLO, NLP, TF-IDF) not for hype, but to automate repetitive manual analysis and accelerate design decisions.",
      icon: <Sparkles size={20} className="text-sky-400" />
    },
    {
      title: "Robust Full-Stack Systems",
      desc: "Building production-grade web systems with React, Node.js, Prisma, and Redis concurrency locks to ensure zero downtime under high load.",
      icon: <Terminal size={20} className="text-amber-400" />
    }
  ];

  return (
    <section id="about" className="relative scroll-mt-24">
      {/* Section Header */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-3">
          <span className="w-4 h-0.5 bg-[var(--accent)]" />
          <span className="text-xs font-mono-code uppercase tracking-widest text-[var(--accent)]">
            Approach & Philosophy
          </span>
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
          Engineering with Design Rigor
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Story Card */}
        <div className="lg:col-span-7 card-studio p-8 sm:p-10 space-y-6">
          <h3 className="font-heading text-2xl font-bold text-[var(--text-primary)]">
            Who I Am & How I Work
          </h3>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
            {portfolioData.about}
          </p>
          <p className="text-base sm:text-lg text-[var(--text-muted)] leading-relaxed">
            I love bridging the gap between design and engineering—combining aesthetic sensibility with robust technical implementation. Whether crafting interactive UI grids, tweaking responsive styles, or tuning backend routes, I strive for clean, user-centric solutions.
          </p>
          <div className="pt-4 border-t border-[var(--border-color)] flex items-center gap-3 text-xs font-mono-code text-[var(--text-muted)]">
            <span className="text-[var(--accent)]">● ACTIVE FOCUS:</span>
            <span>AI Tooling for Designers • Computer Vision • React Systems</span>
          </div>
        </div>

        {/* Focus Pillar Cards */}
        <div className="lg:col-span-5 space-y-4">
          {pillars.map((item, idx) => (
            <div
              key={idx}
              className="card-studio p-5 sm:p-6 flex items-start gap-4 hover:border-[var(--accent)]/30 transition-all duration-200"
            >
              <div className="p-2.5 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h4 className="font-heading text-base sm:text-lg font-bold text-[var(--text-primary)] mb-1">
                  {item.title}
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
