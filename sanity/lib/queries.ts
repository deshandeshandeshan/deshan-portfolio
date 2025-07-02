import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"]{
    _id,
    _createdAt,
    name,
    year,
    description,
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
    liveSite {
      liveSite,
      liveSiteTitle
    },
    projectDeliverables[] {
      deliverable
    },
    pojectStack[] {
      technology
    }
  }
`);

export const WORK_QUERY = defineQuery(`
  *[_type == "work"][0]{
    _id,
    _createdAt,
    title,
    description,
    image {
      alt,
      asset->{
        _id,
        url
      }
    }
  }
`);
