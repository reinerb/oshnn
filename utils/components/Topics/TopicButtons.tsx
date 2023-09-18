import { Category } from "@/utils/types/blog";
import React from "react";
import LinkButton from "../LinkButton";
import { twMerge } from "tailwind-merge";

type TopicButtonsProps = {
  topic: Category;
  className?: string;
};

function TopicButtons({ topic, className }: TopicButtonsProps) {
  return (
    <div className={twMerge("flex flex-wrap justify-center gap-2", className)}>
      {topic.children?.map((topic) => (
        <LinkButton small key={topic.id} href={`/topics/${topic.slug}`}>
          {topic.title}
        </LinkButton>
      ))}
      <LinkButton small primary href={`topics/${topic.slug}`}>
        All {topic.title} Headlines
      </LinkButton>
    </div>
  );
}

export default TopicButtons;
