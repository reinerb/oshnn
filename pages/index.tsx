import Head from "next/head";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import ArticleBlock from "@/utils/components/Articles/ArticleBlock";
import ArticleGrid from "@/utils/components/Articles/ArticleGrid";
import { GetStaticProps } from "next";
import LinkButton from "@/utils/components/LinkButton";
import SearchBar from "@/utils/components/SearchBar";
import type { Category } from "@/utils/types/blog";
import type { RawCategory } from "@/utils/types/wordpressQueries";
import WaveDivider from "@/utils/components/WaveDivider";

type HomepageArticle = {
  id: number;
  slug: string;
  title: string;
  categories: number[];
  publicationDate: string;
  publicationTitle: string;
  paywall: boolean;
};

type HomepageProps = {
  trending: HomepageArticle[];
  national: HomepageArticle[];
  rhodeIsland: HomepageArticle[];
  topics: Topics;
};

type Topics = {
  national: Category;
  rhodeIsland: Category;
};

const getPosts = async (): Promise<HomepageArticle[]> => {
  const postsQuery = await wpQueryHandler("posts", {
    fields: ["acf", "date", "categories"],
  });

  return postsQuery.map(({ acf, ...post }) => {
    return {
      ...post,
      publicationDate: acf?.publicationDate,
      publicationTitle: acf?.publicationTitle,
      paywall: acf?.paywall,
    } as HomepageArticle;
  });
};

const getTopics = async (): Promise<Topics> => {
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

export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
  const posts = await getPosts();
  const topics = await getTopics();

  const trending = posts.slice(0, 6);
  const national = posts
    .filter((post) => post.categories.includes(topics.national.id))
    .slice(0, 5);
  const rhodeIsland = posts
    .filter((post) => post.categories.includes(topics.rhodeIsland.id))
    .slice(0, 5);

  return { props: { trending, national, rhodeIsland, topics } };
};

export default function Home({
  trending,
  national,
  rhodeIsland,
  topics,
}: HomepageProps) {
  return (
    <>
      <Head>
        <title>OSHNN | Ocean State Health News Network</title>
      </Head>
      <PrimaryLayout className="flex flex-col gap-8">
        <section className="text-primary-900 dark:text-primary-300 flex flex-col items-center gap-2">
          <h1 className="text-center text-2xl 2xl:text-3xl">
            Ocean State Health News Network
          </h1>
          <p className="max-w-6xl text-center">
            OSHNN navigates the intricate landscape of medical advancements and
            wellness insights to bring you the latest developments in healthcare
            news from around the country and Rhode Island.
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
        <section className="bg-primary-800 dark:bg-primary-200 flex max-w-fit flex-col items-center gap-2 self-center rounded-md px-8 py-4 text-neutral-50 dark:text-neutral-950">
          <h2 className="text-xl">Subscribe</h2>
          <p>
            Sign up today and stay informed. Receive the latest curated
            healthcare news in your inbox on a biweekly basis.
          </p>
          <LinkButton href="/newsletter" inverted>
            Subscribe
          </LinkButton>
        </section>
        <SearchBar action={(query) => console.log(query)} />
      </PrimaryLayout>
    </>
  );
}
