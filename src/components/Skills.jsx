import React from 'react';
import { Terminal, Cpu, Award } from 'lucide-react';

export default function Skills({ styleMode, accentColor, portfolioData, accentHex }) {

  const getCategoryIcon = (index) => {
    const size = 26;
    switch (index) {
      case 0: return <Terminal size={size} />;
      case 1: return <Cpu size={size} />;
      case 2: return <Award size={size} />;
      default: return null;
    }
  };

  // Assign distinct card wrapper styles for each category to enhance colors
  const categories = [
    {
      title: "Languages",
      skills: portfolioData.skills.languages || [],
      cardClass: "bg-white border border-slate-200 rounded-[36px] shadow-sm hover:shadow-md transition-shadow duration-200",
      badgeClass: "px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200",
      color: "text-slate-700"
    },
    {
      title: "Frameworks & Tools",
      skills: portfolioData.skills.frameworks || [],
      cardClass: "bg-white border border-slate-200 rounded-[36px] shadow-sm hover:shadow-md transition-shadow duration-200",
      badgeClass: "px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200",
      color: "text-slate-700"
    },
  ];

  return (
    <section id="skills" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-2 border-dashed border-purple-300/30">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-purple-300 font-outfit inline-block border-b-2 border-slate-200 pb-2">
            Technical Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {categories.map((cat, idx) => (
            <div key={idx} className={`${cat.cardClass} p-8 flex flex-col h-full hover:scale-[1.02] transition-transform duration-200`}>

              {/* Category Header (Increased text size) */}
              <div className="flex items-center gap-3.5 mb-8">
                <div className={cat.color}>
                  {getCategoryIcon(idx)}
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold font-outfit text-slate-950">
                  {cat.title}
                </h3>
              </div>

              {/* Skills badges grid (Increased text size & custom badge colors) */}
              <div className="flex flex-wrap gap-3 mt-auto">
                {cat.skills.length > 0 ? (
                  cat.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className={`rounded-2xl border-2 font-bold text-base sm:text-lg hover:scale-105 transition-transform duration-150 cursor-default ${cat.badgeClass}`}
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <span className="text-base text-zinc-400 italic font-light">No skills added yet.</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
