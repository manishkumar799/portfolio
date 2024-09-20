import React from "react";
import socialLink from "./../config/socialLink.json";
import { RiTwitterXLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      {" "}
      <div className=" h-[100px] text-white flex justify-center items-center bg-black flex-end flex-col gap-2">
        <div>© No Copyright. No Rights Reserved</div>
        <div className="flex gap-5 flex-rpw">
          <div className="">
            <a href={socialLink.linkdin}>
              <FaLinkedinIn href="" className="cursor-pointer" />
            </a>
          </div>
          <div className="">
            <a href={socialLink.github}>
              <FaGithub className="cursor-pointer" />
            </a>
          </div>
          <div className="">
            <a href={socialLink.x}>
              <RiTwitterXLine className="cursor-pointer" />
            </a>
          </div>
          <div className="">
            <a href={socialLink.instagram}>
              <FaInstagram className="cursor-pointer" />
            </a>
          </div>
          <div className=" ">
            <a href={socialLink.facebook}>
              <FaFacebookF className="cursor-pointer " />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
