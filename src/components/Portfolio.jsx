import React from "react";
import TextStroke from "./TextStroke";

function Portfolio() {
  return (
    <>
      <div id="portfolio" className="text-white pb-20">
        {" "}
        <TextStroke Title={"Projects"} TitleHeading={"My Projects"} />
        <div className="flex justify-center gap-6 py-5 text-sm flex-wrap">
          {/* <div>All</div>
          <div>Image</div>
          <div>Music</div>
          <div>Video</div>
          <div>Links</div>
          <div>Website</div> */}
        </div>
        <div className="flex justify-center gap-4 sm:flex-col flex-row px-20">
          <div className="flex gap-10 flex-col justify-center sm:flex-row sm:pb-4">
            <div className="relative">
              <img
                className="img-size"
                src="src\assets\portfolio_img_1-1.jpg"
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
                src="src\assets\portfolio_img_2-2.jpg"
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div>
              <img
                className="img-size"
                src="src\assets\portfolio_img_3-1.jpg"
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
          </div>
          <div className="flex gap-10 flex-col justify-center sm:flex-row">
            <div>
              <img
                className="img-size"
                src="src\assets\portfolio_img_4-2.jpg"
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div>
              <img
                className="img-size"
                src="src\assets\portfolio_img_5-1.jpg"
                alt=""
              />
              <p className="flex justify-center pt-4 text-xl">Image Project</p>
            </div>
            <div>
              <img
                className="img-size"
                src="src\assets\portfolio_img_6-1.jpg"
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
