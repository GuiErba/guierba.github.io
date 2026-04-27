import { ArrowLeft, ArrowUpRight, Github } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { SectionHeader } from '@/components/SectionHeader';
import { Tag } from '@/components/Tag';
import { allProjects } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Projects — Guilherme Erba',
  description:
    'Selected engineering projects: distributed systems, real-time collaboration, observability, and developer tooling.',
};

export default function ProjectsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 pt-28 pb-20">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-[0.75rem] text-text-muted tracking-[0.05em] no-underline mb-12 transition-colors duration-200 hover:text-white"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        <SectionHeader label="All Projects" />

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {allProjects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col p-8 bg-background transition-colors duration-300 hover:bg-[#0f0f0f]"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-[0.68rem] text-text-darker tracking-[0.1em]">
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

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
