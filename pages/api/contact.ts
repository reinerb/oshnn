import { verifyRecaptcha } from "@/utils/queries/verifyRecaptcha";
import type { NextApiRequest, NextApiResponse } from "next";

// Define the type for the request body
type SubmissionData = {
  token: string;
  formData: {
    name: string;
    email: string;
    message: string;
  };
};

const WEB3FORMS_KEY = process.env.WEB3FORMS_KEY || "";
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    try {
      const { token, formData } = req.body as SubmissionData;

      // Verify reCAPTCHA by calling verifyRecaptcha function with secret key
      const recaptchaVerified = await verifyRecaptcha(
        RECAPTCHA_SECRET_KEY,
        token,
      );

      console.log(recaptchaVerified);

      if (!recaptchaVerified) {
        return res
          .status(400)
          .json({ success: false, message: "reCaptcha failed" });
      }

      // Create a FormData object and append the fields dynamically
      const submission = {
        ...formData,
        subject: "New message from OSHNN contact form",
        access_key: WEB3FORMS_KEY,
      };

      // Make the API request to Web3Forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(submission),
      });

      if (!response.ok) {
        const errorMessage = `HTTP error! Status: ${response.status}`;
        console.error(errorMessage); // Log the error for debugging
        console.log(await response.json());
        return res.status(500).json({ success: false, message: errorMessage });
      }

      const responseData = await response.json();
      res.status(200).json(responseData);
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      if (typeof error === "string") {
        res.status(500).json({ success: false, message: error });
      } else if (error instanceof Error) {
        res.status(500).json({ success: false, message: error.message });
      }
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
