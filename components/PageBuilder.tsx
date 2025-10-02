import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import { DoubleLandscape } from "./projectComponents/DoubleLandscape";
import { DoublePortrait } from "./projectComponents/DoublePortrait";
import { Landscape } from "./projectComponents/Landscape";
import { FullBleed } from "./projectComponents/FullBleed";
import { Portrait } from "./projectComponents/Portrait";

type PageBuilderBlock = NonNullable<
  NonNullable<SINGLE_PROJECT_QUERYResult>["content"]
>[number];

type PageBuilderProps = {
  content: PageBuilderBlock[];
  className?: string;
};

export function PageBuilder({
  content,
  className = "page-builder",
}: PageBuilderProps) {
  if (!Array.isArray(content)) return null;

  return (
    <div className={className}>
      {content.map((block) => {
        switch (block._type) {
          case "doubleLandscape":
            return <DoubleLandscape key={block._key} {...block} />;
          case "doublePortrait":
            return <DoublePortrait key={block._key} {...block} />;
          case "landscape":
            return <Landscape key={block._key} {...block} />;
          case "fullBleed":
            return <FullBleed key={block._key} {...block} />;
          case "portrait":
            return <Portrait key={block._key} {...block} />;
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
    </div>
  );
}
