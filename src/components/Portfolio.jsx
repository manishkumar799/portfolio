import React, { useState } from "react";
import TextStroke from "./TextStroke";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdZoomOutMap } from "react-icons/md";
import img1 from "./../assets/portfolio_img_1-1.jpg";
import Swal from "sweetalert2";

const dialog = ()=>{

}


const PortfolioItem = ({ imgSrc, projectText }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() =>
        Swal.fire({
          icon: "info",
          title: "In Progress...",
          toast: true,
          position: "top-end",
          timer: 3000,
          showConfirmButton: false,
        })
      }
    >
      <img
        className={`img-size custom-box-shadow ${isHovered ? "hovered" : ""}`}
        src={imgSrc}
        alt=""
      />
      {isHovered && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
          <MdZoomOutMap color="rgb(0,157,102)" size={30} />
        </div>
      )}
      <p className="flex justify-center pt-4 text-xl">{projectText}</p>
    </div>
  );
};

function Portfolio() {
  return (
    <>
      <div id="portfolio" className="text-white py-10 md:py-20">
        <TextStroke Title={"Projects"} TitleHeading={"My Projects"} />
        <div className="flex justify-center gap-4 sm:flex-col flex-row px-20">
          <div className="flex gap-10 flex-col justify-center sm:flex-row sm:pb-4">
            <PortfolioItem imgSrc={img1} projectText="Project 1" />
            <PortfolioItem imgSrc={img1} projectText="Project 2" />
            <PortfolioItem imgSrc={img1} projectText="Project 3" />
          </div>
          <div className="flex gap-10 flex-col justify-center sm:flex-row sm:pb-4">
            <PortfolioItem imgSrc={img1} projectText="Project 4" />
            <PortfolioItem imgSrc={img1} projectText="Project 5" />
            <PortfolioItem imgSrc={img1} projectText="Project 6" />
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
