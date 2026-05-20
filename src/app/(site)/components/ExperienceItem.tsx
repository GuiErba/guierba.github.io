'use client';

import { useState } from 'react';

type ExperienceItemProps = {
  role: string;
  company: string;
  companyUrl?: string;
  period: string;
  highlights: string[];
};

export default function ExperienceItem({ role, company, companyUrl, period, highlights }: ExperienceItemProps) {
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
        <div className="mt-2">
          {companyUrl && (
            <a
              href={companyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mb-2 ml-3 text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              → Visit {company}
            </a>
          )}
          <ul className="text-sm text-muted-foreground list-disc list-inside ml-3 space-y-1 leading-relaxed">
            {highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
