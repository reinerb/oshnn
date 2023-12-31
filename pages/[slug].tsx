import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import type { GetStaticPaths, GetStaticProps } from "next";

interface CMSPageProps {
  title: string;
  content: string;
}

export const getStaticProps: GetStaticProps<CMSPageProps> = async (context) => {
  const query = await wpQueryHandler("pages", {
    fields: ["content"],
    slug: context.params?.slug as string,
  }).then((res) => res[0]);

  if (!query) {
    return {
      notFound: true,
    };
  }

  return {
    props: { title: query.title, content: query.content! },
    revalidate: 300, // Revalidate every 5 minutes
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const query = await wpQueryHandler("pages");

  const paths = query.map((page) => {
    return { params: { slug: page.slug } };
  });

  return { paths, fallback: "blocking" };
};

function CMSPage({ title, content }: CMSPageProps) {
  return (
    <PrimaryLayout title={title} className="cms-page">
      <h1 className="mb-2 text-2xl lg:mb-4">{title}</h1>
      <article dangerouslySetInnerHTML={{ __html: content }} />
    </PrimaryLayout>
  );
}

export default CMSPage;
