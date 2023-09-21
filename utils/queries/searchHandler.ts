import { wpQueryHandler } from "./wpQueryHandler";
import type { BlockArticle } from "../types/BlogPages";
import { WordPressResponse } from "../types/wordpressQueries";

type SearchHandlerParams = {
  searchString: string;
  page?: number;
  perPage?: number;
};

type SearchResults = {
  posts: BlockArticle[];
  totalPages: number;
};

const WP_URL = "https://oshnn.btreiner.com";

export async function searchHandler({
  searchString,
  page,
  perPage,
}: SearchHandlerParams): Promise<SearchResults> {
  const url = `${WP_URL}/wp-json/wp/v2/posts?fields=id,title,slug,acf
    &search=${encodeURIComponent(searchString)}
    &page=${page || 1}
    &per_page=${perPage || 10}`;

  const response = await fetch(url);

  // Get the total number of pages of search results
  const totalPages = await Number(response.headers.get("X-WP-TotalPages"));

  // Format all posts as BlockArticle instances
  const postsResponse = (await response.json()) as WordPressResponse[];
  const posts = postsResponse.map(({ title, acf, ...post }) => {
    return {
      ...post,
      publicationDate: acf!.publicationDate,
      publicationTitle: acf!.publicationTitle,
      paywall: acf!.paywall,
    } as BlockArticle;
  });

  return { posts, totalPages };
}
