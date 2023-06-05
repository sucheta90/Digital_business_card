import React from "react";
import FacebookIcon from "./images/Icons/square-facebook-brands.svg";
import Instagram from "./images/Icons/square-instagram-brands.svg";
import Twitter from "./images/Icons/square-twitter-brands.svg";
import Github from "./images/Icons/square-github-brands.svg";
export default function Footer() {
  return (
    <div className="footer">
      <span>
        <a
          href="https://twitter.com/Sucheta_Mu"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Twitter} alt="Twitter Logo" />
        </a>
      </span>
      <span>
        <a
          href="https://www.facebook.com/sucheta.mukherjee.3/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={FacebookIcon} alt="Facebook logo" />
        </a>
      </span>
      <span>
        <a
          href="https://www.instagram.com/suchetamukherjee/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Instagram} alt="Instagram logo" />
        </a>
      </span>
      <span>
        <a href="https://github.com/sucheta90" target="_blank" rel="noreferrer">
          <img src={Github} alt="github logo" />
        </a>
      </span>
    </div>
  );
}
