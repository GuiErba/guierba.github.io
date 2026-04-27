interface SectionHeaderProps {
  label: string;
  children?: React.ReactNode;
}

export function SectionHeader({ label, children }: SectionHeaderProps) {
  return (
    <div className="mb-14 flex items-center gap-4">
      <span className="font-mono text-accent text-[0.72rem] tracking-[0.18em] uppercase">
        {label}
      </span>
      <div className="h-px flex-1 bg-border" />
      {children}
    </div>
  );
}
