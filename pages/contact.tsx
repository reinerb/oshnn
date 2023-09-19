import ContactForm from "@/utils/components/ContactForm";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import React from "react";

function ContactPage() {
  return (
    <PrimaryLayout title="Contact Us | OSHNN">
      <h1 className="text-2xl">Contact Us</h1>
      <ContactForm />
    </PrimaryLayout>
  );
}

export default ContactPage;
