"use client";

import type { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import { PageBuilder } from "./PageBuilder";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import MuxPlayerElement from "@mux/mux-player";
import MuxPlayer from "@mux/mux-player-react";

import "./ProjectLayout.css";

type Props = {
  project: NonNullable<SINGLE_PROJECT_QUERYResult>;
};

export default function ProjectLayout({ project }: Props) {
  const playbackId = project?.video?.asset?.playbackId ?? "";

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
    <article className="project-layout-grid project-layout mobile-padding">
      <section className="project-layout-details">
        <div className="project-layout-video-wrapper" ref={inViewRef}>
          {playbackId ? (
            <MuxPlayer
              ref={playerRef}
              playbackId={playbackId}
              autoPlay={false}
              muted
              loop
              playsInline
              className="mux-video-player"
            />
          ) : null}
        </div>
        <div className="project-layout-write-up">
          <div className="project-layout-detail">
            <hr className="project-page-full-bleed-divider" />
            <h3 className="type-body text-grey pl-title">{project.year}</h3>
            <p className="type-body pl-detail">{project.name}</p>
            <hr className="project-page-full-bleed-divider" />
          </div>
          <div className="project-layout-detail">
            <h3 className="type-body text-grey pl-title">Live Site</h3>
            <a
              className="type-body pl-detail"
              href={project.liveSite?.liveSite || ""}
            >
              {" "}
              {project.liveSite?.liveSiteTitle}
            </a>
            <hr className="project-page-full-bleed-divider" />
          </div>
          <div className="project-layout-detail">
            <h3 className="type-body text-grey pl-title">Deliverables</h3>
            <ul className="pl-detail">
              {project.projectDeliverables?.map((projectDeliverable, index) => (
                <li
                  key={projectDeliverable._key ?? index}
                  className="type-body"
                >
                  {projectDeliverable.deliverable}
                </li>
              ))}
            </ul>
            <hr className="project-page-full-bleed-divider" />
          </div>
          <div className="project-layout-detail">
            <h3 className="type-body text-grey pl-title">Stack</h3>
            <ul className="pl-detail">
              {project.projectStack?.map((stack, index) => (
                <li key={stack._key ?? index} className="type-body">
                  {stack.technology}
                </li>
              ))}
            </ul>
            <hr className="project-page-full-bleed-divider" />
          </div>
          <div className="project-layout-detail">
            <h3 className="type-body text-grey pl-title">Description</h3>
            <p className="type-body pl-detail">{project.description}</p>
            <hr className="project-page-full-bleed-divider" />
          </div>
        </div>
      </section>
      <section className="project-layout-content margin-bottom">
        {project.content ? <PageBuilder content={project.content} /> : null}
      </section>
    </article>
  );
}
