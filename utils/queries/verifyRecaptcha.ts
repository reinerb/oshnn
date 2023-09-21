export async function verifyRecaptcha(
  secretKey: string,
  token: string,
): Promise<boolean> {
  const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`;

  try {
    const response = await fetch(url, {
      method: "POST",
    });

    if (!response.ok) {
      return false;
    }

    const data = await response.json();

    return data.success && data.score > 0.5;
  } catch (error) {
    console.error(error);
    return false;
  }
}
