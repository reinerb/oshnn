import React from "react";
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ShareButtonProps {
  shareTo: "facebook" | "twitter" | "linkedin" | "email" | "clipboard";
  url: string;
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
  const { shareTo, url } = props;

  return <FontAwesomeIcon icon={icons[shareTo]} />;
}

export default ShareButton;
