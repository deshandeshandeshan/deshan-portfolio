import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./ProjectHeaderImage.css";
import "@/app/grid.css";

type projectHeaderImageProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "projectHeaderImage" }
>;

export function ProjectHeaderImage({ image }: projectHeaderImageProps) {
  return (
    <main>
      <section className="project-header grid">
        <div className="project-header-image">
          {image ? (
            <Image
              src={urlFor(image).auto("format").quality(90).url()}
              alt={""}
              width={2160}
              height={3840}
              className="project-header-img"
            />
          ) : null}
        </div>
      </section>
    </main>
  );
}
