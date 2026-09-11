import Image from "next/image";

export function AvatarStack({
  avatars,
  size = 28,
  ring = "#ffffff",
  className = "",
}: {
  avatars: string[];
  size?: number;
  ring?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      {avatars.map((src, i) => (
        <span
          key={src + i}
          className="relative overflow-hidden rounded-full"
          style={{
            width: size,
            height: size,
            marginLeft: i === 0 ? 0 : -size * 0.32,
            boxShadow: `0 0 0 2px ${ring}`,
            zIndex: avatars.length - i,
          }}
        >
          <Image src={src} alt="" fill sizes={`${size}px`} className="object-cover" />
        </span>
      ))}
    </div>
  );
}
