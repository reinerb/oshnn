import { verifyRecaptcha } from "@/utils/queries/verifyRecaptcha";
import type { NextApiRequest, NextApiResponse } from "next";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "";
const ACCESS_TOKEN = process.env.CONSTANT_CONTACT_ACCESS_TOKEN || "";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  jobTitle: string;
  company: string;
};

type RequestData = {
  token: string;
  formData: FormData;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const { token, formData } = req.body as RequestData;

      // Verify reCAPTCHA
      const recaptchaVerified = await verifyRecaptcha(
        RECAPTCHA_SECRET_KEY,
        token,
      );

      if (!recaptchaVerified) {
        return res
          .status(400)
          .json({ success: false, message: "reCAPTCHA verification failed" });
      }

      const url = "https://api.cc.email/v3/contacts/sign_up_form";

      const data = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email_address: formData.email,
        phone_number: formData.phone,
        job_title: formData.jobTitle,
        company_name: formData.company,
        list_memberships: ["d13d60d0-f256-11e8-b47d-fa163e56c9b0"],
      };

      // Make the API request to Constant Contact
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();
      res.status(200).json({ success: true, ...responseData });
    } catch (error) {
      console.error("An error occurred", error);
      res.status(500).json({
        success: false,
        message:
          (typeof error === "string" && error) ||
          (error instanceof Error && error.message),
        error: "Internal Server Error",
      });
    }
  } else {
    res.status(405).json({ success: false, message: "Method not allowed" });
  }
}
