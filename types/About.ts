export type About = {
  _id: string;
  _createdAt: string;
  aboutDescription: string;
  image: {
    asset: {
      _id: string;
      url: string;
    };
    alt: string;
  };
  email: string;
  education: {
    yearsCompleted: string;
    providerName: string;
    degree: string;
  }[];
  experience: {
    yearsCompleted: string;
    jobName: string;
    position: string;
  }[];
  socialLinks: {
    link: string;
  }[];
};
