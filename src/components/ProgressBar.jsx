import React from "react";

function ProgressBar({ heading, percentage }) {
  return (
    <>
      <div className="flex justify-between w-[100%] text-[#9c9c9c] py-1">
        <div>{heading}</div>
        <div>{percentage}</div>
      </div>
      <div className="h-2 w-[100%] bg-[#282828]">
        <div className={`h-2 w-[${percentage}] bg-[#009d66]`}></div>
      </div>
    </>
  );
}

export default ProgressBar;
