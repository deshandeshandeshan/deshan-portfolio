"use client";

import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./Landscape.css";
import "@/app/grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

type landscapeProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "landscape" }
>;

export function Landscape({ image }: landscapeProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="landscape grid mobile-padding">
      <div className="landscape-image">
        {image ? (
          <Image
            onClick={() =>
              setActiveImage({
                src: urlFor(image).url(),
                alt: image.alt || "",
              })
            }
            src={urlFor(image).auto("format").quality(90).url()}
            alt={image?.alt ?? ""}
            width={3840}
            height={3840}
            className="landscape-img"
          />
        ) : null}
      </div>
      {activeImage && (
        <Lightbox
          src={activeImage.src}
          alt={activeImage.alt || ""}
          onClose={() => setActiveImage(null)}
        />
      )}
    </section>
  );
}
