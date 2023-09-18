import type { Dayjs } from "dayjs";

export type BaseData = {
  id: number;
  title: string;
  slug: string;
};

export type Page = BaseData & {
  content: string;
};

export type Post = BaseData & {
  content: string;
  postDate: string;
  categories: Category[];
};

export type ArticlePost = Post & {
  articleUrl: string;
  articleAuthors: string[];
  articleDate: string;
  articleSource: string;
};

export type Category = BaseData & {
  description?: string;
  children?: Category[];
  count?: number;
};
