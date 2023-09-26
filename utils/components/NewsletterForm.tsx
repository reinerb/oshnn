"use client";

import { useTheme } from "next-themes";
import React, { useEffect } from "react";

function NewsletterForm() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Create the first script tag
    const script1 = document.createElement("script");
    script1.text = `var _ctct_m = "76e2031ff5abd0e0e4365a88681f4383";`;

    // Create the second script tag
    const script2 = document.createElement("script");
    script2.id = "signupScript";
    script2.src =
      "//static.ctctcdn.com/js/signup-form-widget/current/signup-form-widget.min.js";
    script2.async = true;
    script2.defer = true;

    // Append the scripts to the document
    document.body.appendChild(script1);
    document.body.appendChild(script2);

    // Clean up the scripts when the component unmounts
    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, [resolvedTheme]);

  return (
    <>
      <div
        className="ctct-inline-form mx-auto max-w-screen-lg"
        data-form-id="b26a8d83-a640-4086-a5ee-05701dc09360"
      />
    </>
  );
}

export default NewsletterForm;
