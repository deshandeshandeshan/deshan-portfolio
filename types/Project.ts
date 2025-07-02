export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  year: string;
  description: string;

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
    _id: string;
    deliverable: string;
  }[];

  pojectStack?: {
    _id: string;
    technology: string;
  }[];
};
