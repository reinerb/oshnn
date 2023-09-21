import ContactForm from "@/utils/components/ContactForm";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import React from "react";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function ContactPage() {
  return (
    <ReCaptchaProvider reCaptchaKey={RECAPTCHA_SITE_KEY}>
      <PrimaryLayout title="Contact Us | OSHNN">
        <h1 className="text-2xl">Contact Us</h1>
        <ContactForm />
      </PrimaryLayout>
    </ReCaptchaProvider>
  );
}

export default ContactPage;
