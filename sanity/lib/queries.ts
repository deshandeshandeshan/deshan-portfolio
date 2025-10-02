import { defineQuery } from "next-sanity";

export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"]{
    _id,
    _createdAt,
    name,
    year,
    description,
    "slug": slug.current,
    video {
      asset-> {
        playbackId,
        assetId,
        filename
      }
    },
    projectImage {
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
      _key,
      deliverable
    },
    projectStack[] {
      _key,
      technology
    }
  }
`);

export const SINGLE_PROJECT_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    _createdAt,
    name,
    year,
    description,
    video {
      asset-> {
        playbackId,
        assetId,
        filename
      }
    },
    liveSite {
      liveSite,
      liveSiteTitle
    },
    projectDeliverables[] {
      _key,
      deliverable
    },
    projectStack[] {
      _key,
      technology
    },
    content[]{
      _key,
      _type,

      _type == "projectHeaderImage" => {
        title,
        image{ alt, caption, asset->{ _id, url } }
      },

      _type == "landscape" => {
        title,
        image{ alt, caption, asset->{ _id, url } }
      },

      _type == "doubleLandscape" => {
        title,
        leftImage{ alt, caption, asset->{ _id, url } },
        rightImage{ alt, caption, asset->{ _id, url } }
      },

      _type == "doublePortrait" => {
        title,
        leftImage{ alt, caption, asset->{ _id, url } },
        rightImage{ alt, caption, asset->{ _id, url } }
      },

      _type == "projectDetails" => {
        title,
        description,
        year,
        liveSite{ liveSite, liveSiteTitle },
        projectDeliverables[]{ deliverable },
        projectStack[]{ technology }
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
    video {
      asset-> {
        playbackId,
        assetId,
        filename
      }
    },
    image {
      alt,
      asset->{
        _id,
        url
      }
    }
  }
`);

export const CONTACT_QUERY = defineQuery(`
  *[_type == "contact"][0]{
    _id,
    _createdAt,
    description,
    contactImage {
      alt,
      asset->{
        _id,
        url
      }
    },
    contacts {
      email,
      phoneNumber
    },
    socialLinks[] {
      _key,
      linkName,
      link
    }
  }
`);
