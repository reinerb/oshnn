import type {
  WordPressQueryType,
  WordPressQueryParams,
  WordPressResponse,
  WordPressData,
} from "@/utils/types/wordpressQueries";

const WP_URL = "https://oshnn.btreiner.com";

// Queries the WordPress CMS for the given type of posts
// Accepts a params object:
// {
//   fields: string[]
// }
export async function wpQueryHandler(
  type: WordPressQueryType,
  params?: WordPressQueryParams,
): Promise<WordPressData[]> {
  // If the params object is present and the fields object is not empty,
  // join all of the elements with commas
  const fieldString = params?.fields ? `,${params.fields.join(",")}` : "";

  // Construct the URL
  const url = `${WP_URL}/wp-json/wp/v2/${type}?_fields=id,title,slug${fieldString}`;

  // Fetch from that URL
  const response = await fetch(url, { method: "GET" });

  // Determine how many pages there are and save this page of the response
  const pagination = await Number(response.headers.get("X-WP-TotalPages"));
  let queryData: WordPressResponse[] = await response.json();

  // Fetch all pages
  if (pagination > 1) {
    for (let i = 2; i <= pagination; i++) {
      let newResponse: WordPressResponse[] = await fetch(`${url}?page=${i}`, {
        method: "GET",
      }).then((res) => res.json());
      queryData = [...queryData, ...newResponse];
    }
  }

  // Return
  return queryData.map((element) => {
    let data = {
      ...element,
      content: element.content?.rendered,
      title: element.title.rendered,
    };

    return JSON.parse(JSON.stringify(data));
  });
}
