import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type projectHeaderImageProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "projectHeaderImage" }
>;

export function ProjectHeaderImage({ title, image }: projectHeaderImageProps) {
  return (
    <main>
      <section className="project-header">
        <h2>{title}</h2>
        <div className="project-header-image">
          {image ? (
            <Image
              src={urlFor(image).auto("format").quality(90).url()}
              alt={""}
              width={2160}
              height={3840}
              priority
              placeholder="blur"
              blurDataURL={urlFor(image).width(10).blur(10).url()}
            />
          ) : null}
        </div>
      </section>
    </main>
  );
}
