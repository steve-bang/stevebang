export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  content: string;
  keywords: string[];
  author: string;
  readingTime: string;
  image?: string;
  schemaJsonLD?: string;
  publishedAt: string;
  updatedAt?: string;
}