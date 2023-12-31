import { decode } from "html-entities";
import type {
  WordPressQueryType,
  WordPressQueryParams,
  WordPressResponse,
  WordPressData,
  CategoryResponse,
} from "@/utils/types/wordpressQueries";

const WP_URL = "https://api.oshnn.com";

// Queries the WordPress CMS for the given type of posts
// Accepts a params object:
// {
//   fields: an array of the fields to deliver
//   slug: the slug of the post you want
//   id: the ID of the post you want
// }
export async function wpQueryHandler(
  type: WordPressQueryType,
  params?: WordPressQueryParams,
): Promise<WordPressData[]> {
  let queryData;
  if (type === "categories") {
    queryData = await categoryQueryHandler(params);
  } else {
    queryData = await postPageQueryHandler(type, params);
  }

  // Return the query data with the rendered title and content
  return queryData
    .filter((element) => element.id > 0)
    .map((element) => {
      let data = {
        ...element,
        content: element.content?.rendered,
        excerpt: element.excerpt?.rendered,
        title: decode(element.title.rendered),
      };

      return JSON.parse(JSON.stringify(data));
    });
}

async function categoryQueryHandler(
  params?: WordPressQueryParams,
): Promise<WordPressResponse[]> {
  // If the params object is present and the fields object is not empty,
  // join all of the elements with commas
  const fieldString = params?.fields ? `,${params.fields.join(",")}` : "";
  const slugString = params?.slug ? `&slug=${params.slug}` : "";
  const idString = params?.id ? `&id=${params.id}` : "";
  const pageString = params?.page ? `&page=${params.page}` : "";
  const perPageString = params?.perPage ? `&per_page=${params.perPage}` : "";

  // Construct the URL
  const url = `${WP_URL}/wp-json/wp/v2/categories?_fields=id,name,slug${fieldString}${slugString}${idString}${pageString}${perPageString}`;

  // Fetch from that URL
  const response = await fetch(url, { method: "GET" });
  let queryData: CategoryResponse[] = await response.json();

  if (!params?.page) {
    // Determine how many pages there are and save this page of the response
    const pagination = await Number(response.headers.get("X-WP-TotalPages"));

    // Fetch all pages
    if (pagination > 1) {
      for (let i = 2; i <= pagination; i++) {
        let newResponse: CategoryResponse[] = await fetch(`${url}&page=${i}`, {
          method: "GET",
        }).then((res) => res.json());
        queryData = [...queryData, ...newResponse];
      }
    }
  }

  const cleanData: WordPressResponse[] = queryData.map(
    ({ name, ...category }) => {
      return {
        ...category,
        title: { rendered: name },
      };
    },
  );

  return cleanData;
}

async function postPageQueryHandler(
  type: string,
  params?: WordPressQueryParams,
) {
  // If the params object is present and the fields object is not empty,
  // join all of the elements with commas
  const fieldString = params?.fields ? `,${params.fields.join(",")}` : "";
  const slugString = params?.slug ? `&slug=${params.slug}` : "";
  const idString = params?.id ? `&include=${params.id}` : "";
  const searchString = params?.search
    ? `&search=${encodeURIComponent(params.search)}`
    : "";
  const pageString = params?.page ? `&page=${params.page}` : "";
  const perPageString = params?.perPage ? `&per_page=${params.perPage}` : "";
  const categoryIdString = params?.categoryIds
    ? `&categories=${params.categoryIds.join(",")}`
    : "";

  // Construct the URL
  const url = `${WP_URL}/wp-json/wp/v2/${type}?_fields=id,title,slug
    ${fieldString}
    ${slugString}
    ${idString}
    ${searchString}
    ${pageString}
    ${perPageString}
    ${categoryIdString}
  `;

  // Fetch from that URL
  const response = await fetch(url, { method: "GET" });
  let queryData: WordPressResponse[] = await response.json();

  if (!params?.page) {
    // Determine how many pages there are and save this page of the response
    const pagination = await Number(response.headers.get("X-WP-TotalPages"));

    // Fetch all pages
    if (pagination > 1) {
      for (let i = 2; i <= pagination; i++) {
        let newResponse: WordPressResponse[] = await fetch(`${url}&page=${i}`, {
          method: "GET",
        }).then((res) => res.json());
        queryData = [...queryData, ...newResponse];
      }
    }
  }

  return queryData;
}
