import React from "react";
import TextStroke from "../components/TextStroke";
import react from "./../assets/skills/react.png";
import mysql from "./../assets/skills/mysql.png";
import node from "./../assets/skills/node.png";
import mongo from "./../assets/skills/mongodb.png";
import express from "./../assets/skills/express.png";
import html from "./../assets/skills/html.png";
import css from "./../assets/skills/css.png";
import vscode from "./../assets/skills/vscode.png";
import postman from "./../assets/skills/postman.png";
import sequelize from "./../assets/skills/sequelize.png";
import socketIo from "./../assets/skills/socket.png";
import js from "./../assets/skills/jest.png";
import tailwind from "./../assets/skills/tailwind.png";
import git from "./../assets/skills/git.png";

const skills = [
  { name: "Node.js", imgSrc: node },
  { name: "Express.js", imgSrc: express },
  { name: "MySQL", imgSrc: mysql },
  { name: "MongoDB", imgSrc: mongo },
  { name: "React", imgSrc: react },
  { name: "HTML", imgSrc: html },
  { name: "CSS", imgSrc: css },
  { name: "Tailwind", imgSrc: tailwind },
  { name: "Git", imgSrc: git },
  { name: "VSCode", imgSrc: vscode },
  { name: "Postman", imgSrc: postman },
  { name: "Sequelize", imgSrc: sequelize },
  { name: "Socket.io", imgSrc: socketIo },
  { name: "JavaScript", imgSrc: js },
];

const SkillCard = ({ imgSrc }) => (
  <div className="w-[100px] h-[120px] bg-[#1e1e1e] flex flex-col skill-custom-border">
    <div className="g-blue-400 w-full h-full flex justify-center items-center">
      <img className="h-16 w-16" src={imgSrc} alt="" />
    </div>
    <div className="g-red-600 w-full h-[20%] flex justify-center items-center border-2 border-t-[#3e3e3e] border-[#1e1e1e]"></div>
  </div>
);

function Skills() {
  return (
    <div className="py-10 md:py-20">
      <TextStroke Title={"Skills"} TitleHeading={"My Skills"} />
      <div className="flex gap-5 flex-wrap justify-center lg:px-[50px] xl:px-[100px] pt-5 px-0">
        {skills.map((skill, index) => (
          <SkillCard key={index} imgSrc={skill.imgSrc} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
