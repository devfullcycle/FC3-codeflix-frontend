import { Genre } from './Genre';
import { Rating } from './Rating';

export type Movies = {
  meta: Meta;
  links: Links;
  data: Movie[];
};

export enum MovieType {
  Videos = 'videos',
}

export type Movie = {
  type: MovieType;
  id: string;
  title: string;
  description: string;
  yearLaunched: number;
  opened: boolean;
  rating: Rating;
  duration: number;
  genres: Genre[];
  categories: string[];
  castMembers: string[];
  thumbFileURL: string;
  bannerFileURL: string;
  bannerHalfFileURL: string;
  trailerFileURL: string;
  videoFileURL: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Links = {
  prev: null;
  last: string;
  next: string;
  first: string;
};

export type Meta = {
  to: number;
  from: number;
  path: string;
  total: number;
  perPage: number;
  lastPage: number;
  currentPage: number;
};
