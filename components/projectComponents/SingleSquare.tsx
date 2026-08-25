"use client";

import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./SingleSquare.css";
import "@/app/grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

type singleSquareProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "singleSquare" }
>;

export function SingleSquare({ image }: singleSquareProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="single-square grid">
      <div className="single-square-image">
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
            className="single-square-img"
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
