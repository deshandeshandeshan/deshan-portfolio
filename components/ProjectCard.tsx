"use client";

import Link from "next/link";
import Image from "next/image";
import "./ProjectCard.css";
import "@/app/grid.css";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import MuxPlayerElement from "@mux/mux-player";
import MuxPlayer from "@mux/mux-player-react";

type Project = {
  _id: string;
  _createdAt: string;
  name: string | null;
  year: string | null;
  description: string | null;
  slug: string | null;
  video: {
    asset: {
      playbackId: string | null;
      assetId: string | null;
      filename: string | null;
    } | null;
  } | null;
  projectImage: {
    alt: string | null;
    asset: {
      _id: string;
      url: string | null;
    } | null;
  } | null;
  liveSite: {
    liveSite: string | null;
    liveSiteTitle: string | null;
  } | null;
  projectDeliverables:
    | {
        _key: string;
        deliverable: string | null;
      }[]
    | null;
  projectStack:
    | {
        _key: string;
        technology: string | null;
      }[]
    | null;
  firstImage?: {
    alt?: string | null;
    asset?: {
      url?: string | null;
    } | null;
  } | null;
};

export default function ProjectCard({ project }: { project: Project }) {
  const playbackId = project?.video?.asset?.playbackId ?? "";

  const hasVideo = Boolean(project?.video?.asset?.playbackId);

  const [activeMedia, setActiveMedia] = useState<"video" | "image">(
    hasVideo ? "video" : "image"
  );

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.1,
  });

  const playerRef = useRef<MuxPlayerElement | null>(null);

  useEffect(() => {
    setActiveMedia(hasVideo ? "video" : "image");
  }, [hasVideo]);

  useEffect(() => {
    if (inView && playerRef.current) {
      playerRef.current.play();
    }

    if (!inView && playerRef.current) {
      playerRef.current.pause();
    }
  }, [inView]);

  return (
    <div>
      <ul className="home-projects-list">
        <li className="project" key={project._id}>
          <div className="home-project grid">
            <div className="home-project-details spacing-64">
              <h2 className="home-project-title type-sub spacing-4">
                {project.name}
              </h2>
              <p className="home-project-description type-body spacing-16 text-grey">
                {project.description}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="home-view-project type-body spacing-16 text-blue"
              >
                View Project →
              </Link>
            </div>
            <div className="first-project-details">
              <div className="spacing-12">
                <h3 className="type-body-bold">Live Site</h3>
                <a
                  href={project.liveSite?.liveSite ?? ""}
                  className="type-body text-grey website-link"
                >
                  {project.liveSite?.liveSiteTitle}
                </a>
              </div>
              <div>
                <h3 className="type-body-bold">Deliverables</h3>
                <ul className="text-grey">
                  {project.projectDeliverables?.map(
                    (projectDeliverable, index) => (
                      <li
                        key={projectDeliverable._key ?? index}
                        className="type-body"
                      >
                        {projectDeliverable.deliverable}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
            <div className="second-project-details">
              <div className="spacing-12">
                <h3 className="type-body-bold">Published</h3>
                <p className="type-body text-grey">{project.year}</p>
              </div>
              <div>
                <h3 className="type-body-bold">Stack</h3>
                <ul className="text-grey">
                  {project.projectStack?.map((stack, index) => (
                    <li key={stack._key ?? index} className="type-body">
                      {stack.technology}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              className="home-media-wrapper hover-target"
              href={`/projects/${project.slug}`}
            >
              <div className="media-wrapper-inner">
                <div className="home-image-wrapper">
                  {project.projectImage?.asset?.url && (
                    <Image
                      src={urlFor(project.projectImage?.asset?.url)
                        .auto("format")
                        .quality(90)
                        .url()}
                      alt={project.firstImage?.alt ?? ""}
                      width={3840}
                      height={600}
                      className={`home-image project-card-media ${
                        activeMedia === "image" ? "visible" : ""
                      }`}
                    />
                  )}
                </div>
                <div className="home-video-wrapper">
                  {project?.video?.asset?.playbackId ? (
                    <div
                      ref={inViewRef}
                      onMouseEnter={() => setActiveMedia("image")}
                      onMouseLeave={() => setActiveMedia("video")}
                      className={"mux-video-container"}
                    >
                      <MuxPlayer
                        ref={playerRef}
                        playbackId={project?.video?.asset?.playbackId ?? ""}
                        autoPlay={false}
                        muted
                        loop
                        playsInline
                        className={`pc-mux-video-player mux-video-player project-card-media ${
                          activeMedia === "video" ? "visible" : ""
                        } ${!playbackId ? "disabled" : ""}`}
                      />
                    </div>
                  ) : null}
                </div>
              </div>
            </Link>
          </div>
          <hr className="project-full-bleed-divider" />
        </li>
      </ul>
    </div>
  );
}
