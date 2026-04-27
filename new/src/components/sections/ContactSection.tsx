import { Download, Github, Linkedin, Twitter } from 'lucide-react';
import { SectionHeader } from '@/components/SectionHeader';
import { contactMeta, idealEngagements, socialLinks } from '@/data/portfolio';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-28 bg-background border-t border-border"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <SectionHeader label="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <h2 className="text-[clamp(1.6rem,3vw,2.4rem)] font-semibold text-white tracking-[-0.04em] leading-[1.1] mb-5">
              Have a hard problem
              <br />
              worth solving?
            </h2>
            <p className="text-[0.9rem] text-text-muted leading-[1.85] mb-10 max-w-[460px]">
              I&apos;m selective about what I take on — not because I&apos;m not
              available, but because the best work comes from genuine alignment.
              Drop me an email and tell me about the problem.
            </p>

            {/* Email */}
            <div className="mb-8">
              <p className="font-mono text-[0.65rem] text-text-dark tracking-[0.12em] uppercase mb-2">
                Email
              </p>
              <a
                href="mailto:hello@example.dev"
                className="font-mono text-[clamp(1rem,2vw,1.25rem)] text-white no-underline tracking-[-0.01em] transition-colors duration-200 hover:text-accent"
              >
                hello@example.dev
              </a>
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-3 mb-10">
              {contactMeta.map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <span className="font-mono text-[0.63rem] text-text-darker tracking-[0.1em] uppercase min-w-[80px]">
                    {item.label}
                  </span>
                  <span className="text-[0.845rem] text-text-muted">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Social + Resume */}
            <div className="flex items-center gap-4 flex-wrap">
              {socialLinks.map(({ platform, href, label }) => {
                const Icon = iconMap[platform];
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={label}
                    className="text-text-darker transition-colors duration-200 hover:text-accent"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}

              <div className="w-px h-5 bg-white/[0.07]" />

              <a
                href="/resume.pdf"
                download="Guilherme_Erba_Resume.pdf"
                className="flex items-center gap-2 font-mono text-[0.72rem] tracking-[0.07em] text-accent border border-accent/[0.22] bg-accent/[0.04] px-4 py-2 rounded-[3px] no-underline transition-all duration-200 hover:bg-accent/10 hover:border-accent/50"
              >
                <Download size={13} />
                Resume
              </a>
            </div>
          </div>

          {/* Right: Status cards */}
          <div className="flex flex-col gap-4">
            {/* Availability */}
            <div
              className="p-7 rounded-r-md"
              style={{
                border: '1px solid rgba(74,222,128,0.08)',
                borderLeft: '2px solid rgba(74,222,128,0.5)',
                background: 'rgba(74,222,128,0.025)',
              }}
            >
              <div className="flex items-center gap-2.5 mb-3">
                <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_#4ADE80] inline-block shrink-0" />
                <span className="font-mono text-[0.7rem] text-accent tracking-[0.1em] uppercase">
                  Currently available
                </span>
              </div>
              <p className="text-sm text-text-muted leading-[1.75]">
                Open for architecture consulting, senior/staff engineering
                roles, and select freelance projects starting Q2 2026.
              </p>
            </div>

            {/* Ideal engagements */}
            <div className="p-7 border border-border rounded-md bg-background-alt">
              <p className="font-mono text-[0.63rem] text-text-dark tracking-[0.14em] uppercase mb-4">
                Ideal engagements
              </p>
              <ul className="space-y-3">
                {idealEngagements.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[0.845rem] text-text-secondary"
                  >
                    <span className="w-1 h-1 rounded-full bg-accent/50 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
