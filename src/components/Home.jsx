import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Typewriter from "typewriter-effect";

function Home() {
  const intro = ["Developer", "Freelancer", "Manish"];

  return (
    <>
      <div
        id="home"
        className="home-container relative h-[600px] sm:h-[95vh] xl:h-[100vh] !pb-[100px] !w-full"
      >
        <Navbar />
        <div className="sm:pl-10 xl:pl-20">
          <div className="absolute intro-container pl-3 md:pt-44 md:pl-8 ">
            <h1 className="text-2xl sm:text-4xl">Hi There!</h1>
            <div className="text-3xl font-bold pt-1 sm:text-6xl flex gap-3">
              <div>I am</div>
              <div>
                <Typewriter
                  options={{
                    strings: intro,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <h2 className="text-2xl pt-3 sm:text-4xl">
              Transforming Code into Digital Gold.
            </h2>
            <button className="mt-4 w-[150px] bg-[rgb(0,157,102)] hover:bg-[rgb(0,180,102)] text-white py-3 px-6">
              Contact Me
            </button>
          </div>
          <div className="flex text-white gap-7 pt-8 flex-col pl-10 absolute sm:flex-row  sm:bottom-[50px] sm:gap-24 bottom-[10px]">
            <div className="relative ">
              <span className="text-xl font-[600]">Location</span>
              <div className="text-sm pt-2 text-slate-300">Kolkata, IN</div>
              <div className="absolute top-1 w-[2px] h-[50px] left-[-30px] bg-slate-100 sm:hidden"></div>
            </div>
            <div className="relative">
              <span className="text-xl font-[600]">Phone</span>
              <div className="text-sm pt-2 text-slate-300">+919477133009</div>
              <div className="absolute top-1 w-[2px] h-[50px] left-[-30px] bg-slate-100 sm:w-[1px]"></div>
            </div>
            <div className="relative">
              <span className="text-xl font-[600]">Email</span>
              <div className="text-sm pt-2 text-slate-300">
                manish.kp.dev@gmail.com
              </div>
              <div className="absolute top-1 w-[2px] h-[50px] left-[-30px] bg-slate-100 sm:w-[1px]"></div>
            </div>
            <div className="flex justify-end ml-50%"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
