import { wpQueryHandler } from "./wpQueryHandler";
import type { BlockArticle, Topics } from "../types/BlogPages";
import type { Category } from "../types/blog";
import type { RawCategory } from "../types/wordpressQueries";

export const getPosts = async (): Promise<BlockArticle[]> => {
  const postsQuery = await wpQueryHandler("posts", {
    fields: ["acf", "date", "categories"],
  });

  return postsQuery.map(({ acf, ...post }) => {
    return {
      ...post,
      publicationDate: acf!.publicationDate,
      publicationTitle: acf!.publicationTitle,
      paywall: acf!.paywall,
    } as BlockArticle;
  });
};

export const getTopics = async (): Promise<Topics> => {
  const categories = (await wpQueryHandler("categories", {
    fields: ["parent"],
  })) as RawCategory[];

  const national = categories.find(
    (category) => category.title === "National",
  ) as RawCategory;
  const rhodeIsland = categories.find(
    (category) => category.title === "Rhode Island",
  ) as RawCategory;

  const topics = {
    national: {
      id: national.id,
      title: national.title,
      slug: national.slug,
      children: [] as Category[],
    },
    rhodeIsland: {
      id: rhodeIsland.id,
      title: rhodeIsland.title,
      slug: rhodeIsland.slug,
      children: [] as Category[],
    },
  };

  categories.map(({ parent, ...category }) => {
    if (parent === topics.national.id) {
      topics.national.children = [
        ...topics.national.children,
        {
          ...category,
          children: [] as Category[],
        },
      ];
    }

    if (parent === topics.rhodeIsland.id) {
      topics.rhodeIsland.children = [
        ...topics.rhodeIsland.children,
        {
          ...category,
          children: [] as Category[],
        },
      ];
    }
  });

  return topics;
};
