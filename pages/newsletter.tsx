import NewsletterForm from "@/utils/components/NewsletterForm";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import React from "react";

function NewsletterSignupPage() {
  return (
    <PrimaryLayout
      title="Newsletter Signup | OSHNN"
      className="flex flex-col gap-4"
    >
      <NewsletterForm />
    </PrimaryLayout>
  );
}

export default NewsletterSignupPage;
