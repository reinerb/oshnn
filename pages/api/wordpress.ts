import { Override } from "@/utils/types/generics";
import {
  PageQueryData,
  PostQueryData,
  RawPostQueryData,
  WordPressQueryData,
} from "@/utils/types/wordpressQueries";
import type { NextApiRequest, NextApiResponse } from "next";

type PostsRequest = Override<NextApiRequest, { body: WordPressQuery }>;

interface WordPressQuery {
  type: "posts" | "pages" | "categories";
}

const wordpressUrl = "https://oshnn.btreiner.com/wp-json/wp/v2";

async function postHandler(): Promise<PostQueryData[]> {
  const url = `${wordpressUrl}/posts?_fields=acf,date,id,slug,title,content`;

  const response: RawPostQueryData[] = await fetch(url, { method: "GET" }).then(
    (res) => res.json(),
  );

  return response.map((post) => {
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

export default function handler(
  req: PostsRequest,
  res: NextApiResponse<WordPressQueryData[]>,
) {
  res.status(200);
}
