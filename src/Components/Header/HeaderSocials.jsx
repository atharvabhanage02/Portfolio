import React from "react";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/atharva-bhanage-02/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/atharvabhanage02" target="_blank">
        <FaGithub />
      </a>
      <a href="https://twitter.com/AtharvaBhanage" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export { HeaderSocials };
