export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl: string;
}

export interface Certificate {
  id: number;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl: string;
}

export interface Service {
  icon: string;
  title: string;
  short: string;
  full: string;
}
