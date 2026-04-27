import { SectionHeader } from '@/components/SectionHeader';
import { skillGroups } from '@/data/portfolio';

export function TechStackSection() {
  return (
    <section className="py-24 bg-background-alt border-t border-border">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Technical Stack" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-mono text-[0.68rem] text-accent tracking-[0.14em] uppercase mb-4">
                {group.category}
              </h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2 text-[0.845rem] text-text-secondary"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/35 shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
