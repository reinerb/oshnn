import Button from "@/utils/components/Button";
import LinkButton from "@/utils/components/LinkButton";
import Logo from "@/utils/components/Logo";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { useRouter } from "next/router";
import React from "react";

function NotFoundPage() {
  const router = useRouter();

  return (
    <PrimaryLayout title="404 Not Found | OSHNN" className="grid items-center">
      <section className="flex flex-col items-center gap-4">
        <Logo />
        <h1 className="text-2xl">404 | Resource Not Found</h1>
        <p className="text-lg">
          We're sorry, the resource you were looking for does not exist.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button onClick={() => router.back()} primary>
            Go Back
          </Button>
          <LinkButton href="/" primary>
            Go Home
          </LinkButton>
        </div>
      </section>
    </PrimaryLayout>
  );
}

export default NotFoundPage;
