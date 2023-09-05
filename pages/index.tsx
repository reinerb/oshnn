import Head from "next/head";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import ArticleBlock from "@/utils/components/Articles/ArticleBlock";
import ArticleGrid from "@/utils/components/Articles/ArticleGrid";
import { GetStaticProps } from "next";
import LinkButton from "@/utils/components/LinkButton";

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
};

export const getStaticProps: GetStaticProps<HomepageProps> = async () => {
  const postsQuery = await wpQueryHandler("posts", {
    fields: ["acf", "date", "categories"],
  });

  const categories = await wpQueryHandler("categories");
  const nationalId = categories.find(
    (category) => category.title === "National",
  )?.id as number;
  const rhodeIslandId = categories.find(
    (category) => category.title === "Rhode Island",
  )?.id as number;

  const posts = postsQuery.map(({ acf, ...post }) => {
    return {
      ...post,
      publicationDate: acf?.publicationDate,
      publicationTitle: acf?.publicationTitle,
      paywall: acf?.paywall,
    } as HomepageArticle;
  });

  const trending = posts.slice(0, 4);
  const national = posts
    .filter((post) => post.categories.includes(nationalId))
    .slice(0, 4);
  const rhodeIsland = posts
    .filter((post) => post.categories.includes(rhodeIslandId))
    .slice(0, 4);

  return { props: { trending, national, rhodeIsland } };
};

export default function Home({
  trending,
  national,
  rhodeIsland,
}: HomepageProps) {
  return (
    <>
      <Head>
        <title>OSHNN | Ocean State Health News Network</title>
      </Head>
      <PrimaryLayout className="flex flex-col gap-8">
        <section className="flex flex-col items-center gap-2">
          <h1 className="text-center text-2xl 2xl:text-3xl">
            Ocean State Health News Network
          </h1>
          <p className="max-w-6xl text-center">
            OSHNN navigates the intricate landscape of medical advancements and
            wellness insights to bring you the latest developments in healthcare
            news from around the country and Rhode Island.
          </p>
        </section>
        <ArticleGrid title="Latest">
          {trending.map(({ id, ...post }) => {
            return <ArticleBlock key={id} {...post} />;
          })}
        </ArticleGrid>
        <ArticleGrid title="National">
          {national.map(({ id, ...post }) => {
            return <ArticleBlock key={id} {...post} />;
          })}
        </ArticleGrid>
        <ArticleGrid title="Rhode Island">
          {rhodeIsland.map(({ id, ...post }) => {
            return <ArticleBlock key={id} {...post} />;
          })}
        </ArticleGrid>
        <section className="flex flex-col items-center gap-2">
          <h2 className="text-xl">Subscribe to our newsletter</h2>
          <p>
            Sign up today and stay informed. Receive the latest curated
            healthcare news in your inbox on a biweekly basis.
          </p>
          <LinkButton href="/newsletter">Subscribe</LinkButton>
        </section>
      </PrimaryLayout>
    </>
  );
}
