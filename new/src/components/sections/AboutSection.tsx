import { SectionHeader } from '@/components/SectionHeader';
import { aboutHeading, aboutParagraphs, quickFacts } from '@/data/portfolio';

export function AboutSection() {
  const [line1, line2] = aboutHeading.split('\n');

  return (
    <section id="about" className="py-28 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Background" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Bio */}
          <div className="lg:col-span-3 space-y-5">
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-white tracking-[-0.04em] leading-[1.1] mb-6">
              {line1}
              <br />
              {line2}
            </h2>
            {aboutParagraphs.map((p) => (
              <p
                key={p.slice(0, 30)}
                className="text-[0.9rem] text-text-muted leading-[1.85]"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Quick facts */}
          <div className="lg:col-span-2 border border-white/[0.06] rounded-md overflow-hidden">
            {quickFacts.map((item, i) => (
              <div
                key={item.label}
                className="flex justify-between items-center px-5 py-3"
                style={{
                  borderBottom:
                    i < quickFacts.length - 1
                      ? '1px solid rgba(255,255,255,0.04)'
                      : 'none',
                  background: i % 2 === 0 ? '#080808' : '#0b0b0b',
                }}
              >
                <span className="font-mono text-[0.68rem] text-text-dark tracking-[0.06em]">
                  {item.label}
                </span>
                <span className="text-[0.82rem] text-[#d4d4d8]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
