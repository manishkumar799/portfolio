import React from "react";
import TextStroke from "./TextStroke";
import img1 from "./../assets/portfolio_img_1-1.jpg";

function Portfolio() {
  return (
    <>
      <div id="portfolio" className="text-white py-20">
        {" "}
        <TextStroke Title={"Projects"} TitleHeading={"My Projects"} />
        <div className="flex justify-center gap-6 py-5 text-sm flex-wrap">
        </div>
        <div className="flex justify-center gap-4 sm:flex-col flex-row px-20">
          <div className="flex gap-10 flex-col justify-center sm:flex-row sm:pb-4">
            <div className="relative">
              <img
                className="img-size"
                src={img1}
                alt=""
              />
              <div className="absolute top-[35%] flex justify-center items-center w-full">
                {/* ghjgjh */}
              </div>
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div>
              <img
                className="img-size"
                src={img1}
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div>
              <img
                className="img-size"
                src={img1}
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
          </div>
          <div className="flex gap-10 flex-col justify-center sm:flex-row">
            <div>
              <img
                className="img-size"
                src={img1}
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div>
              <img
                className="img-size"
                src={img1}
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div>
              <img
                className="img-size"
                src={img1}
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
