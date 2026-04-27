'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { navItems } from '@/data/portfolio';

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const isHome = pathname === '/';
  const isProjectsActive = pathname === '/projects';

  const getLinkColor = (path: string) => {
    if (path === '/projects' && isProjectsActive) return 'text-accent';
    if (path !== '/projects' && isHome) return 'text-accent';
    return 'text-text-muted';
  };

  return (
    <nav
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.05)'
          : '1px solid transparent',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="font-mono text-accent text-base tracking-tight no-underline"
          >
            {'<SE />'}
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) =>
              item.path === '/projects' ? (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-mono text-[0.78rem] tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-white ${getLinkColor(item.path)}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.path}
                  href={item.path}
                  className={`font-mono text-[0.78rem] tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-white ${getLinkColor(item.path)}`}
                >
                  {item.name}
                </a>
              ),
            )}
          </div>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-text-muted bg-transparent border-none cursor-pointer"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="bg-[#0c0c0c] border-t border-white/[0.05]">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-5">
            {navItems.map((item) =>
              item.path === '/projects' ? (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`font-mono text-[0.78rem] tracking-[0.08em] uppercase no-underline ${getLinkColor(item.path)}`}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.path}
                  href={item.path}
                  className={`font-mono text-[0.78rem] tracking-[0.08em] uppercase no-underline ${getLinkColor(item.path)}`}
                >
                  {item.name}
                </a>
              ),
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
