/** Centered eyebrow with hairlines on each side (used between sections). */
export function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      <span className="h-px w-full max-w-[38%] bg-line" />
      <span className="whitespace-nowrap text-[0.78rem] text-muted-2">{children}</span>
      <span className="h-px w-full max-w-[38%] bg-line" />
    </div>
  );
}
