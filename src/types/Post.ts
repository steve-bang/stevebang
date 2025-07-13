export interface IPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
  tags: string[];
  author: string;
  readingTime: string;
  image?: string;
}