export async function incrementViews(pageId: number) {
  try {
    await fetch(`https://api.oshnn.com/wp-json/oshnn/v1/view/${pageId}`, {
      method: "POST",
    });
  } catch (e) {
    console.error(e);
  }
}
