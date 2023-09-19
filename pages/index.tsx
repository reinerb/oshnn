import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import ArticleBlock from "@/utils/components/Articles/ArticleBlock";
import ArticleGrid from "@/utils/components/Articles/ArticleGrid";
import { GetStaticProps } from "next";
import LinkButton from "@/utils/components/LinkButton";
import SearchBar from "@/utils/components/SearchBar";
import WaveDivider from "@/utils/components/WaveDivider";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import type { BlockArticle, Topics } from "@/utils/types/BlogPages";

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
  const trending = await getPosts({ page: 1, perPage: 6 });

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

  return { props: { trending, national, rhodeIsland, topics } };
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
      meta="OSHNN navigates the intricate landscape of medical advancements and
            wellness insights to bring you the latest developments in healthcare
            news from around Rhode Island and the rest of the country."
      className="flex flex-col gap-8"
    >
      <section className="flex flex-col items-center gap-2 text-primary-900 dark:text-primary-300">
        <h1 className="text-center text-2xl 2xl:text-3xl">
          Ocean State Health News Network
        </h1>
        <p className="max-w-6xl text-center">
          OSHNN navigates the intricate landscape of medical advancements and
          wellness insights to bring you the latest developments in healthcare
          news from around Rhode Island and the rest of the country.
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
        <LinkButton href="/newsletter" inverted primary>
          Subscribe
        </LinkButton>
      </section>

      <SearchBar action={(query) => console.log(query)} />
    </PrimaryLayout>
  );
}
