type BaseQueryData = {
  id: number;
  title: string;
  slug: string;
};

export type CategoryQueryData = BaseQueryData & {
  parentId: number;
};

export type PageQueryData = BaseQueryData & {
  content: string;
};

export type PostQueryData = BaseQueryData & {
  acf: ACFData | [];
  postDate: string;
  content: string;
  categories: number[];
};

type ACFData = {
  articleUrl: string;
  articleAuthors: string;
  publicationDate: string;
  publicationTitle: string;
  paywall: boolean;
};

export type WordPressQueryData =
  | PostQueryData
  | PageQueryData
  | CategoryQueryData;

export type RawPostQueryData = {
  acf: ACFData | [];
  categories: number[];
  content: {
    rendered: string;
    protected: boolean;
  };
  date: string;
  id: number;
  slug: string;
  title: {
    rendered: string;
  };
};
