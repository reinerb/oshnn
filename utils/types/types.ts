import type { Dayjs } from "dayjs";

export type Post = {
  id: number;
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
  id: number;
  name: string;
  slug: string;
  description?: string;
};

export type PostQueryData = {
  id: number;
  acf: ACFData | [];
  postDate: string;
  slug: string;
  title: string;
  content: {
    protected: boolean;
    content: string;
  };
  categories: number[];
};

type ACFData = {
  articleUrl: string;
  articleAuthors: string;
  articleDate: string;
  articleSource: string;
};
