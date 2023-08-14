import type { NextApiRequest, NextApiResponse } from "next";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<FormData>,
) {
  res
    .status(200)
    .json({ name: "John Doe", email: "jdoe@gmail.com", message: "Hi!" });
}
