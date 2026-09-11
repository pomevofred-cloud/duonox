export function Stars({
  value = 5,
  size = 14,
  className = "",
}: {
  value?: number;
  size?: number;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-0.5 ${className}`} aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill={i < value ? "var(--color-gold)" : "rgba(0,0,0,0.12)"}
          aria-hidden
        >
          <path d="M12 2.5l2.9 5.87 6.48.94-4.69 4.57 1.11 6.45L12 17.77l-5.8 3.05 1.1-6.45L2.62 9.8l6.48-.94L12 2.5z" />
        </svg>
      ))}
    </span>
  );
}
