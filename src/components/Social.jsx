import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Social() {
  return (
    <>
      <div className="follow-link">
        <div className="rotate-link">
          <div style={{ transform: "rotate(90deg)" }} className="follow-me">
            Follow Me
          </div>
        </div>
        <div className="pb-5">
          <a href="https://www.linkedin.com/in/manishkumar799/">
            <FaLinkedinIn href="" className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5">
          <a href="https://github.com/manishkumar799">
            <FaGithub className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5">
          <a href="https://twitter.com/CipherdMan">
            <RiTwitterXLine className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5">
          <a href="https://www.instagram.com/cipherdman/">
            <FaInstagram className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5 ">
          <a href="https://www.facebook.com/cipherdman/">
            <FaFacebookF className="cursor-pointer " />
          </a>
        </div>
      </div>
    </>
  );
}
