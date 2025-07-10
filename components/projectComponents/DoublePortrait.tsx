import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./DoublePortrait.css";
import "@/app/grid.css";

type doublePortraitProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "doublePortrait" }
>;

export function DoublePortrait({ leftImage, rightImage }: doublePortraitProps) {
  return (
    <section className="double-portrait">
      <div className="images grid">
        <div className="left-portrait-image">
          {leftImage ? (
            <Image
              src={urlFor(leftImage).auto("format").quality(90).url()}
              alt={""}
              width={2160}
              height={3840}
              className="left-portrait-img"
            />
          ) : null}
        </div>
        <div className="right-portrait-image">
          {rightImage ? (
            <Image
              src={urlFor(rightImage).auto("format").quality(90).url()}
              alt={""}
              width={2160}
              height={3840}
              className="right-portrait-img"
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
