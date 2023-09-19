"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { useForm } from "react-hook-form";
import Button from "./Button";

type ContactFormProps = {
  className?: string;
};

function ContactForm({ className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({ mode: "onTouched" });

  return (
    <form
      className={twMerge("grid grid-cols-1 gap-4 md:grid-cols-2", className)}
    >
      <div className="w-full">
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          name="name"
          id="name"
          type="text"
          placeholder="Name"
          className="w-full rounded-md bg-neutral-100 px-4 py-2 outline-none focus-within:bg-neutral-300 dark:bg-neutral-900 dark:focus-within:bg-neutral-700"
        />
      </div>

      <div className="w-full">
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Email Address"
          className="w-full rounded-md bg-neutral-100 px-4 py-2 outline-none focus-within:bg-neutral-300 dark:bg-neutral-900 dark:focus-within:bg-neutral-700"
        />
      </div>

      <div className="w-full md:col-span-2">
        <label htmlFor="message"></label>
        <textarea
          name="message"
          id="message"
          placeholder="Message"
          className="h-36 w-full rounded-md bg-neutral-100 px-4 py-2 outline-none focus-within:bg-neutral-300 dark:bg-neutral-900 dark:focus-within:bg-neutral-700"
        />
      </div>

      <div className="grid w-full md:col-span-2">
        <Button
          primary
          type="submit"
          className="w-full md:w-fit md:place-self-end"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
