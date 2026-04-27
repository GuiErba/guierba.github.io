import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[90vh] flex items-center justify-center px-6 bg-background">
      <div className="text-center">
        <p className="font-mono text-accent text-xs tracking-[0.15em] uppercase mb-6">
          {'// error'}
        </p>
        <h1 className="text-[clamp(5rem,15vw,10rem)] font-semibold text-[#111111] tracking-[-0.06em] leading-none mb-6">
          404
        </h1>
        <h2 className="text-xl font-medium text-text-secondary tracking-[-0.02em] mb-3">
          Page not found.
        </h2>
        <p className="text-sm text-text-dark mb-10 max-w-[320px] mx-auto leading-[1.7]">
          This route doesn&apos;t exist. Even the best systems have edge cases.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-accent text-sm font-mono tracking-[0.05em] no-underline transition-opacity duration-200 hover:opacity-70"
        >
          <ArrowLeft size={15} /> Back to Home
        </Link>
      </div>
    </div>
  );
}
