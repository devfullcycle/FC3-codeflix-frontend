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
  Action = 'Ação',
  Drama = 'Drama',
  Terror = 'Terror',
  Commedy = 'Comédia',
  Romance = 'Romance',
  Adventure = 'Aventura',
  SiFi = 'Ficção Científica',
}
