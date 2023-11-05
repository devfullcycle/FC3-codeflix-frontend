export type Movie = {
  id: number;
  title: string;
  description: string;
  yearLaunched: string;
  link: string;
  castMembers: string[];
  genres: string[];
  thumbFileURL: string;
  bannerFileURL: string;
  videoFileURL: string;
  rating: string;
};

export type Movies = Movie[];
