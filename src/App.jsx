import "./App.css";
import "./index.css";
import Home from "./pages/Home";
import Intro from "./sections/Intro";
import Resume from "./sections/Resume";
import Portfolio from "./sections/Portfolio";
import Contact from "./sections/Contact";
import Social from "./components/Social";
import { RiTwitterXLine } from "react-icons/ri";
import {
  FaFacebookF,
  FaGithub,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div className="">
        <Home />
        <Intro />
        <Resume />
        <Social />
        <div className=" h-[100px] text-white flex justify-center items-center bg-black flex-end flex-col gap-2">
          <div>© No Copyright. No Rights Reserved</div>
          <div className="flex gap-5 flex-rpw">
            <div className="">
              <a href="https://www.linkedin.com/in/manishkumar799/">
                <FaLinkedinIn href="" className="cursor-pointer" />
              </a>
            </div>
            <div className="">
              <a href="https://github.com/manishkumar799">
                <FaGithub className="cursor-pointer" />
              </a>
            </div>
            <div className="">
              <a href="https://twitter.com/CipherdMan">
                <RiTwitterXLine className="cursor-pointer" />
              </a>
            </div>
            <div className="">
              <a href="https://www.instagram.com/cipherdman/">
                <FaInstagram className="cursor-pointer" />
              </a>
            </div>
            <div className=" ">
              <a href="https://www.facebook.com/cipherdman/">
                <FaFacebookF className="cursor-pointer " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
