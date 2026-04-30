'use client';

import { useState } from 'react';

type ExperienceItemProps = {
  role: string;
  company: string;
  period: string;
  highlights: string[];
};

export default function ExperienceItem({ role, company, period, highlights }: ExperienceItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-5">
      <div 
        className="text-sm mb-1 leading-relaxed cursor-pointer select-none group"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <span className="text-foreground font-bold group-hover:underline decoration-border underline-offset-4 block md:inline">
          {role}
        </span>
        <span className="text-muted-foreground block md:inline">
          <span className="hidden md:inline"> </span>
          @ {company} ({period})
        </span>
        <span className="text-muted-foreground block md:inline md:ml-1 text-xs opacity-70 mt-1 md:mt-0">
          [{isExpanded ? '-' : '+'} {isExpanded ? 'hide' : 'show'} details]
        </span>
      </div>
      
      {isExpanded && (
        <ul className="text-sm text-muted-foreground list-disc list-inside ml-3 space-y-1 leading-relaxed mt-2">
          {highlights.map((h, i) => (
            <li key={i}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
