import React from "react";
import ShareButton from "./ShareButton";

interface ShareButtonProps {
  callToAction: string;
  quote: string;
}

function ShareButtons(props: ShareButtonProps) {
  const { callToAction, quote } = props;

  return (
    <section className="flex w-full flex-col items-center rounded-md bg-neutral-200 px-4 py-2 dark:bg-neutral-800 sm:flex-row sm:justify-between">
      <h2 className="block text-lg">{callToAction}</h2>
      <div id="share-buttons" className="flex items-center gap-3 text-lg">
        <ShareButton shareTo="facebook" quote={quote} />
        <ShareButton shareTo="twitter" quote={quote} />
        <ShareButton shareTo="linkedin" quote={quote} />
        <ShareButton shareTo="email" quote={quote} />
        <ShareButton shareTo="clipboard" quote={quote} />
      </div>
    </section>
  );
}

export default ShareButtons;
