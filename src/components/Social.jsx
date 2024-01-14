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
        <div className="pb-5 ">
          <FaFacebookF className="cursor-pointer " />
        </div>
        <div className="pb-5">
          <RiTwitterXLine className="cursor-pointer" />
        </div>
        <div className="pb-5">
          <FaInstagram className="cursor-pointer" />
        </div>
        <div className="pb-5">
          <FaGithub className="cursor-pointer"/>
        </div>
        <div className="pb-5">
          <FaLinkedinIn className="cursor-pointer"/>
        </div>
      </div>
    </>
  );
}
