export type WordPressQueryType = "posts" | "pages" | "categories";

export type WordPressQueryParams = {
  fields?: WordPressField[];
  slug?: string;
  id?: number;
  page?: number;
  perPage?: number;
  categoryIds?: number[];
};

export type WordPressResponse = {
  id: number;
  title: {
    rendered: string;
  };
  slug: string;
  content?: {
    rendered: string;
    protected: boolean;
  };
  categories?: number[];
  acf?: ACFData;
  date?: string;
  parent?: number;
  count?: number;
};

export type CategoryResponse = {
  id: number;
  name: string;
  slug: string;
  parent?: number;
  count?: number;
};

export type RawCategory = {
  id: number;
  title: string;
  slug: string;
  parent?: number;
};

export type WordPressData = {
  id: number;
  title: string;
  slug: string;
  content?: string;
  categories?: number[];
  acf?: ACFData;
  date?: string;
  parent?: number;
};

export type PostData = {
  id: number;
  title: string;
  slug: string;
  content: string;
  categories: number[];
  acf: ACFData;
};

type WordPressField =
  | "content"
  | "categories"
  | "acf"
  | "date"
  | "parent"
  | "count";

type ACFData = {
  articleUrl: string;
  articleAuthors: string;
  publicationDate: string;
  publicationTitle: string;
  paywall: boolean;
};
