import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./DoubleLandscape.css";
import "@/app/grid.css";

type doubleLandscapeProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "doubleLandscape" }
>;

export function DoubleLandscape({
  leftImage,
  rightImage,
}: doubleLandscapeProps) {
  return (
    <section className="double-landscape">
      <div className="images grid">
        <div className="left-image">
          {leftImage ? (
            <Image
              src={urlFor(leftImage).auto("format").quality(90).url()}
              alt={""}
              width={2160}
              height={3840}
              className="left-img"
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
              className="right-img"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
