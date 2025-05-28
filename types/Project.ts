export type Project = {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  year: string;
  contributions: string;
  firstImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  secondImage: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
};
