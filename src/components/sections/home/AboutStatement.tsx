import Link from "next/link";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ProjectCards } from "@/components/sections/ProjectCards";
import { ArrowRight } from "@/components/icons";

export function AboutStatement() {
  return (
    <section className="bg-canvas pb-16 md:pb-24">
      <div className="container-page">
        <SectionLabel>About us</SectionLabel>
        <p className="display mx-auto mt-10 max-w-4xl text-center text-4xl leading-[1.08] md:text-6xl md:leading-[1.05]">
          Duonox is two disciplines at one table, editorial instinct on one side,
          systems thinking on the other. The name works{" "}
          <span className="text-muted-2">two ways, and so does the work.</span>
        </p>
        <div className="mt-10 flex justify-center">
          <Link href="/about" className="btn btn-primary">
            More about the agency <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-14">
          <ProjectCards />
        </div>
      </div>
    </section>
  );
}
