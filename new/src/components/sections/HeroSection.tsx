import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center"
      style={{
        minHeight: '100vh',
        paddingTop: '5rem',
        paddingBottom: '4rem',
        background:
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(74,222,128,0.07) 0%, transparent 65%), #080808',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 w-full">
        {/* Label */}
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-accent text-[0.72rem] tracking-[0.18em] uppercase">
            {'// software engineer · architect'}
          </span>
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_#4ADE80]" />
        </div>

        {/* Name display */}
        <div className="mb-8">
          <div className="text-[clamp(3rem,9.5vw,8rem)] font-bold tracking-[-0.05em] text-white leading-[0.92] select-none">
            Guilherme
          </div>
          <div className="text-[clamp(3rem,9.5vw,8rem)] font-bold tracking-[-0.05em] leading-[0.92] flex items-baseline gap-[0.15em] select-none">
            <span className="text-accent">Erba</span>
            <span className="inline-block w-[0.075em] h-[0.78em] bg-accent rounded-[1px] animate-[blink_1.1s_step-end_infinite] mb-[0.02em]" />
          </div>
        </div>

        <p className="mb-12 max-w-[520px] text-[1.05rem] text-text-muted leading-[1.75]">
          8+ years designing and shipping distributed systems, scalable APIs,
          and high-performance architectures across startups and enterprise. I
          solve the hard problems — before they become incidents.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="flex items-center gap-2 bg-accent text-background px-7 py-3 text-sm font-semibold rounded-[4px] no-underline transition-colors duration-200 hover:bg-accent-hover"
          >
            View Projects <ArrowRight size={15} />
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 border border-border-light text-text-secondary px-7 py-3 text-sm font-medium rounded-[4px] no-underline transition-all duration-200 hover:border-white/25 hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
