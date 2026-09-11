import Image from "next/image";

const projects = [
  { src: "/images/project-seon.png", alt: "Seon — brand identity", label: "Seon." },
  { src: "/images/project-legend.jpg", alt: "Legend Motors — identity", label: "Legend Motors" },
  { src: "/images/project-flurum.png", alt: "Flurum Fitness — identity", label: "Flurum Fitness" },
];

export function ProjectCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {projects.map((p) => (
        <div
          key={p.label}
          className="group relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-navy"
        >
          <Image
            src={p.src}
            alt={p.alt}
            fill
            sizes="(max-width: 640px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
      ))}
    </div>
  );
}
