import React, { useEffect } from "react";
import Carousel from "./Carousel";


const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  description,
  technologies,
}) => {
  // Prevent scrolling when the dialog is open
  
  const images = [
    "https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg",
    "https://wallpapercat.com/w/middle-retina/1/2/4/5822259-2920x1640-desktop-hd-cute-laptop-background-image.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://png.pngtree.com/background/20230526/original/pngtree-beautiful-blue-in-high-peak-mountains-background-wallpaper-picture-image_2742502.jpg",
  ];
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
        <div className="fixed inset-0 flex justify-center items-center z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black opacity-80"
            onClick={onClose}
          ></div>

          {/* Dialog */}
          <div className="relative p-6 w-11/12 lg:w-2/3 bg-black rounded-lg shadow-lg">
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
            <div className="my-4 flex-grow overflow-auto flex lg:flex-row flex-col gap-4 text-white">
              {/* <img
                className="lg:h-[90%] max-w-full"
                src="https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg"
                alt=""
              /> */}
              <Carousel images={images}/>
              <div>
                <h2 className="text-2xl font-semibold">{title}</h2>
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
      )}
    </>
  );
};

export default Dialog;
