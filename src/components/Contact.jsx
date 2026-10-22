import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

export default function Contact({ theme, portfolioData, accentHex }) {
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

  return (
    <section id="contact" className="relative scroll-mt-24 pb-8">
      {/* Section Header */}
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-4 h-0.5 bg-[var(--accent)]" />
          <span className="text-xs font-mono-code uppercase tracking-widest text-[var(--accent)]">
            Communication
          </span>
          <span className="w-4 h-0.5 bg-[var(--accent)]" />
        </div>
        <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight text-[var(--text-primary)]">
          Let’s Build Something High-Impact
        </h2>
        <p className="mt-3 text-base sm:text-lg text-[var(--text-muted)]">
          Interested in discussing AI tools for designers, full-stack systems, or internship opportunities? Leave a note below.
        </p>
      </div>

      {/* Centered Message Form Card */}
      <div className="max-w-2xl mx-auto card-studio p-7 sm:p-10">
        {submitted ? (
          <div className="py-12 text-center flex flex-col items-center justify-center">
            <CheckCircle size={44} className="text-[var(--accent)] mb-3 animate-pulse" />
            <h4 className="font-heading text-xl font-bold text-[var(--text-primary)] mb-1">
              Message Dispatched
            </h4>
            <p className="text-sm text-[var(--text-muted)] max-w-sm">
              Thank you for reaching out, {form.name || 'friend'}. I will get back to you shortly at {form.email || 'your email'}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Maya Iyer"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                  Your Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. maya@domain.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-code uppercase tracking-wider text-[var(--text-muted)] mb-1.5">
                Message Details
              </label>
              <textarea
                required
                rows={5}
                placeholder="Share details about the project, design workflow, or role..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-color)] text-sm text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:border-[var(--accent)] transition-all resize-none"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="btn-primary w-full sm:w-auto"
              >
                <span>Transmit Message</span>
                <Send size={15} />
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
