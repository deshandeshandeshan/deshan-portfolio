import { SINGLE_PROJECT_QUERYResult } from "@/sanity/types";
import { DoubleLandscape } from "./projectComponents/DoubleLandscape";

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
