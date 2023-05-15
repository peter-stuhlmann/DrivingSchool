export type TeamMember = {
  name: string;
  role: string;
  img: string;
};

export type NavElement = {
  title: string;
  slug: string;
};

export type BannerImage = {
  id?: string;
  imgNameM: string;
  imgNameL: string;
  imgDescription: string;
  captionText: JSX.Element;
  captionOpacity?: number;
  priority?: boolean;
};

export type FooterLink = {
  title: string;
  href: string;
};
