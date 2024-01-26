import React from "react";
import TextStroke from "./TextStroke";

function Skills() {
  return (
    <>
      <div className="relative sm:h-[500px] h-[600px]">
        <TextStroke Title={"Skills"} TitleHeading={"My Skills"} />

        <div className="flex w-full flex-col sm:flex-row justify-between sm:gap-10 px-2">
          <div className="sm:w-[50%]">
            <div className="py-4">
              <div className="flex justify-between  text-[#9c9c9c] py-1">
                <div>Node JS</div>
                <div>90%</div>
              </div>
              <div className="h-2  bg-[#282828]">
                <div className={`h-2 w-[90%] bg-[#009d66]`}></div>
              </div>
              {/* <ProgressBar heading={"Node JS"} percentage={"90%"} /> */}
            </div>
            <div className="py-4">
              <div className="flex justify-between  text-[#9c9c9c] py-1">
                <div>JavaScript</div>
                <div>95%</div>
              </div>
              <div className="h-2  bg-[#282828]">
                <div className={`h-2 w-[95%] bg-[#009d66]`}></div>
              </div>
              {/* <ProgressBar heading={"HTML/CSS"} percentage={"95%"} /> */}
            </div>
            <div className="py-4">
              <div className="flex justify-between  text-[#9c9c9c] py-1">
                <div>React JS</div>
                <div>80%</div>
              </div>
              <div className="h-2  bg-[#282828]">
                <div className={`h-2 w-[80%] bg-[#009d66]`}></div>
              </div>
              {/* <ProgressBar heading={"Javascript"} percentage={"80%"} /> */}
            </div>
          </div>
          <div className="sm:w-[50%]">
            <div className="py-4">
              <div className="flex justify-between  text-[#9c9c9c] py-1">
                <div>MongoDB</div>
                <div>80%</div>
              </div>
              <div className="h-2  bg-[#282828]">
                <div className={`h-2 w-[80%] bg-[#009d66]`}></div>
              </div>
              {/* <ProgressBar heading={"React JS"} percentage={"80%"} /> */}
            </div>
            <div className="py-4">
              <div className="flex justify-between  text-[#9c9c9c] py-1">
                <div>MySQL</div>
                <div>90%</div>
              </div>
              <div className="h-2  bg-[#282828]">
                <div className={`h-2 w-[90%] bg-[#009d66]`}></div>
              </div>
              {/* <ProgressBar heading={"Python"} percentage={"90%"} /> */}
            </div>
            <div className="py-4">
              <div className="flex justify-between  text-[#9c9c9c] py-1">
                <div>PHP</div>
                <div>70%</div>
              </div>
              <div className="h-2  bg-[#282828]">
                <div className={`h-2 w-[70%] bg-[#009d66]`}></div>
              </div>
              {/* <ProgressBar heading={"TypeScript"} percentage={"70%"} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
