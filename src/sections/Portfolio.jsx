import React, { useState, useEffect } from "react";
import TextStroke from "../components/TextStroke";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

import Dialog from "../components/Dialog";
import projects from "../config/portfolio";
const PortfolioItem = ({ imgSrc, projectContent, name, openDialog }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className=""
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openDialog(projectContent)}
    >
      <div className="flex justify-center mt-4">
        <img
          className={`img-size custom-box-shadow ${isHovered ? "hovered" : ""}`}
          src={imgSrc}
          alt=""
        />
      </div>
      <p className="mt-3 flex justify-center items-center text-center">{name}</p>
    </div>
  );
};

function Portfolio() {

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: "", body: "" });

  const openDialog = (project) => {
    const content = {
      title: project.title,
      description: project.description,
      technologies: project.technologies,
    };
    setDialogContent(content);
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);
  return (
    <>
    <div className="relative">

      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title={dialogContent.title}
        description={dialogContent.description}
        technologies={dialogContent.technologies}
      ></Dialog>
      <div id="portfolio" className="text-white py-10 md:py-16">
        <TextStroke Title={"Projects"} TitleHeading={"My Projects"} />
        <div className="flex justify-center items-center flex-wrap gap-4 mb-8">
          <p className="border border-[rgb(0,157,102)] bg-[rgb(0,157,102)] text-white py-1 px-2 w-[120px] flex justify-center items-center">
            All
          </p>
          <p className="border border-[rgb(0,157,102)] hover:bg-[rgb(0,157,102)] text-white py-1 px-2 w-[120px] flex justify-center items-center">
            Backend
          </p>
          <p className="border border-[rgb(0,157,102)] hover:bg-[rgb(0,157,102)] text-white py-1 px-2 w-[120px] flex justify-center items-center">
            Full Stack
          </p>
          <p className="border border-[rgb(0,157,102)] hover:bg-[rgb(0,157,102)] text-white py-1 px-2 w-[120px] flex justify-center items-center">
            Frontend
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3">
          {projects.map((project, i) => (
            <PortfolioItem
              key={i}
              imgSrc={project.imgSrc}
              projectContent={project}
              name={project.title}
              // name={`project ${i + 1 + index * 3}`}
              openDialog={openDialog}
            />
          ))}
        </div>

        <div className="flex justify-center items-center pt-8">
          <Link to="/portfolio/projects">
            <button className="border-2 border-[rgb(0,157,102)] hover:bg-[rgb(0,157,102)] text-white py-2 px-6">
              <div className="flex justify-center items-center gap-3">
                <div>All Projects</div>
                <FaArrowRightLong color="[rgb(0,157,102)]" />
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
    </>
  );
}

export default Portfolio;
