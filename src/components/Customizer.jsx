import React, { useState } from 'react';
import { X, Palette, User, Code, Briefcase, Link, RefreshCcw, Download, Plus, Trash2 } from 'lucide-react';

export default function Customizer({
  isOpen,
  onClose,
  styleMode,
  setStyleMode,
  accentColor,
  setAccentColor,
  portfolioData,
  setPortfolioData,
  resetToDefaults,
  accentHex
}) {
  const [activeTab, setActiveTab] = useState('design');

  if (!isOpen) return null;

  // Tabs layout
  const tabs = [
    { id: 'design', label: 'Design', icon: <Palette size={16} /> },
    { id: 'info', label: 'Profile', icon: <User size={16} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={16} /> },
    { id: 'projects', label: 'Projects', icon: <Briefcase size={16} /> },
    { id: 'links', label: 'Links', icon: <Link size={16} /> }
  ];

  // Helper for updating fields in portfolioData
  const handleUpdate = (section, value) => {
    setPortfolioData(prev => ({
      ...prev,
      [section]: value
    }));
  };

  // Helper for sub-properties (like links)
  const handleNestedUpdate = (section, key, value) => {
    setPortfolioData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value
      }
    }));
  };

  // Manage projects edits
  const handleProjectChange = (index, key, value) => {
    const updatedProjects = [...portfolioData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [key]: value };
    handleUpdate('projects', updatedProjects);
  };

  const addProject = () => {
    const newProject = {
      name: 'New Project',
      desc: 'A brief 1-2 line description of your awesome project.',
      tech: 'React, Tailwind CSS',
      link: 'https://github.com'
    };
    handleUpdate('projects', [...portfolioData.projects, newProject]);
  };

  const removeProject = (index) => {
    const updatedProjects = portfolioData.projects.filter((_, i) => i !== index);
    handleUpdate('projects', updatedProjects);
  };

  // Export JSON configuration file
  const exportConfig = () => {
    const configData = {
      styleMode,
      accentColor,
      portfolioData
    };
    const blob = new Blob([JSON.stringify(configData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${portfolioData.name.toLowerCase().replace(/\s+/g, '_')}_portfolio_config.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Selectable Accents list
  const accents = [
    { id: 'blue', label: 'Electric Blue', hex: '#3b82f6', bg: 'bg-blue-500' },
    { id: 'teal', label: 'Teal Aura', hex: '#0d9488', bg: 'bg-teal-600' },
    { id: 'purple', label: 'Neon Purple', hex: '#8b5cf6', bg: 'bg-purple-500' },
    { id: 'green', label: 'Emerald Mint', hex: '#10b981', bg: 'bg-emerald-500' },
    { id: 'amber', label: 'Sunset Amber', hex: '#f59e0b', bg: 'bg-amber-500' }
  ];

  // Selectable Style Modes list
  const styles = [
    { id: 'minimal', label: 'Minimalist', desc: 'Clean font, white space, light borders' },
    { id: 'glassmorphism', label: 'Glassmorphism', desc: 'Backdrop blur, frosted cards, glow blooms' },
    { id: 'brutalist', label: 'Neo-Brutalism', desc: 'High contrast, black outlines, solid offset shadows' },
    { id: 'playful', label: 'Playful & Bold', desc: 'Soft rounded corners, bouncy scales, vibrant tags' }
  ];

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full sm:w-96 bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col h-full text-zinc-800 dark:text-zinc-100 font-inter">
      {/* Header */}
      <div className="p-4 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between bg-zinc-50 dark:bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <Palette size={20} style={{ color: accentHex }} />
          <h2 className="text-md font-bold uppercase tracking-wide">Customize Portfolio</h2>
        </div>
        <button 
          onClick={onClose} 
          className="p-1.5 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-all"
        >
          <X size={20} />
        </button>
      </div>

      {/* Tabs list */}
      <div className="flex border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/20 overflow-x-auto scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-1.5 px-4 py-3 border-b-2 text-xs font-bold uppercase tracking-wider transition-all flex-shrink-0 ${
              activeTab === tab.id
                ? 'border-zinc-900 dark:border-white text-zinc-950 dark:text-white bg-white dark:bg-zinc-950/20'
                : 'border-transparent text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-300'
            }`}
            style={activeTab === tab.id ? { borderBottomColor: accentHex } : {}}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Form Scrollable area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 text-sm">
        
        {/* DESIGN TAB */}
        {activeTab === 'design' && (
          <div className="space-y-6">
            {/* Style Selector */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Layout Style</h3>
              <div className="space-y-2">
                {styles.map(sty => (
                  <button
                    key={sty.id}
                    onClick={() => setStyleMode(sty.id)}
                    className={`w-full text-left p-3 border rounded-xl transition-all duration-200 ${
                      styleMode === sty.id
                        ? 'border-zinc-900 dark:border-white bg-zinc-50 dark:bg-zinc-900 ring-2 ring-zinc-900/10'
                        : 'border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700'
                    }`}
                    style={styleMode === sty.id ? { borderColor: accentHex } : {}}
                  >
                    <div className="font-bold text-sm text-zinc-900 dark:text-white">{sty.label}</div>
                    <div className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{sty.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Accent Color Selector */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-3">Accent Color</h3>
              <div className="grid grid-cols-5 gap-2">
                {accents.map(acc => (
                  <button
                    key={acc.id}
                    onClick={() => setAccentColor(acc.id)}
                    className={`h-10 rounded-xl relative flex items-center justify-center border-2 transition-all ${
                      acc.bg
                    } ${
                      accentColor === acc.id 
                        ? 'border-zinc-900 dark:border-white scale-105 shadow-md' 
                        : 'border-transparent opacity-80 hover:opacity-100'
                    }`}
                    title={acc.label}
                  >
                    {accentColor === acc.id && (
                      <div className="w-2.5 h-2.5 rounded-full bg-white shadow-sm" />
                    )}
                  </button>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* PROFILE TAB */}
        {activeTab === 'info' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Full Name</label>
              <input
                type="text"
                value={portfolioData.name}
                onChange={(e) => handleUpdate('name', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Role / Subtitle</label>
              <input
                type="text"
                value={portfolioData.title}
                onChange={(e) => handleUpdate('title', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">About Bio</label>
              <textarea
                rows={5}
                value={portfolioData.about}
                onChange={(e) => handleUpdate('about', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs leading-relaxed"
              />
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Languages (comma separated)</label>
              <input
                type="text"
                value={portfolioData.skills.languages.join(', ')}
                onChange={(e) => handleNestedUpdate('skills', 'languages', e.target.value.split(',').map(s => s.trim()))}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Frameworks & Tools (comma separated)</label>
              <input
                type="text"
                value={portfolioData.skills.frameworks.join(', ')}
                onChange={(e) => handleNestedUpdate('skills', 'frameworks', e.target.value.split(',').map(s => s.trim()))}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Other / Soft Skills (comma separated)</label>
              <input
                type="text"
                value={portfolioData.skills.other.join(', ')}
                onChange={(e) => handleNestedUpdate('skills', 'other', e.target.value.split(',').map(s => s.trim()))}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
          </div>
        )}

        {/* PROJECTS TAB */}
        {activeTab === 'projects' && (
          <div className="space-y-5">
            <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-2">
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400">Manage Projects</h3>
              <button
                onClick={addProject}
                className="flex items-center gap-1 text-xs px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 hover:dark:bg-zinc-700 font-bold transition-all text-zinc-700 dark:text-zinc-200"
              >
                <Plus size={14} /> Add
              </button>
            </div>

            <div className="space-y-4">
              {portfolioData.projects.map((proj, idx) => (
                <div key={idx} className="p-3 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-zinc-50/50 dark:bg-zinc-900/30 relative group">
                  <button
                    onClick={() => removeProject(idx)}
                    className="absolute top-2 right-2 p-1 text-zinc-400 hover:text-red-500 rounded hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
                    title="Delete Project"
                  >
                    <Trash2 size={14} />
                  </button>

                  <div className="space-y-2.5">
                    <div>
                      <label className="block text-[10px] font-bold uppercase text-zinc-400">Project Name</label>
                      <input
                        type="text"
                        value={proj.name}
                        onChange={(e) => handleProjectChange(idx, 'name', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:outline-none text-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase text-zinc-400">Short Description</label>
                      <textarea
                        rows={2}
                        value={proj.desc}
                        onChange={(e) => handleProjectChange(idx, 'desc', e.target.value)}
                        className="w-full px-2 py-1 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:outline-none text-xs leading-relaxed"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-zinc-400">Tech Stack (CSV)</label>
                        <input
                          type="text"
                          value={proj.tech}
                          placeholder="React, CSS"
                          onChange={(e) => handleProjectChange(idx, 'tech', e.target.value)}
                          className="w-full px-2 py-1 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:outline-none text-xs"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-bold uppercase text-zinc-400">Link URL</label>
                        <input
                          type="text"
                          value={proj.link}
                          placeholder="GitHub or live link"
                          onChange={(e) => handleProjectChange(idx, 'link', e.target.value)}
                          className="w-full px-2 py-1 border border-zinc-200 dark:border-zinc-800 rounded bg-transparent focus:outline-none text-xs"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SOCIAL LINKS TAB */}
        {activeTab === 'links' && (
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">GitHub URL</label>
              <input
                type="text"
                value={portfolioData.links.github}
                onChange={(e) => handleNestedUpdate('links', 'github', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">LinkedIn URL</label>
              <input
                type="text"
                value={portfolioData.links.linkedin}
                onChange={(e) => handleNestedUpdate('links', 'linkedin', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Twitter / X URL</label>
              <input
                type="text"
                value={portfolioData.links.twitter}
                onChange={(e) => handleNestedUpdate('links', 'twitter', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Email Address</label>
              <input
                type="email"
                value={portfolioData.links.email}
                onChange={(e) => handleNestedUpdate('links', 'email', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1.5">Resume Link (Optional)</label>
              <input
                type="text"
                value={portfolioData.links.resume}
                placeholder="Google Drive link or # placeholder"
                onChange={(e) => handleNestedUpdate('links', 'resume', e.target.value)}
                className="w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 rounded-xl bg-transparent focus:outline-none focus:border-zinc-900 dark:focus:border-zinc-100 text-xs"
              />
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between gap-3 bg-zinc-50 dark:bg-zinc-900/50">
        <button
          onClick={resetToDefaults}
          className="flex items-center justify-center gap-1.5 py-2 px-3 border border-zinc-200 dark:border-zinc-800 rounded-xl text-xs font-bold hover:bg-zinc-200 hover:dark:bg-zinc-850 hover:text-zinc-950 dark:hover:text-white transition-all"
        >
          <RefreshCcw size={14} />
          Reset
        </button>
        <button
          onClick={exportConfig}
          className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 text-white rounded-xl text-xs font-bold shadow-md hover:scale-105 active:scale-95 transition-all"
          style={{ backgroundColor: accentHex }}
        >
          <Download size={14} />
          Export JSON Config
        </button>
      </div>
    </div>
  );
}
