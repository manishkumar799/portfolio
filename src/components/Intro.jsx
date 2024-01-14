import React from "react";

function Intro() {
  return (
    <div className="flex justify-start flex-col xl:flex-row  text-white  xl:px-48 px-6 md:px-10 lg:px-20 gap-10 pt-24">
      <div className="flex justify-center ">
        <img
          className="object-cover border-1 rounded-[50%] xl:rounded-none h-[250px] w-[250px] xl:h-[500px] xl:w-[420px]"
          src="src\assets\W13.jpg"
          alt=""
        />
      </div>
      <div className="">
        <div className="py-5">
          <p className="text-[rgb(0,157,102)] text-2xl font-bold py-2">
            Who am i?
          </p>
          <p className="text-2xl font-bold py-2 leading-[40px]">
            Hello, I'm Manish Kumar Pandit, a dedicated Web Developer passionate
            about crafting digital excellence.
          </p>
          <p className="text-[#7C7C7C] text-sm leading-7">
            Experienced Full Stack Web Developer adept in both backend and
            frontend technologies. Proficient in Node.js, React, MongoDB,
            Express, MySQL, and more, with a focus on creating seamless digital
            experiences. Committed to delivering innovative solutions that
            enhance user engagement and satisfaction.
          </p>
        </div>
        <hr />
        <div className="flex py-7 pr-8 md:justify-between flex-col md:flex-row">
          <div>
            <p className="py-2">
              <span>Name:</span>
              <span className="text-[#7C7C7C] pl-2">
                {" "}
                Manish Kumar Pandit
              </span>{" "}
            </p>{" "}
            <p>
              <span>Age:</span>
              <span className="text-[#7C7C7C] pl-2"> 25</span>{" "}
            </p>
          </div>
          <div>
            <p className="py-2">
              From:<span className="text-[#7C7C7C] pl-2"> Kolkata, IN </span>
            </p>{" "}
            <p>
              Email:
              <span className="text-[#7C7C7C] pl-2">
                {" "}
                manishkumar991msp@gmail.com
              </span>{" "}
            </p>
          </div>
        </div>
        <button className="bg-[rgb(0,157,102)] hover:bg-[rgb(0,180,102)] text-white py-3 px-6">
          Download CV
        </button>
      </div>
    </div>
  );
}

export default Intro;
