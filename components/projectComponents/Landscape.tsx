import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./Landscape.css";
import "@/app/grid.css";

type landscapeProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "landscape" }
>;

export function Landscape({ image }: landscapeProps) {
  return (
    <section className="landscape grid mobile-padding">
      <div className="landscape-image">
        {image ? (
          <Image
            src={urlFor(image).auto("format").quality(90).url()}
            alt={""}
            width={2160}
            height={3840}
            className="landscape-img"
          />
        ) : null}
      </div>
    </section>
  );
}
