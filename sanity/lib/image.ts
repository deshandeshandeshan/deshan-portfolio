import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/sanity-utils";

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
