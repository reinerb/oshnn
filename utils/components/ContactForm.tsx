"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";
import * as Yup from "yup";
import { useReCaptcha } from "next-recaptcha-v3";

type ContactFormProps = {
  className?: string;
};

type FormData = {
  name: string;
  email: string;
  message: string;
};

type SubmissionError = {
  tripped: boolean;
  message: string;
};

const schema = Yup.object({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  message: Yup.string().required("Required"),
}).required();

function ContactForm({ className }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ mode: "onTouched", resolver: yupResolver(schema) });
  const { executeRecaptcha } = useReCaptcha();
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionError, setSubmissionError] = useState<SubmissionError>({
    tripped: false,
    message: "",
  });

  // Submission handler
  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    if (!executeRecaptcha) {
      setSubmissionError({
        tripped: true,
        message: "executeRecaptcha not initialized",
      });
      return;
    }

    const token = await executeRecaptcha("onSubmit");

    const formSubmission = { formData, token };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(formSubmission),
      }).then((res) => res.json());

      response.success
        ? setSubmitted(true)
        : setSubmissionError({
            tripped: true,
            message: response.message,
          });
    } catch (e) {
      if (typeof e === "string") {
        setSubmissionError({ tripped: true, message: e });
      } else if (e instanceof Error) {
        setSubmissionError({ tripped: true, message: e.message });
      }
    }
  };

  return (
    <section>
      {submitted ? (
        <p className="text-lg">
          Thank you for contacting us! We'll reply to your message as soon as
          possible.
        </p>
      ) : (
        <>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={twMerge(
              "grid grid-cols-1 gap-4 md:grid-cols-2",
              className,
            )}
          >
            <div className="grid w-full grid-cols-2">
              <label htmlFor="name">Name</label>
              {errors.name && (
                <label
                  htmlFor="name"
                  className="place-self-end font-bold text-red-700 dark:text-red-300"
                >
                  {errors.name!.message}
                </label>
              )}
              <input
                id="name"
                type="text"
                placeholder="Nomen Nescio"
                className={twMerge(
                  "col-span-2 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
                  errors.name && "bg-red-200 dark:bg-red-800",
                )}
                {...register("name")}
              />
            </div>
            <div className="grid w-full grid-cols-2">
              <label htmlFor="email">Email</label>
              {errors.email && (
                <label
                  htmlFor="email"
                  className="place-self-end font-bold text-red-700 dark:text-red-300"
                >
                  {errors.email!.message}
                </label>
              )}
              <input
                id="email"
                type="email"
                placeholder="nescio@gmail.com"
                className={twMerge(
                  "col-span-2 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
                  errors.email && "bg-red-200 dark:bg-red-800",
                )}
                {...register("email")}
              />
            </div>
            <div className="grid w-full grid-cols-2 md:col-span-2">
              <label htmlFor="message">Message</label>
              {errors.message && (
                <label
                  htmlFor="message"
                  className="place-self-end font-bold text-red-700 dark:text-red-300"
                >
                  {errors.message!.message}
                </label>
              )}
              <textarea
                id="message"
                placeholder="Hi! I'd like to write to you about..."
                className={twMerge(
                  "col-span-2 h-36 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
                  errors.message && "bg-red-200 dark:bg-red-800",
                )}
                {...register("message")}
              />
            </div>
            <div className="grid w-full md:col-span-2">
              <Button
                disabled={isSubmitting}
                primary
                type="submit"
                className="w-full md:w-24 md:place-self-end"
              >
                {isSubmitting ? (
                  <div className="mx-auto h-6 w-6 animate-spin rounded-full border-4 border-primary-200 !border-t-transparent dark:border-primary-800">
                    <span className="sr-only">Loading...</span>
                  </div>
                ) : (
                  "Submit"
                )}
              </Button>
            </div>
          </form>
          {submissionError.tripped && (
            <div className="text-lg text-red-500">
              {submissionError.message}
            </div>
          )}
        </>
      )}
    </section>
  );
}

export default ContactForm;
