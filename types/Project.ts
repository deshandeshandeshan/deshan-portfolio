export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  year: string;

  liveSite?: {
    liveSite?: string;
    liveSiteTitle?: string;
  };

  firstImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };

  secondImage?: {
    asset: {
      _id: string;
      url: string;
    };
    alt?: string;
  };

  projectDeliverables?: {
    deliverable: string;
  }[];

  pojectStack?: {
    technology: string;
  }[];
};
