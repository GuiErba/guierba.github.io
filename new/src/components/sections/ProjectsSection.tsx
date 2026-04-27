'use client';

import { ArrowRight, ArrowUpRight, BookOpen, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { CaseStudyModal } from '@/components/CaseStudyModal';
import { SectionHeader } from '@/components/SectionHeader';
import { Tag } from '@/components/Tag';
import { featuredProjects, paymentEngineCaseStudy } from '@/data/portfolio';

export function ProjectsSection() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <section
      id="projects"
      className="py-28 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Featured Projects">
          <Link
            href="/projects"
            className="flex items-center gap-1 shrink-0 font-mono text-[0.68rem] text-accent tracking-[0.08em] no-underline opacity-70 transition-opacity duration-200 hover:opacity-100"
          >
            View all <ArrowUpRight size={13} />
          </Link>
        </SectionHeader>

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col transition-colors duration-300 cursor-default p-8"
              style={{
                background: hovered === project.id ? '#0f0f0f' : '#080808',
              }}
              onMouseEnter={() => setHovered(project.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex justify-between items-start mb-4">
                <span
                  className="font-mono text-[0.68rem] tracking-[0.1em] transition-colors duration-300"
                  style={{
                    color: hovered === project.id ? '#4ADE80' : '#3f3f46',
                  }}
                >
                  {project.index}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-darker transition-colors duration-200 hover:text-text-secondary"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-darker transition-colors duration-200 hover:text-text-secondary"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>

              <p className="font-mono text-[0.65rem] text-text-dark tracking-[0.08em] uppercase mb-2">
                {project.category}
              </p>

              <h3 className="text-base font-semibold text-white tracking-[-0.02em] mb-3 leading-[1.3]">
                {project.title}
              </h3>

              <p className="text-[0.83rem] text-text-muted leading-[1.75] mb-4 flex-1">
                {project.description}
              </p>

              <div
                className="mb-4 py-2 px-3 rounded-r-sm"
                style={{
                  background: 'rgba(74,222,128,0.04)',
                  borderLeft: '2px solid rgba(74,222,128,0.35)',
                }}
              >
                <p className="font-mono text-[0.66rem] text-accent">
                  {project.highlight}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>

              {project.hasCaseStudy && (
                <button
                  type="button"
                  onClick={() => setCaseStudyOpen(true)}
                  className="flex items-center gap-2 mt-1 w-fit font-mono text-[0.68rem] tracking-[0.07em] text-accent bg-accent/5 border border-accent/[0.18] rounded-[3px] px-3.5 py-1.5 cursor-pointer transition-all duration-200 hover:bg-accent/[0.12] hover:border-accent/45"
                >
                  <BookOpen size={12} />
                  Case Study
                </button>
              )}
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="flex items-center gap-2 border border-white/[0.08] text-text-secondary px-7 py-3 text-[0.825rem] rounded-[4px] no-underline font-medium transition-all duration-200 hover:border-white/20 hover:text-white"
          >
            View all 6 projects <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {caseStudyOpen && (
        <CaseStudyModal
          study={paymentEngineCaseStudy}
          onClose={() => setCaseStudyOpen(false)}
        />
      )}
    </section>
  );
}
