import React from "react";
import socialLink from "./../config/socialLink.json";
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
          <a href={socialLink.linkdin}>
            <FaLinkedinIn href="" className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5">
          <a href={socialLink.github}>
            <FaGithub className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5">
          <a href={socialLink.x}>
            <RiTwitterXLine className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5">
          <a href={socialLink.instagram}>
            <FaInstagram className="cursor-pointer" />
          </a>
        </div>
        <div className="pb-5 ">
          <a href={socialLink.facebook}>
            <FaFacebookF className="cursor-pointer " />
          </a>
        </div>
      </div>
    </>
  );
}
