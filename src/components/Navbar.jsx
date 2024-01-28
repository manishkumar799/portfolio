import React, { useState, useEffect } from "react";
import menuItems from "./MenuItems";
import { FaBars, FaTimes, FaConnectdevelop } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "./../assets/Manish-logos_white.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const navigate = ["home", "resume", "portfolio", "contact"];

  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`navbar ${isSticky ? "navbar-scrolled" : ""} z-10`}>
        <div className="flex navbar-logo gap-2 ">
          {/* <FaConnectdevelop color="#009d66" size={"35px"} /> */}
          <AnchorLink href="#home">
            <h1 className="text-3xl text-[#009d66]" href="home">
              {/* InnoMesh */}
              <img className="absolute w-40 top-[-60px] left-[-20px]  md:w-48 md:left-10 md:pt-2" src={logo} alt="" />
            </h1>
          </AnchorLink>
        </div>
        <div className="menu-icon" onClick={handleClick}>
          {active ? <FaTimes color="white" /> : <FaBars color="white" />}
        </div>
        <ul className={active ? "nav-menu active" : "nav-menu"}>
          {menuItems.map((item, index) => {
            return (
              <li key={index}>
                <AnchorLink
                  href={`#${item.url}`}
                  className={`${item.cName} text-slate-300 text-sm hover:text-slate-50`}
                >
                  {item.title}
                </AnchorLink>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
