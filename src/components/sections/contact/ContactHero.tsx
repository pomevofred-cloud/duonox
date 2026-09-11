import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { Stars } from "@/components/ui/Stars";

const avatars = [
  "/images/avatars/a1.jpg",
  "/images/avatars/a2.jpg",
  "/images/avatars/a6.jpg",
  "/images/avatars/a3.jpg",
];

export function ContactHero() {
  return (
    <section className="relative flex min-h-[560px] items-center overflow-hidden bg-[linear-gradient(120deg,#2f7bf6_0%,#4f97ff_55%,#7fb6ff_100%)] text-white md:min-h-[640px]">
      <div className="absolute inset-y-0 right-0 w-full md:w-[72%]">
        <Image
          src="/images/contact-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_25%]"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#1f47a6_0%,rgba(35,78,180,0.72)_30%,rgba(60,120,230,0.05)_62%)]" />
      <div className="container-page relative z-10 pt-32 pb-14 md:pt-40 md:pb-20">
        <h1 className="display max-w-xl text-6xl leading-[0.95] text-white md:text-8xl">
          Write to
          <br /> the agency.
        </h1>
        <p className="mt-6 max-w-md text-base leading-relaxed text-white/85 md:text-lg">
          A paragraph is enough. Tell us what you are trying to do, who it is for,
          and roughly when you would like to start. We reply within two working days.
        </p>
        <div className="mt-7 inline-flex items-center gap-2 rounded-full bg-white/95 py-1.5 pl-1.5 pr-4 text-ink">
          <AvatarStack avatars={avatars} size={24} />
          <span className="text-[0.8rem] font-medium">Trusted by 40+ founders</span>
          <Stars value={5} size={13} className="ml-1" />
        </div>
      </div>
    </section>
  );
}
