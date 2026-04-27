import { SectionHeader } from '@/components/SectionHeader';
import { principles } from '@/data/portfolio';

export function PhilosophySection() {
  return (
    <section className="py-24 bg-background-alt border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Engineering Philosophy" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {principles.map((p, i) => (
            <div
              key={p}
              className="flex items-start gap-4 p-5 border border-border rounded-[4px] bg-background"
            >
              <span className="font-mono text-accent text-[0.7rem] opacity-45 shrink-0 pt-0.5">
                {`0${i + 1}`}
              </span>
              <p className="text-[0.95rem] text-[#d4d4d8] leading-[1.65] italic tracking-[-0.01em]">
                &ldquo;{p}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
