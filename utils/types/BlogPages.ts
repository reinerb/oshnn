import { Category } from "./blog";

export type BlockArticle = {
  id: number;
  slug: string;
  title: string;
  categories: number[];
  publicationDate: string;
  publicationTitle: string;
  paywall: boolean;
};

export type Topics = {
  national: Category;
  rhodeIsland: Category;
};

export type BlockPageProps = {
  allTopics: Topics;
  posts: BlockArticle[];
  topic?: Category;
  page?: number;
  totalPages?: number;
};
