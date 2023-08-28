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
  publicationTitle: string;
  paywall: boolean;
};

export type WordPressQueryData =
  | PostQueryData
  | PageQueryData
  | CategoryQueryData;
