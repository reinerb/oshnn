import NewsletterForm from "@/utils/components/NewsletterForm";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import React from "react";

function NewsletterSignupPage() {
  return (
    <PrimaryLayout
      title="Newsletter Signup | OSHNN"
      className="flex flex-col gap-4"
    >
      <h1 className="text-2xl">Sign up for our newsletter!</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, commodi
        cum quaerat doloribus laboriosam labore magnam praesentium, tempora,
        iusto similique id. Ad, magni assumenda maiores in commodi optio odio
        iste?
      </p>

      <NewsletterForm />
      <p className="self-end italic">* denotes a required field.</p>
    </PrimaryLayout>
  );
}

export default NewsletterSignupPage;
