import React from "react";

function TextStroke({ Title, TitleHeading }) {
  return (
    <div className="section-heading pb-16">
      <h2 className="section-title text-white">
        {TitleHeading}{" "}
        <span className="title-bg text-[110px] hidden sm:block w-[200px]">
          {" "}
          {Title}{" "}
        </span>
      </h2>
    </div>
  );
}

export default TextStroke;
