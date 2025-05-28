import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"]{
    _id,
    _createdAt,
    name,
    year,
    contributions,
    "slug": slug.current,
    firstImage {
      alt,
      asset->{
        _id,
        url
      }
    },
    secondImage {
      alt,
      asset->{
        _id,
        url
      }
    },
    url,
    content
  }
`);
