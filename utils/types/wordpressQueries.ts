export type WordPressQueryType = "posts" | "pages" | "categories";

export type WordPressQueryParams = {
  fields?: WordPressField[];
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
  parent: number;
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

type WordPressField = "content" | "categories" | "acf" | "date" | "parent";

type ACFData =
  | {
      articleUrl: string;
      articleAuthors: string;
      publicationDate: string;
      publicationTitle: string;
      paywall: boolean;
    }
  | [];
