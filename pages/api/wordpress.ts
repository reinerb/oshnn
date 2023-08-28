import { Override } from "@/utils/types/generics";
import { WordPressQueryData } from "@/utils/types/wordpressQueries";
import type { NextApiRequest, NextApiResponse } from "next";

type PostsRequest = Override<NextApiRequest, { body: WordPressQuery }>;

interface WordPressQuery {
  type: "posts" | "pages" | "categories" | "media";
  params?: string[];
}

export default function handler(
  req: PostsRequest,
  res: NextApiResponse<WordPressQueryData>,
) {
  res.status(200);
}
