'use client';

import { useState, useEffect } from 'react';

export default function FooterEasterEgg() {
  const [visible, setVisible] = useState(false);
  const [typed, setTyped] = useState('');
  const [showResult, setShowResult] = useState(false);

  const command = 'console.log(recruiter.decision)';
  const result = '// "hired"';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !visible) {
          setVisible(true);
        }
      },
      { threshold: 0.5 },
    );

    const el = document.getElementById('easter-egg-terminal');
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;

    let i = 0;
    const interval = setInterval(() => {
      if (i <= command.length) {
        setTyped(command.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 300);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [visible]);

  return (
    <div id="easter-egg-terminal" className="mt-4 text-sm text-muted-foreground">
      <span className="text-foreground">&gt; </span>
      <span>{typed}</span>
      {!showResult && visible && (
        <span className="animate-pulse">▌</span>
      )}
      {showResult && (
        <>
          <span className="text-green-500"> {result}</span>
          <div className="mt-1">
            <span className="text-foreground">&gt; </span>
            <span className="animate-pulse">▌</span>
          </div>
        </>
      )}
    </div>
  );
}
