import React, { useEffect } from "react";
import Carousel from "./Carousel";
import { FaExternalLinkAlt } from "react-icons/fa";

const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  description,
  technologies,
  images,
  url
}) => {
  // Prevent scrolling when the dialog is open
  console.log(url)
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 ">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-80"
            onClick={onClose}
          ></div>

          {/* Dialog */}
          <div className="relative p-6 w-11/12k lg:w-2/3 bg-black rounded-lg shadow-lg h-[30pxkk] w-[1200px]">
            {/* Header */}
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="text-white hover:text-gray-300 text-2xl"
              >
                ✖
              </button>
            </div>

            {/* Content */}
            <div className="my-4 flex-grow overflow-auto flex md:flex-row flex-col gap-4 text-white">
              {/* <img
                className="lg:h-[90%] max-w-full"
                src="https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg"
                alt=""
              /> */}
              <Carousel images={images} />
              <div className="">
                <div className="flex gap-2 items-center">
                  <a href={url} target="_blank">

                  <h2 className="text-2xl font-semibold text-[#009d66]">{title}</h2>
                  </a>
                  <a href={url} target="_blank">

                  <FaExternalLinkAlt color="#009d66" />
                  </a>
                </div>
                <div className="overflow-y-scroll h-[300px]">
                  <p className="mt-2">{description}</p>
                  <h4 className="mt-4 font-semibold">Technologies Used:</h4>
                  <ul className="list-disc ml-6">
                    {technologies.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
