import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import { Category } from "@/utils/types/blog";
import { PostData } from "@/utils/types/wordpressQueries";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";

interface ArticleProps {
  title: string;
  content: string;
  publicationDate: string;
  articleAuthors: string;
  publicationTitle: string;
  articleUrl: string;
  paywall: boolean;
  categories: Category[];
}

export const getStaticProps: GetStaticProps<ArticleProps> = async (context) => {
  const slug = context.params?.slug as string;

  const response = (await wpQueryHandler("posts", {
    fields: ["acf", "categories", "content"],
    slug,
  })) as PostData[];
  const postData = response[0];

  const categoryQuery = (await wpQueryHandler("categories")) as Category[];

  const categories = categoryQuery.filter((category) => {
    return postData.categories?.includes(category.id);
  });

  return {
    props: {
      title: postData.title,
      content: postData.content,
      ...postData.acf,
      categories,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postData = await wpQueryHandler("posts");

  const paths = postData.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

function Page(props: ArticleProps) {
  const {
    title,
    content,
    publicationDate,
    publicationTitle,
    paywall,
    articleUrl,
    articleAuthors,
    categories,
  } = props;

  return (
    <PrimaryLayout>
      <article>
        <h1>{title}</h1>
      </article>
    </PrimaryLayout>
  );
}

export default Page;
