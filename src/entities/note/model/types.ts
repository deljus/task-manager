export type Note = {
  id: string;
  title: string;
  description: string | null;
  fields: string | null;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
};
