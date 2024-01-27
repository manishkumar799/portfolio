import React, { useState } from "react";
import TextStroke from "./TextStroke";
import { FaArrowRightLong } from "react-icons/fa6";
import img1 from "./../assets/portfolio_img_1-1.jpg";
import { Link } from "react-router-dom";
import { MdZoomOutMap } from "react-icons/md";

function Portfolio() {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);

  return (
    <>
      <div id="portfolio" className="text-white py-10 md:py-20">
        {" "}
        <TextStroke Title={"Projects"} TitleHeading={"My Projects"} />
        <div className="flex justify-center gap-4 sm:flex-col flex-row px-20">
          <div className="flex gap-10 flex-col justify-center sm:flex-row sm:pb-4">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered1(true)}
              onMouseLeave={() => setIsHovered1(false)}
            >
              <img
                className={`img-size custom-box-shadow ${isHovered1 ? "hovered" : ""}`}
                src={img1}
                alt=""
              />
              {isHovered1 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <MdZoomOutMap color="rgb(0,157,102)" size={30} />
                </div>
              )}
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
            >
              <img
                className={`img-size custom-box-shadow ${isHovered2 ? "hovered" : ""}`}
                src={img1}
                alt=""
              />
              {isHovered2 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <MdZoomOutMap color="rgb(0,157,102)" size={30} />
                </div>
              )}
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered3(true)}
              onMouseLeave={() => setIsHovered3(false)}
            >
              <img
                className={`img-size custom-box-shadow ${isHovered3 ? "hovered" : ""}`}
                src={img1}
                alt=""
              />
              {isHovered3 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <MdZoomOutMap color="rgb(0,157,102)" size={30} />
                </div>
              )}
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
          </div>
          <div className="flex gap-10 flex-col justify-center sm:flex-row">
            <div
              className="relative"
              onMouseEnter={() => setIsHovered4(true)}
              onMouseLeave={() => setIsHovered4(false)}
            >
              <img
                className={`img-size custom-box-shadow ${isHovered4 ? "hovered" : ""}`}
                src={img1}
                alt=""
              />
              {isHovered4 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <MdZoomOutMap color="rgb(0,157,102)" size={30} />
                </div>
              )}
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered5(true)}
              onMouseLeave={() => setIsHovered5(false)}
            >
              <img
                className={`img-size custom-box-shadow ${isHovered5 ? "hovered" : ""}`}
                src={img1}
                alt=""
              />
              {isHovered5 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <MdZoomOutMap color="rgb(0,157,102)" size={30} />
                </div>
              )}
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setIsHovered6(true)}
              onMouseLeave={() => setIsHovered6(false)}
            >
              <img
                className={`img-size custom-box-shadow ${isHovered6 ? "hovered" : ""}`}
                src={img1}
                alt=""
              />
              {isHovered6 && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
                  <MdZoomOutMap color="rgb(0,157,102)" size={30} />
                </div>
              )}
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center pt-8">
          <Link to={"/portfolio/projects"}>
            <button className="border-2 border-[rgb(0,157,102)] hover:bg-[rgb(0,157,102)] text-white py-2 px-6">
              <div className="flex justify-center items-center gap-3">
                <div> All Projects </div>
                <div>
                  <FaArrowRightLong color="[rgb(0,157,102)]" />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
