import React from 'react';
import { Sparkles, Terminal, Code, Heart } from 'lucide-react';

export default function About({ styleMode, accentColor, portfolioData, accentHex }) {

  const getBadgeIcon = (index) => {
    const size = 24;
    switch (index) {
      case 0: return <Terminal size={size} className="text-inherit" />;
      case 1: return <Code size={size} className="text-inherit" />;
      case 2: return <Sparkles size={size} className="text-inherit" />;
      default: return <Heart size={size} className="text-inherit" />;
    }
  };

  // Group colors: blue, purple, emerald
  const details = [
    {
      title: "My Philosophy",
      desc: "Coding is more than just making interfaces work. It's about designing seamless digital journeys that make users' daily lives simpler and more delightful.",
      bg: "bg-slate-50 text-slate-700 border-slate-200"
    },
    {
      title: "Core Stack Focus",
      desc: "Specialized in modular React interfaces, responsive CSS setups, API designs, and building pixel perfect applications with performant backends.",
      bg: "bg-slate-50 text-slate-700 border-slate-200"
    },
    {
      title: "Active Learning",
      desc: "Actively learning and exploring Machine Learning and Artificial Intelligence through projects, coursework, and hands-on experimentation.",
      bg: "bg-slate-50 text-slate-700 border-slate-200"
    }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-b-2 border-dashed border-purple-300/30">
      <div className="max-w-7xl mx-auto">

        {/* Section Heading (Increased font size + colorful highlight) */}
        <div className="text-center md:text-left mb-16">
          <h2 className="text-5xl sm:text-6xl font-black text-purple-300 font-outfit inline-block border-b-2 border-slate-200 pb-2">
            About Me
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Text (Increased font size & colorful card wrapper) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white border border-slate-200 p-8 sm:p-10 rounded-[36px] shadow-sm hover:shadow-md transition-shadow duration-200">
              <h3
                className="text-2xl sm:text-3xl font-extrabold mb-6 font-outfit text-slate-950"
              >
                Who I Am
              </h3>
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-950">
                {portfolioData.about}
              </p>
              <p className="text-lg sm:text-xl font-medium leading-relaxed mt-6 text-slate-700">
                I love bridging the gap between design and engineering—combining aesthetic sensibility with robust technical implementation. Whether crafting interactive UI grids, tweaking responsive styles, or tuning backend routes, I strive for clean, user-centric solutions.
              </p>
            </div>
          </div>

          {/* Core Focus Areas (Increased font size & colorful badges) */}
          <div className="lg:col-span-5 space-y-5">
            {details.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 border-2 rounded-3xl shadow-sm hover:scale-[1.02] transition-transform duration-200 flex gap-5 items-start ${item.bg}`}
              >
                <div
                  className="p-3.5 rounded-2xl bg-white dark:bg-slate-900 border-2 border-inherit text-inherit flex-shrink-0 shadow-sm"
                >
                  {getBadgeIcon(idx)}
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-extrabold mb-2 font-outfit text-slate-950">
                    {item.title}
                  </h4>
                  <p className="text-sm sm:text-base font-semibold leading-relaxed opacity-90 text-slate-700">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
