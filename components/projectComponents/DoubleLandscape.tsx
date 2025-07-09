import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

type doubleLandscapeProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "doubleLandscape" }
>;

export function DoubleLandscape({
  title,
  leftImage,
  rightImage,
}: doubleLandscapeProps) {
  return (
    <main>
      <section className="double-landscape">
        <h2>{title}</h2>
        <div className="images">
          <div className="left-image">
            {leftImage ? (
              <Image
                src={urlFor(leftImage).auto("format").quality(90).url()}
                alt={""}
                width={2160}
                height={3840}
                priority
                placeholder="blur"
                blurDataURL={urlFor(leftImage).width(10).blur(10).url()}
              />
            ) : null}
          </div>
          <div className="right-image">
            {rightImage ? (
              <Image
                src={urlFor(rightImage).auto("format").quality(90).url()}
                alt={""}
                width={2160}
                height={3840}
                priority
                placeholder="blur"
                blurDataURL={urlFor(rightImage).width(10).blur(10).url()}
              />
            ) : null}
          </div>
        </div>
      </section>
    </main>
  );
}
