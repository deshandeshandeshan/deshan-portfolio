import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import { DoubleLandscape } from "./projectComponents/DoubleLandscape";
import { DoublePortrait } from "./projectComponents/DoublePortrait";
import { Landscape } from "./projectComponents/Landscape";
import { ProjectDetails } from "./projectComponents/ProjectDetails";
import { ProjectHeaderImage } from "./projectComponents/ProjectHeaderImage";

type PageBuilderBlock = NonNullable<
  NonNullable<SINGLE_PROJECT_QUERYResult>["content"]
>[number];

type PageBuilderProps = {
  content: PageBuilderBlock[];
  className?: string;
};

export function PageBuilder({ content }: PageBuilderProps) {
  if (!Array.isArray(content)) return null;

  return (
    <main>
      {content.map((block) => {
        switch (block._type) {
          case "doubleLandscape":
            return <DoubleLandscape key={block._key} {...block} />;
          case "doublePortrait":
            return <DoublePortrait key={block._key} {...block} />;
          case "landscape":
            return <Landscape key={block._key} {...block} />;
          case "projectDetails":
            return <ProjectDetails key={block._key} {...block} />;
          case "projectHeaderImage":
            return <ProjectHeaderImage key={block._key} {...block} />;
          default: {
            const fallbackBlock = block as { _type: string; _key: string };
            return (
              <div key={fallbackBlock._key}>
                Block not found: {fallbackBlock._type}
              </div>
            );
          }
        }
      })}
    </main>
  );
}
