import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import ArticleBlock from "@/utils/components/Articles/ArticleBlock";
import ArticleGrid from "@/utils/components/Articles/ArticleGrid";
import { GetStaticProps } from "next";
import SearchBar from "@/utils/components/Search/SearchBar";
import WaveDivider from "@/utils/components/WaveDivider";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import type { BlockArticle, Topics } from "@/utils/types/BlogPages";
import { WordPressResponse } from "@/utils/types/wordpressQueries";
import { decode } from "html-entities";

type HomepageProps = {
  trending: BlockArticle[];
  national: BlockArticle[];
  rhodeIsland: BlockArticle[];
  topics: Topics;
};

export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
  // Get all topics
  const topics = await getTopics();

  // Get trending posts x6
  const trendingIds = (await fetch(
    "https://api.oshnn.com/wp-json/oshnn/v1/posts",
  ).then((res) => res.json())) as number[];

  let trending: BlockArticle[] = [];
  for (const id of trendingIds) {
    let postData = (await fetch(
      `https://api.oshnn.com/wp-json/wp/v2/posts/${id}?_fields=id,slug,title,acf,categories`,
    ).then((res) => res.json())) as WordPressResponse;

    let post: BlockArticle = {
      id: postData.id,
      title: decode(postData.title.rendered),
      slug: postData.slug,
      publicationDate: postData.acf!.publicationDate,
      publicationTitle: postData.acf!.publicationTitle,
      paywall: postData.acf!.paywall,
      categories: postData.categories!,
    };

    trending.push(post);
  }

  // Get national and Rhode Island posts x5 each
  const national = await getPosts({
    page: 1,
    perPage: 5,
    categoryIds: [topics.national.id],
  });
  const rhodeIsland = await getPosts({
    page: 1,
    perPage: 5,
    categoryIds: [topics.rhodeIsland.id],
  });

  return {
    props: { trending, national, rhodeIsland, topics },
    revalidate: 300, // Revalidate every 5 minutes
  };
};

export default function Home({
  trending,
  national,
  rhodeIsland,
  topics,
}: HomepageProps) {
  return (
    <PrimaryLayout
      title="OSHNN | Ocean State Health News Network"
      meta="OSHNN: Your Healthcare News Companion | Stay Informed, Take Action"
      className="flex flex-col gap-8"
    >
      <section className="flex flex-col items-center gap-2 text-primary-900 dark:text-primary-300">
        <h1 className="text-center text-2xl 2xl:text-3xl">
          Ocean State Health News Network
        </h1>
        <p className="max-w-screen-xl text-center">
          The volume of healthcare news and information can be overwhelming.
          OSHNN navigates this information superhighway for you. OSHNN
          highlights articles of interest to provide you with insight and
          knowledge. OSHNN chronicles healthcare news from around the country
          and specific to the Ocean State.
        </p>
        <p>
          OSHNN's ultimate aim is to educate and share knowledge so that our
          users can take action!
        </p>
      </section>

      <ArticleGrid title="Trending in Healthcare">
        {trending.map(({ id, ...post }) => {
          return <ArticleBlock key={id} {...post} />;
        })}
      </ArticleGrid>

      <WaveDivider className="mx-auto my-2 max-w-sm" />

      <ArticleGrid
        title="Rhode Island Healthcare Headlines"
        topic={topics.rhodeIsland}
      >
        {rhodeIsland.map(({ id, ...post }) => {
          return <ArticleBlock key={id} {...post} />;
        })}
      </ArticleGrid>

      <WaveDivider className="mx-auto my-2 max-w-sm" />

      <ArticleGrid title="US Healthcare Headlines" topic={topics.national}>
        {national.map(({ id, ...post }) => {
          return <ArticleBlock key={id} {...post} />;
        })}
      </ArticleGrid>

      <WaveDivider className="mx-auto my-2 max-w-sm" />

      <section className="flex max-w-fit flex-col items-center gap-2 self-center rounded-md bg-primary-900 px-8 py-4 text-neutral-50 dark:bg-primary-100 dark:text-neutral-950">
        <h2 className="text-xl">Subscribe</h2>
        <p>
          Sign up today and stay informed. Receive the latest curated healthcare
          news in your inbox on a biweekly basis.
        </p>
        <a
          href="/newsletter"
          className="bg-primary-300 px-4 py-2 text-primary-950 hover:bg-primary-200 hover:text-primary-950 active:bg-primary-100 active:text-primary-950 dark:bg-primary-700 dark:text-primary-50 dark:hover:bg-primary-800 dark:hover:text-primary-50 dark:active:bg-primary-900 dark:active:text-primary-50"
        >
          Subscribe
        </a>
      </section>

      <SearchBar />
    </PrimaryLayout>
  );
}
