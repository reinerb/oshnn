import type { Dayjs } from "dayjs";

export type Post = {
  title: string;
  slug: string;
  content: string;
  postDate: Dayjs;
  categories: Category[];
};

export type ArticlePost = Post & {
  articleUrl: string;
  articleAuthors: string[];
  articleDate: Dayjs;
  articleSource: string;
};

export type Category = {
  name: string;
  slug: string;
  description?: string;
};
