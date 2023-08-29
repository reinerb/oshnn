import { Override } from "@/utils/types/generics";
import {
  CategoryQueryData,
  PageQueryData,
  PostQueryData,
  RawCategoryQueryData,
  RawPageQueryData,
  RawPostQueryData,
  WordPressQueryData,
} from "@/utils/types/wordpressQueries";
import type { NextApiRequest, NextApiResponse } from "next";

type PostsRequest = Override<NextApiRequest, { body: WordPressQuery }>;

interface WordPressQuery {
  type: "posts" | "pages" | "categories";
}

// Retrieves data for all posts
// If more than one page, requests all API pages and puts them into one array
async function postHandler(): Promise<PostQueryData[]> {
  const url = `${process.env.WORDPRESS_URL}/posts?_fields=acf,date,id,slug,title,content?per_page=100`;

  const response = await fetch(url, { method: "GET" });
  const pagination = await Number(response.headers.get("X-WP-TotalPages"));
  let queryData: RawPostQueryData[] = await response.json();

  if (pagination > 1) {
    for (let i = 2; i <= pagination; i++) {
      let newResponse: RawPostQueryData[] = await fetch(`${url}?page=${i}`, {
        method: "GET",
      }).then((res) => res.json());
      queryData = [...queryData, ...newResponse];
    }
  }

  return queryData.map((post) => {
    return {
      id: post.id,
      title: post.title.rendered,
      slug: post.slug,
      acf: post.acf,
      postDate: post.date,
      content: post.content.rendered,
      categories: post.categories,
    };
  });
}

// Retrieves data for all pages
// If more than one page, requests all API pages and puts them into one array
async function pageHandler(): Promise<PageQueryData[]> {
  const url = `${process.env.WORDPRESS_URL}/pages?_fields=content,id,title,slug`;

  const response = await fetch(url, { method: "GET" });
  const pagination = await Number(response.headers.get("X-WP-TotalPages"));
  let queryData: RawPageQueryData[] = await response.json();

  if (pagination > 1) {
    for (let i = 2; i <= pagination; i++) {
      let newResponse: RawPageQueryData[] = await fetch(`${url}?page=${i}`, {
        method: "GET",
      }).then((res) => res.json());
      queryData = [...queryData, ...newResponse];
    }
  }

  return queryData.map((page) => {
    return {
      id: page.id,
      title: page.title.rendered,
      slug: page.slug,
      content: page.content.rendered,
    };
  });
}

// Retrieves data for all pages
// If more than one page, requests all API pages and puts them into one array
async function categoryHandler(): Promise<CategoryQueryData[]> {
  const url = `${process.env.WORDPRESS_URL}/categories?_fields=id,name,parent,slug`;

  const response = await fetch(url, { method: "GET" });
  const pagination = await Number(response.headers.get("X-WP-TotalPages"));
  let queryData: RawCategoryQueryData[] = await response.json();

  if (pagination > 1) {
    for (let i = 2; i <= pagination; i++) {
      let newResponse: RawCategoryQueryData[] = await fetch(
        `${url}?page=${i}`,
        {
          method: "GET",
        },
      ).then((res) => res.json());
      queryData = [...queryData, ...newResponse];
    }
  }

  return queryData.map((category) => {
    return {
      id: category.id,
      title: category.name,
      slug: category.slug,
      parentId: category.parent,
    };
  });
}

// Switch statement for which handler to use
const queryHandler = {
  posts: postHandler,
  pages: pageHandler,
  categories: categoryHandler,
};

export default function handler(
  req: PostsRequest,
  res: NextApiResponse<WordPressQueryData[]>,
) {
  res.status(200);
}
