export type Work = {
  _id: string;
  _createdAt: string;
  title: string;
  description: string;
  image?: {
    alt?: string;
    asset: {
      _id: string;
      url: string;
    };
  };
};
