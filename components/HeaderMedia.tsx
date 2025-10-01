"use client";

import Image from "next/image";
import "./HomeContent.css";
import "@/app/grid.css";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import MuxPlayerElement from "@mux/mux-player";
import MuxPlayer from "@mux/mux-player-react";

export const revalidate = 5;

type work = {
  _id: string;
  _createdAt: string;
  title: string | null;
  description: string | null;
  video: {
    asset: {
      playbackId: string | null;
      assetId: string | null;
      filename: string | null;
    } | null;
  } | null;
  image: {
    alt: string | null;
    asset: {
      _id: string;
      url: string | null;
    } | null;
  } | null;
} | null;

type HeaderMediaProps = {
  work: work | null;
};

export default function HeaderContent({ work }: HeaderMediaProps) {
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  const playerRef = useRef<MuxPlayerElement | null>(null);

  useEffect(() => {
    if (inView && playerRef.current) {
      playerRef.current.play();
    }

    if (!inView && playerRef.current) {
      playerRef.current.pause();
    }
  }, [inView]);

  return (
    <div className="landing-content landing-content-grid mobile-padding">
      <h1 className="landing-content-title type-title">
        {work?.title ?? "Untitled"}
      </h1>
      <hr className="full-bleed-divider" />
      <div className="landing-content-job-description type-details-regular text-grey">
        Web Developer & Digital Designer
      </div>
      <div className="landing-content-location type-details-regular text-grey">
        Melbourne
      </div>
      <div className="landing-content-open-to-work type-details-regular text-grey">
        Open to Work
      </div>
      <p className="landing-content-description type-body">
        {work?.description ?? "No description available."}
      </p>
      <div className="landing-content-image-container media-wrapper">
        {work?.image?.asset?.url && (
          <Image
            src={urlFor(work?.image?.asset?.url)
              .auto("format")
              .quality(90)
              .url()}
            alt={work?.image?.alt || ""}
            width={3840}
            height={3840}
            className="landing-content-image"
          />
        )}
        {work?.video?.asset?.playbackId ? (
          <div ref={inViewRef} className="mux-video-container">
            <MuxPlayer
              ref={playerRef}
              playbackId={work?.video?.asset?.playbackId ?? ""}
              autoPlay={false}
              muted
              loop
              playsInline
              className="mux-video-player"
            />
          </div>
        ) : null}
      </div>
      <div className="landing-content-info-container">
        <h3 className="info-years-working type-heading">2022 - 2025</h3>
        <h3 className="info-projects type-heading">PROJECTS &#8600;</h3>
      </div>
    </div>
  );
}
