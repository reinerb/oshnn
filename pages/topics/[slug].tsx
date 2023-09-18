import React from "react";
import { Category } from "@/utils/types/blog";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";

type TopicPageArticle = {
  id: number;
  slug: string;
  title: string;
  categories: number[];
  publicationDate: string;
  publicationTitle: string;
  paywall: boolean;
};

type Topics = {
  national: Category;
  rhodeIsland: Category;
};

type TopicPageProps = {
  topic: Category;
  allTopics: Topics;
  posts: TopicPageArticle[];
};

function TopicPage({ topic, allTopics, posts }: TopicPageProps) {
  return <PrimaryLayout></PrimaryLayout>;
}

export default TopicPage;
