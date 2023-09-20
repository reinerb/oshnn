export async function verifyRecaptcha(
  secretKey: string,
  token: string,
): Promise<boolean> {
  const url = `https://www.google.com/recaptcha/api/siteverify`;
  const body = `secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: body,
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();
    return data.success && data.score > 0.5;
  } catch (error) {
    return false;
  }
}
