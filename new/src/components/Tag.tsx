interface TagProps {
  label: string;
}

export function Tag({ label }: TagProps) {
  return (
    <span className="font-mono text-[0.65rem] text-text-dark border border-white/[0.06] px-2.5 py-0.5 rounded-sm tracking-[0.04em]">
      {label}
    </span>
  );
}
