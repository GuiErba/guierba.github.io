'use client';

import { ArrowRight, ArrowUpRight, Github, X } from 'lucide-react';
import { useEffect } from 'react';
import type { CaseStudy } from '@/data/portfolio';

interface CaseStudyModalProps {
  study: CaseStudy;
  onClose: () => void;
}

export function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  const sectionLabel = (text: string, num: string) => (
    <div className="flex items-center gap-4 mb-8">
      <span className="font-mono text-accent text-[0.68rem] tracking-[0.14em] uppercase">
        {num}
      </span>
      <span className="font-mono text-text-darker text-[0.72rem] tracking-[0.08em] uppercase">
        {text}
      </span>
      <div className="h-px flex-1 bg-border" />
    </div>
  );

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
    >
      <div className="w-full max-w-3xl mx-auto px-6 py-16 relative">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="fixed top-6 right-6 z-[110] w-10 h-10 rounded-full border border-white/10 bg-[#111] flex items-center justify-center cursor-pointer transition-colors duration-200 hover:border-white/25"
        >
          <X size={16} className="text-text-secondary" />
        </button>

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-accent text-[0.68rem] tracking-[0.14em] uppercase">
            {study.index}
          </span>
          <p className="font-mono text-text-dark text-[0.65rem] tracking-[0.08em] uppercase mt-2 mb-3">
            {study.category}
          </p>
          <h2 className="text-[clamp(1.4rem,3vw,2rem)] font-semibold text-white tracking-[-0.03em] leading-[1.15] mb-4">
            {study.title}
          </h2>
          <p className="text-[0.9rem] text-text-muted leading-[1.8] max-w-xl">
            {study.tagline}
          </p>

          <div className="flex items-center gap-4 mt-6">
            <a
              href={study.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-[0.68rem] text-text-darker tracking-[0.06em] no-underline transition-colors duration-200 hover:text-text-secondary"
            >
              <Github size={14} /> Source
            </a>
            <a
              href={study.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-[0.68rem] text-text-darker tracking-[0.06em] no-underline transition-colors duration-200 hover:text-text-secondary"
            >
              <ArrowUpRight size={14} /> Demo
            </a>
          </div>
        </div>

        {/* Problem */}
        {sectionLabel(study.problem.heading, '01')}
        <div className="space-y-4 mb-10">
          {study.problem.body.map((p) => (
            <p
              key={p.slice(0, 30)}
              className="text-[0.875rem] text-text-muted leading-[1.85]"
            >
              {p}
            </p>
          ))}
          {study.problem.callout && (
            <div
              className="mt-6 py-4 px-5 rounded-r-sm"
              style={{
                background: 'rgba(74,222,128,0.04)',
                borderLeft: '2px solid rgba(74,222,128,0.4)',
              }}
            >
              <p className="text-[0.82rem] text-accent/80 leading-[1.7] italic">
                {study.problem.callout}
              </p>
            </div>
          )}
        </div>

        {/* Decision */}
        {sectionLabel(study.decision.heading, '02')}
        <div className="space-y-4 mb-8">
          {study.decision.body.map((p) => (
            <p
              key={p.slice(0, 30)}
              className="text-[0.875rem] text-text-muted leading-[1.85]"
            >
              {p}
            </p>
          ))}
        </div>
        <div className="space-y-3 mb-10">
          {study.decision.options.map((opt) => (
            <div
              key={opt.label}
              className="p-4 rounded-[4px] border"
              style={{
                borderColor: opt.chosen
                  ? 'rgba(74,222,128,0.25)'
                  : 'rgba(255,255,255,0.05)',
                background: opt.chosen ? 'rgba(74,222,128,0.03)' : '#0a0a0a',
              }}
            >
              <div className="flex items-center gap-2 mb-2">
                {opt.chosen && (
                  <span className="font-mono text-accent text-[0.6rem] tracking-[0.1em] uppercase border border-accent/30 px-2 py-0.5 rounded-sm">
                    Chosen
                  </span>
                )}
                <span className="text-[0.84rem] font-medium text-white">
                  {opt.label}
                </span>
              </div>
              <p className="text-[0.8rem] text-text-muted leading-[1.7]">
                {opt.reason}
              </p>
            </div>
          ))}
        </div>

        {/* Tradeoffs */}
        {sectionLabel(study.tradeoffs.heading, '03')}
        <div className="space-y-4 mb-10">
          {study.tradeoffs.items.map((item) => (
            <div
              key={item.tension}
              className="p-4 border border-border rounded-[4px] bg-background-alt"
            >
              <p className="text-[0.84rem] font-medium text-white mb-2">
                {item.tension}
              </p>
              <p className="text-[0.8rem] text-text-muted leading-[1.7]">
                {item.resolution}
              </p>
            </div>
          ))}
        </div>

        {/* Results */}
        {sectionLabel(study.results.heading, '04')}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {study.results.metrics.map((m) => (
            <div
              key={m.label}
              className="p-4 border border-border rounded-[4px] bg-background text-center"
            >
              <div className="text-xl font-semibold text-white mb-1">
                {m.value}
              </div>
              <div className="font-mono text-[0.63rem] text-text-dark tracking-[0.06em] mb-1">
                {m.label}
              </div>
              {m.delta && (
                <div className="font-mono text-[0.6rem] text-accent/70">
                  {m.delta}
                </div>
              )}
            </div>
          ))}
        </div>
        <p className="text-[0.875rem] text-text-muted leading-[1.85] mb-10">
          {study.results.body}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-10">
          {study.stack.map((t) => (
            <span
              key={t}
              className="font-mono text-[0.65rem] text-text-dark border border-white/[0.06] px-2.5 py-0.5 rounded-sm tracking-[0.04em]"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Back button */}
        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 font-mono text-[0.75rem] text-text-muted tracking-[0.05em] bg-transparent border-none cursor-pointer transition-colors duration-200 hover:text-white"
        >
          <ArrowRight size={13} className="rotate-180" /> Back to projects
        </button>
      </div>
    </div>
  );
}
