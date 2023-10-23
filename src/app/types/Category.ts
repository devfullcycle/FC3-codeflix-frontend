export enum CategoryType {
  Categories = 'categories',
}

export type Category = {
  type: CategoryType;
  id: string;
  name: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
};
