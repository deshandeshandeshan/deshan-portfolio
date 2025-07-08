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

export const PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
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
    },

    // page‐builder blocks
    content[] {
      _key,
      _type,

      // project header image block
      _type == "projectHeaderImage" => {
        title,
        image {
          alt,
          caption,
          asset-> { _id, url }
        }
      },

      // single‐image landscape block
      _type == "landscape" => {
        title,
        image {
          alt,
          caption,
          asset-> { _id, url }
        }
      },

      // two‐image landscape block
      _type == "doubleLandscape" => {
        title,
        leftImage {
          alt,
          caption,
          asset-> { _id, url }
        },
        rightImage {
          alt,
          caption,
          asset-> { _id, url }
        }
      },

      // two‐image portrait block
      _type == "doublePortrait" => {
        title,
        leftImage {
          alt,
          caption,
          asset-> { _id, url }
        },
        rightImage {
          alt,
          caption,
          asset-> { _id, url }
        }
      },

      // rich project details block
      _type == "projectDetails" => {
        title,
        description,
        year,
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
