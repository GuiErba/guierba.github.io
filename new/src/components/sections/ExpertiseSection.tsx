'use client';

import { SectionHeader } from '@/components/SectionHeader';
import { Tag } from '@/components/Tag';
import { expertise } from '@/data/portfolio';

export function ExpertiseSection() {
  return (
    <section className="py-24 bg-background-alt border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Expertise" />

        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {expertise.map((item) => (
            <div
              key={item.tag}
              className="bg-background-alt p-9 transition-colors duration-300 hover:bg-[#0f0f0f]"
            >
              <div className="font-mono text-accent text-[0.72rem] tracking-[0.18em] uppercase mb-4">
                {item.tag}
              </div>
              <h3 className="text-[1.05rem] font-semibold text-white tracking-[-0.02em] mb-3">
                {item.title}
              </h3>
              <p className="text-[0.845rem] text-text-muted leading-[1.75] mb-5">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.stack.map((t) => (
                  <Tag key={t} label={t} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
