export interface Contact {
  _id: string;
  _createdAt: string;
  description: string;
  contactImage: {
    alt: string;
    asset: {
      _id: string;
      url: string;
    };
  };
  contacts: {
    email: string;
    phoneNumber: number;
  };
  socialLinks: Array<{
    _key: string;
    link: string;
  }>;
}
