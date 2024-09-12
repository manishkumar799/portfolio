import React from "react";

const Dialog = ({ isOpen, onClose, title, children }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center text-[#fff]">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black opacity-50"
            onClick={onClose}
          ></div>

          {/* Dialog */}
          <div className=" p-6 rounded-lg shadow-lg z-10 w-full max-w-md mx-auto bg-black">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{title}</h2>
              <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
              >
                ✖
              </button>
            </div>
            <div className="mt-4 ">{children}</div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Dialog;
