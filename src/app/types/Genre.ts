import { Category } from './Category';

export type Genre = {
  type: string;
  id: string;
  name: string;
  isActive: number;
  categories: Category[];
  createdAt: Date;
  updatedAt: Date;
};

export enum Genres {
  Animation = 'Animation',
  Action = 'Action',
  Drama = 'Drama',
  Terror = 'Horror',
  Commedy = 'Comedy',
  Romance = 'Romance',
  Adventure = 'Adventure',
  SiFi = 'Sci-Fi',
}
