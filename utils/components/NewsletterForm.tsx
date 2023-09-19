"use client";

import React from "react";
import { twMerge } from "tailwind-merge";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import Button from "./Button";

type NewsletterFormProps = {
  className?: string;
};

type NewsletterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  jobTitle?: string;
  company?: string;
};

const schema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  phone: Yup.string()
    .matches(/^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
      message: "Invalid phone number",
    })
    .optional(),
});

function NewsletterForm({ className }: NewsletterFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm<NewsletterFormData>({
    mode: "onTouched",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<NewsletterFormData> = (data) =>
    console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={twMerge("grid grid-cols-1 gap-4 md:grid-cols-2", className)}
    >
      <div className="grid w-full grid-cols-2">
        <label htmlFor="name">First Name*</label>
        {errors.firstName && (
          <label
            htmlFor="name"
            className="place-self-end font-bold text-red-700 dark:text-red-300"
          >
            {errors.firstName.message}
          </label>
        )}
        <input
          id="name"
          type="text"
          placeholder="Nomen"
          className={twMerge(
            "col-span-2 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
            errors.firstName && "bg-red-200 dark:bg-red-800",
          )}
          {...register("firstName")}
        />
      </div>

      <div className="grid w-full grid-cols-2">
        <label htmlFor="lastName">Last Name*</label>
        {errors.lastName && (
          <label
            htmlFor="lastName"
            className="place-self-end font-bold text-red-700 dark:text-red-300"
          >
            {errors.lastName.message}
          </label>
        )}
        <input
          id="lastName"
          type="lastName"
          placeholder="Nescio"
          className={twMerge(
            "col-span-2 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
            errors.lastName && "bg-red-200 dark:bg-red-800",
          )}
          {...register("lastName")}
        />
      </div>

      <div className="grid w-full grid-cols-2">
        <label htmlFor="email">Email*</label>
        {errors.email && (
          <label
            htmlFor="email"
            className="place-self-end font-bold text-red-700 dark:text-red-300"
          >
            {errors.email.message}
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

      <div className="grid w-full grid-cols-2">
        <label htmlFor="phone">Phone</label>
        {errors.phone && (
          <label
            htmlFor="phone"
            className="place-self-end font-bold text-red-700 dark:text-red-300"
          >
            {errors.phone.message}
          </label>
        )}
        <input
          id="phone"
          type="tel"
          placeholder="401-555-1234"
          className={twMerge(
            "col-span-2 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
            errors.phone && "bg-red-200 dark:bg-red-800",
          )}
          {...register("phone")}
        />
      </div>

      <div className="grid w-full grid-cols-2">
        <label htmlFor="jobTitle">Job Title</label>
        {errors.jobTitle && (
          <label
            htmlFor="jobTitle"
            className="place-self-end font-bold text-red-700 dark:text-red-300"
          >
            {errors.jobTitle.message}
          </label>
        )}
        <input
          id="jobTitle"
          type="jobTitle"
          placeholder="Executive Director"
          className={twMerge(
            "col-span-2 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
            errors.jobTitle && "bg-red-200 dark:bg-red-800",
          )}
          {...register("jobTitle")}
        />
      </div>

      <div className="grid w-full grid-cols-2">
        <label htmlFor="company">Company</label>
        {errors.company && (
          <label
            htmlFor="company"
            className="place-self-end font-bold text-red-700 dark:text-red-300"
          >
            {errors.company.message}
          </label>
        )}
        <input
          id="company"
          type="company"
          placeholder="Rhode Island Hospital"
          className={twMerge(
            "col-span-2 w-full rounded-md bg-neutral-100 px-4 py-2 text-neutral-950 outline-none placeholder:italic placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-900 dark:text-neutral-50 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700",
            errors.company && "bg-red-200 dark:bg-red-800",
          )}
          {...register("company")}
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

export default NewsletterForm;
