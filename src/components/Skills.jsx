import React from "react";
import TextStroke from "./TextStroke";
import react from "./../assets/react.png"
import mysql from "./../assets/mysql.png";
import node from "./../assets/node.png";
import mongo from "./../assets/mongodb.png";
import express from "./../assets/express.png";
import html from "./../assets/html.png";
import css from "./../assets/css.png";
import vscode from "./../assets/vscode.png";
import postman from "./../assets/postman.png";
import sequelize from "./../assets/sequelize.png";
import socketIo from "./../assets/socket.png";
import js from "./../assets/jest.png";
import tailwind from "./../assets/tailwind.png";
import git from "./../assets/git.png";

function Skills() {
  return (
    <>
      <div className="py-10 md:py-20">
        <TextStroke Title={"Skills"} TitleHeading={"My Skills"} />
        <div className="flex gap-5 flex-wrap justify-center lg:px-[50px] xl:px-[100px] pt-5 px-0">
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={node} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              {/* <FaReact size={60} color="#149ECA" /> */}
              <img className="h-16 w-16" src={express} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={mysql} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={mongo} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={react} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
            <img className="h-16 w-16" src={html} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={css} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={tailwind} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={git} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={vscode} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={postman} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={sequelize} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={socketIo} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
          <div className="w-[100px] h-[120px] bg-[#1e1e1e]  flex flex-col skill-custom-border  ">
            <div className=" g-blue-400 w-full h-full flex justify-center items-center">
              <img className="h-16 w-16" src={js} alt="" />
            </div>
            <div className=" g-red-600 w-full h-[20%] flex justify-center items-center border-2  border-t-[#3e3e3e] border-[#1e1e1e]"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
