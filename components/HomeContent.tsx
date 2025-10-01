"use client";

import "./HomeContent.css";
import "@/app/grid.css";
import ProjectCard from "./ProjectCard";

export const revalidate = 5;

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

type HomeContentProps = {
  projects: Project[];
};

export default function HomeContent({ projects }: HomeContentProps) {
  return (
    <div>
      <ul className="home-projects-list mobile-padding">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </ul>
    </div>
  );
}
