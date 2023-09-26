import NewsletterForm from "@/utils/components/NewsletterForm";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import React from "react";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

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
