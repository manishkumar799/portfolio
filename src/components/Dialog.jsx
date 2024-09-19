import React from "react";

const Dialog = ({
  isOpen,
  onClose,
  title,
  children,
  description,
  technologies,
}) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-white">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>

          {/* Full-Screen Dialog */}
          <div className="p-6 w-full h-full max-w-full max-h-full flex flex-col justify-between z-10">
            {/* Header */}
            <div className="flex justify-end items-center">
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700 text-[30px]"
              >
                ✖
              </button>
            </div>

            {/* Content */}
            <div className="my-4 flex-grow overflow-auto flex lg:flex-row flex-col px-16 gap-4 bg-opacity-10">
              <img
              className=" lg:h-[90%]"
                src="https://lionsgate.brightspotcdn.com/1d/90/8fc75de5411e985f3a2def98358d/johnwick4-section-promo-double-home-03.jpg"
                alt=""
              />
              <div className="">
                <h2 className="text-2xl font-semibold">{title}</h2>
                <p>{description}</p>
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
