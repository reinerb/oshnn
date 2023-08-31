import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from "next-share";

interface ShareButtonProps {
  shareTo: "facebook" | "twitter" | "linkedin" | "email" | "clipboard";
  quote: string;
  className?: string;
}

const icons = {
  facebook: faFacebookF,
  twitter: faTwitter,
  linkedin: faLinkedinIn,
  email: faEnvelope,
  clipboard: faCopy,
};

function ShareButton(props: ShareButtonProps) {
  const { shareTo, quote, className } = props;

  const styles = `text-slate-950 transition-colors duration-200 hover:text-slate-700 dark:text-slate-50 dark:hover:text-slate-300 ${className}`;

  const icon = <FontAwesomeIcon icon={icons[shareTo]} className={styles} />;

  if (shareTo === "facebook") {
    return (
      <FacebookShareButton url={window.location.href} quote={quote}>
        {icon}
      </FacebookShareButton>
    );
  }
  if (shareTo === "twitter") {
    return (
      <TwitterShareButton url={window.location.href} title={quote}>
        {icon}
      </TwitterShareButton>
    );
  }
  if (shareTo === "linkedin") {
    return (
      <LinkedinShareButton url={window.location.href} title={quote}>
        {icon}
      </LinkedinShareButton>
    );
  }
  if (shareTo === "email") {
    return (
      <EmailShareButton
        url={window.location.href}
        subject="Check out this article from OSHNN!"
        body={quote}
        blankTarget
      >
        {icon}
      </EmailShareButton>
    );
  }
  if (shareTo === "clipboard") {
    return (
      <FontAwesomeIcon
        icon={icons[shareTo]}
        onClick={() => navigator.clipboard.writeText(window.location.href)}
        className={`cursor-pointer ${styles}`}
        aria-label="copy-to-clipboard"
      />
    );
  }
}

export default ShareButton;
