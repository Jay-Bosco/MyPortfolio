export interface Project {
  id: number;
  title: string;
  description: string;
  images: string[];
  tags: string[];
  liveUrl: string;
}

export interface Service {
  icon: string;
  title: string;
  short: string;
  full: string;
}
