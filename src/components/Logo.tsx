import Link from "next/link";

/**
 * Duonox wordmark — reproduced from Logo.svg.
 * "Duonox" in Plus Jakarta Sans Bold + two small squares (upper-right / lower-left)
 * to the right of the mark. Uses currentColor so it can render blue on light
 * surfaces and white on dark/blue surfaces (as in the artboards).
 */
export function Logo({
  className = "",
  size = 26,
  href = "/",
  as = "link",
}: {
  className?: string;
  size?: number;
  href?: string;
  as?: "link" | "span";
}) {
  const content = (
    <span
      className={`dx-logo ${className}`}
      style={{ fontSize: size }}
      aria-label="Duonox"
    >
      <span className="dx-word">Duonox</span>
      <span className="dx-mark" aria-hidden>
        <span className="dx-sq dx-sq-top" />
        <span className="dx-sq dx-sq-bottom" />
      </span>
    </span>
  );

  if (as === "span") return content;
  return (
    <Link href={href} className="inline-flex items-center" aria-label="Duonox — home">
      {content}
    </Link>
  );
}
