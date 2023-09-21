import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import Search from "@/utils/components/Search/Search";
import type { NextPageContext } from "next";

type SearchPageProps = {
  search: string;
  page: number;
};

function SearchPage(props: SearchPageProps) {
  return (
    <PrimaryLayout title="Search | OSHNN">
      <Search {...props} />
    </PrimaryLayout>
  );
}

SearchPage.getInitialProps = async ({ query }: NextPageContext) => {
  return {
    search: query.search || "",
    page: Number(query.page) || 1,
  };
};

export default SearchPage;
