import React from "react";
import TextStroke from "../components/TextStroke";

function Resume() {
  return (
    <>
      <div id="resume" className="s ">
        <TextStroke Title={"Resume"} TitleHeading={"My Resume"} />
        <div className="flex flex-col sm:flex-row justify-start text-white text-3xl sm:gap-8 xl:gap-14 md:pb-20 px-2">
          <div className=" sm:w-[50%] relative">
            <div className="py-6">Education</div>
            <div className="bg-[#1e1e1e] border-2 border-l-[#009d66] border-[#1e1e1e]  text-lg ">
              <div className="resume-item ">
                <span className="item-arrow "></span>
                <div className="item-title  text-[#009d66]">
                  Budge Budge Institute of Technology
                </div>
                <div className="item-details text-sm text-[#c3c3c3] py-3">
                  B. Tech in Electronics & Communication Enginneering / 2020 -
                  2023
                </div>
                <p className="item-description text-[#7C7C7C] text-sm leading-6">
                  Demonstrated a proactive approach to backend development by
                  actively participating in coding clubs, hackathons, and
                  self-driven learning initiatives, gaining proficiency in
                  programming languages commonly used for backend development
                  such as Python, Node.js, and PHP.
                </p>
              </div>
              <hr />
              <div className="resume-item">
                <span className="item-arrow"></span>
                <h5 className="item-title"> Narula Institute of Technology </h5>
                <div className="item-details text-sm text-[#c3c3c3] py-3">
                  Diploma in Electronics & Communication Enginneering / 2017 -
                  2020
                </div>
                <p className="item-description text-[#7C7C7C] text-sm leading-6">
                  Actively engaged in web development as a self-driven learner,
                  acquiring skills in HTML, CSS and JavaScript, and creating
                  personal web projects to explore the world of software
                  development further.
                </p>
              </div>
              <hr />
              <div className="resume-item ">
                <span className="item-arrow"></span>
                <h5 className="item-title"> Dum Dum K.L.S. Hindi Vidyalaya </h5>
                <div className="item-details text-sm text-[#c3c3c3] py-3">
                  Higher Secondary (PCM) / 2015 - 2017
                </div>
                <p className="item-description text-[#7C7C7C] text-sm leading-6">
                  Completed Class 12 with a specialization in Physics,
                  Chemistry, and Mathematics, demonstrating a strong foundation
                  in the sciences and quantitative disciplines.
                </p>
              </div>
            </div>
          </div>
          <div className=" sm:w-[50%]">
            <div className="py-6">Experience</div>
            <div className="bg-[#1e1e1e]  border-2 border-l-[#009d66] border-[#1e1e1e]  text-lg relative">
              <div className="resume-item ">
                <span className="item-arrow top-2"></span>
                <h5 className="item-title"> Web Developer </h5>
                <div className="item-details text-sm text-[#c3c3c3] py-3">
                  IB ARTS PVT LTD / 2023 - Present
                </div>
                <p className="item-description text-[#7C7C7C] text-sm leading-6">
                  Demonstrated proficiency as a Full Stack Web Developer,
                  contributing to both frontend and backend aspects of projects.
                  <br />
                  <ul>
                    <br />
                    <li>
                      • Developed high-performance RESTful APIs using Node.js
                      and the Express framework, serving as the backbone of a
                      web application for seamless frontend-backend
                      communication.
                    </li>
                    <br />
                    <li>
                      • Undertook the task ofrefactoring and optimizing the
                      existing codebase, identifying bottlenecks, enhancing code
                      efficiency, and reducing latency to improve the user
                      experience.
                    </li>
                    <br />
                    <li>
                      • Played a key role in shaping organizational coding
                      standards and development processes, actively contributing
                      to code reviews, best practices, and documentation for
                      maintaining a high-quality codebase.
                    </li>
                  </ul>
                </p>
              </div>
              <hr />
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default Resume;
