import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact({ styleMode, accentColor, portfolioData, accentHex }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => {
        setForm({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 5000);
    }
  };

  const getContainerClasses = () => {
    switch (styleMode) {
      case 'glassmorphism':
        return 'py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white text-slate-950 relative overflow-hidden';
      case 'brutalist':
        return 'py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-black bg-white text-slate-950 font-mono-space';
      case 'playful':
        return 'py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b-2 border-slate-200 bg-white text-slate-950';
      case 'minimal':
      default:
        return 'py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-slate-200 bg-white text-slate-950';
    }
  };

  const getHeadingClasses = () => {
    switch (styleMode) {
      case 'brutalist':
        return 'text-4xl sm:text-5xl font-black uppercase text-purple-300 mb-12 text-left font-bricolage inline-block border-b-6 border-black pb-2';
      case 'playful':
        return 'text-4xl sm:text-5xl font-extrabold text-purple-300 mb-12 text-center font-outfit';
      case 'glassmorphism':
        return 'text-4xl sm:text-5xl font-bold text-purple-300 mb-12 text-center font-outfit';
      case 'minimal':
      default:
        return 'text-3xl sm:text-4xl font-light text-purple-300 mb-12 text-center font-inter tracking-tight';
    }
  };

  const getCardClasses = () => {
    switch (styleMode) {
      case 'glassmorphism':
        return 'bg-white/5 dark:bg-zinc-900/30 backdrop-blur-sm border border-white/10 p-6 sm:p-8 rounded-2xl shadow-xl max-w-xl mx-auto';
      case 'brutalist':
        return 'bg-white dark:bg-zinc-900 border-4 border-black dark:border-white p-6 sm:p-8 rounded-none shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] max-w-xl mx-auto';
      case 'playful':
        return 'bg-slate-50 border-2 border-slate-200 p-6 sm:p-8 rounded-3xl shadow-sm max-w-xl mx-auto';
      case 'minimal':
      default:
        return 'border border-zinc-100 dark:border-zinc-900 p-6 sm:p-8 rounded-xl bg-zinc-50/50 dark:bg-zinc-950/50 max-w-xl mx-auto';
    }
  };

  const getInputClasses = () => {
    switch (styleMode) {
      case 'brutalist':
        return 'w-full px-4 py-3 border-2 border-black dark:border-white bg-white dark:bg-zinc-800 text-black dark:text-white font-mono-space focus:outline-none focus:bg-yellow-50 focus:dark:bg-zinc-900 duration-100';
      case 'playful':
        return 'w-full px-4 py-3 rounded-2xl border-2 border-zinc-300 dark:border-zinc-750 bg-zinc-50 dark:bg-zinc-800 focus:outline-none focus:border-teal-400 focus:scale-[1.01] transition-all duration-200 text-zinc-800 dark:text-zinc-100 font-outfit';
      case 'glassmorphism':
        return 'w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all';
      case 'minimal':
      default:
        return 'w-full px-4 py-3 border-b-2 border-zinc-200 dark:border-zinc-800 bg-transparent text-zinc-850 dark:text-zinc-150 focus:outline-none focus:border-zinc-900 dark:focus:border-white transition-colors';
    }
  };

  const getSubmitBtnClasses = () => {
    switch (styleMode) {
      case 'brutalist':
        return 'w-full py-4 bg-yellow-300 dark:bg-yellow-400 text-black border-3 border-black dark:border-white text-sm font-black uppercase tracking-wider shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-0 active:translate-y-0 active:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all flex items-center justify-center gap-2';
      case 'playful':
        return 'w-full py-3 text-white rounded-2xl text-sm font-bold shadow-md hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2';
      case 'glassmorphism':
        return 'w-full py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl text-sm font-semibold backdrop-blur-sm shadow-md transition-all flex items-center justify-center gap-2';
      case 'minimal':
      default:
        return 'w-full py-3 bg-zinc-900 dark:bg-white text-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-100 rounded-lg text-sm font-medium transition-all flex items-center justify-center gap-2';
    }
  };

  return (
    <section id="contact" className={getContainerClasses()}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className={getHeadingClasses()}>
            {styleMode === 'minimal' ? (
              <>
                Let's <span className="font-semibold" style={{ color: accentHex }}>Connect</span>
              </>
            ) : styleMode === 'brutalist' ? (
              '04 // GET_IN_TOUCH'
            ) : (
              'Get In Touch'
            )}
          </h2>
          <p className={`text-sm sm:text-base max-w-lg mx-auto mb-10 ${
            styleMode === 'glassmorphism' 
              ? 'text-zinc-400' 
              : styleMode === 'brutalist' 
              ? 'text-zinc-700 dark:text-zinc-400 font-mono-space' 
              : 'text-zinc-550 dark:text-zinc-400'
          }`}>
            Have an exciting project, a role opening, or just want to chat? Drop a message and I will reply as soon as possible!
          </p>
        </div>

        <div className={getCardClasses()}>
          {submitted ? (
            <div className="text-center py-10 flex flex-col items-center justify-center">
              <CheckCircle 
                size={48} 
                className={`mb-4 animate-bounce ${styleMode === 'brutalist' ? 'text-black dark:text-white' : ''}`}
                style={styleMode !== 'brutalist' ? { color: accentHex } : {}}
              />
              <h3 className={`text-lg font-bold mb-2 ${styleMode === 'brutalist' ? 'uppercase' : 'font-outfit'}`}>
                Message Sent!
              </h3>
              <p className="text-sm text-zinc-550 dark:text-zinc-400">
                Thank you for reaching out, {form.name || 'friend'}. I will get back to you shortly at {form.email || 'your email'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className={`block text-xs font-semibold mb-2 ${
                  styleMode === 'brutalist' ? 'uppercase font-mono-space text-black dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                }`}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={getInputClasses()}
                />
              </div>

              {/* Email Field */}
              <div>
                <label className={`block text-xs font-semibold mb-2 ${
                  styleMode === 'brutalist' ? 'uppercase font-mono-space text-black dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                }`}>
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={getInputClasses()}
                />
              </div>

              {/* Message Field */}
              <div>
                <label className={`block text-xs font-semibold mb-2 ${
                  styleMode === 'brutalist' ? 'uppercase font-mono-space text-black dark:text-white' : 'text-zinc-500 dark:text-zinc-400'
                }`}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project or details..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={getInputClasses()}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className={getSubmitBtnClasses()}
                style={styleMode === 'playful' ? { backgroundColor: accentHex } : {}}
              >
                Send Message
                <Send size={16} />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
