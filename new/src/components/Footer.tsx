import { Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <Link
            href="/"
            className="font-mono text-accent text-[0.9rem] no-underline"
          >
            {'<SE />'}
          </Link>
          <div className="flex items-center gap-5">
            {[
              { href: 'https://github.com', icon: Github },
              { href: 'https://linkedin.com', icon: Linkedin },
            ].map(({ href, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-darker transition-colors duration-200 hover:text-text-secondary"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
          <p className="font-mono text-text-darkest text-xs">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
