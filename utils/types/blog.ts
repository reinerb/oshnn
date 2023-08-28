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
  postDate: Dayjs;
  categories: Category[];
};

export type ArticlePost = Post & {
  articleUrl: string;
  articleAuthors: string[];
  articleDate: Dayjs;
  articleSource: string;
};

export type Category = BaseData & {
  parentId: number;
  description?: string;
};
