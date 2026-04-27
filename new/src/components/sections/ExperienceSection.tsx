import { SectionHeader } from '@/components/SectionHeader';
import { Tag } from '@/components/Tag';
import { timeline } from '@/data/portfolio';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-28 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Work Experience" />

        <div className="relative">
          {/* Timeline line */}
          <div
            className="absolute hidden md:block"
            style={{
              left: '10px',
              top: '6px',
              bottom: '6px',
              width: '1px',
              background: 'rgba(255,255,255,0.05)',
            }}
          />

          <div className="space-y-14">
            {timeline.map((item) => (
              <div key={item.role} className="flex gap-8 relative">
                {/* Dot */}
                <div
                  className="hidden md:flex shrink-0 items-center justify-center relative z-10"
                  style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    border: '1px solid rgba(74,222,128,0.25)',
                    background: '#080808',
                    marginTop: '3px',
                  }}
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-2">
                    <div>
                      <h3 className="text-[0.975rem] font-semibold text-white tracking-[-0.01em]">
                        {item.role}
                      </h3>
                      <p className="text-[0.825rem] text-accent mt-0.5">
                        {item.company}
                      </p>
                    </div>
                    <span className="font-mono text-[0.7rem] text-text-darker tracking-[0.04em] shrink-0 pt-[3px]">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-[0.86rem] text-text-muted leading-[1.78] mb-4">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <Tag key={t} label={t} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
