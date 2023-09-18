import { Category } from "./blog";

export type TopicPageArticle = {
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

export type TopicPageProps = {
  topic: Category;
  allTopics: Topics;
  posts: TopicPageArticle[];
};
