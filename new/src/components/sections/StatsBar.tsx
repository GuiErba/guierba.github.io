import { stats } from '@/data/portfolio';

export function StatsBar() {
  return (
    <div className="border-y border-border bg-background-alt">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[2rem] font-semibold text-white tracking-[-0.04em] leading-none mb-[5px]">
                {s.value}
              </div>
              <div className="font-mono text-[0.7rem] text-text-dark tracking-[0.04em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
