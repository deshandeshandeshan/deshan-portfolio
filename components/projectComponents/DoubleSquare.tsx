"use client";

import { urlFor } from "@/sanity/lib/image";
import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import Image from "next/image";

import "./DoubleSquare.css";
import "@/app/grid.css";
import { useState } from "react";
import { Lightbox } from "../Lightbox";

type doubleSquareProps = Extract<
  NonNullable<NonNullable<SINGLE_PROJECT_QUERYResult>["content"]>[number],
  { _type: "doubleSquare" }
>;

export function DoubleSquare({ leftImage, rightImage }: doubleSquareProps) {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt?: string;
  } | null>(null);

  return (
    <section className="double-square">
      <div className="images grid">
        <div className="left-image-sq">
          {leftImage ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(leftImage).url(),
                  alt: leftImage.alt || "",
                })
              }
              src={urlFor(leftImage).auto("format").quality(90).url()}
              alt={leftImage?.alt ?? ""}
              width={2160}
              height={2160}
              className="left-img-sq"
            />
          ) : null}
        </div>
        <div className="right-image-sq">
          {rightImage ? (
            <Image
              onClick={() =>
                setActiveImage({
                  src: urlFor(rightImage).url(),
                  alt: rightImage.alt || "",
                })
              }
              src={urlFor(rightImage).auto("format").quality(90).url()}
              alt={rightImage?.alt ?? ""}
              width={2160}
              height={2160}
              className="right-img-sq"
            />
          ) : null}
        </div>
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
