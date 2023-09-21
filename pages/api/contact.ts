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

      if (!recaptchaVerified) {
        return res.status(400).json({ error: "reCAPTCHA verification failed" });
      }

      // Define the Web3Forms submission URL
      const web3FormsUrl = "https://api.web3forms.com/submit";

      // Create a FormData object and append the fields dynamically
      const form = new FormData();
      form.append("subject", "New message from OSHNN contact form");
      form.append("access_key", WEB3FORMS_KEY);

      // Loop through the formData and append each field
      for (const [field, value] of Object.entries(formData)) {
        form.append(field, value);
      }

      // Make the API request to Web3Forms
      const response = await fetch(web3FormsUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: form,
      });

      if (!response.ok) {
        const errorMessage = `HTTP error! Status: ${response.status}`;
        console.error(errorMessage); // Log the error for debugging
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const responseData = await response.json();
      res.status(200).json(responseData);
    } catch (error) {
      console.error("An error occurred:", error); // Log the error for debugging
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
