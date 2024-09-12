import React, { useState, useEffect } from "react";
import TextStroke from "./TextStroke";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img1 from "./../assets/portfolio_img_1-1.jpg";
import Dialog from "./Dialog";

const PortfolioItem = ({ imgSrc, projectContent, name, openDialog }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => openDialog(projectContent)}
    >
      <img
        className={`img-size custom-box-shadow ${isHovered ? "hovered" : ""}`}
        src={imgSrc}
        alt=""
      />
      <p>{name}</p>
    </div>
  );
};

function Portfolio() {
  const projects = [
    {
      title: "Project 1",
      description:
        "This project involved building an e-commerce website using Shopify APIs and integrating with various third-party services like ShipStation and EasyPost for logistics.",
      technologies: ["React", "Shopify API", "ShipStation", "EasyPost"],
    },
    {
      title: "Project 2",
      description:
        "A return management system for a Shopify store, including features like return requests, admin actions, shipping label generation, and refund management.",
      technologies: ["Node.js", "GraphQL", "Sequelize", "MySQL"],
    },
    {
      title: "Project 3",
      description:
        "An internal admin panel to manage returns and orders across multiple platforms, integrated with Shopify and UPS APIs for tracking and label generation.",
      technologies: ["React", "Redux", "Tailwind CSS", "UPS API"],
    },
  ];

  const [isDialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState({ title: "", body: "" });

  const openDialog = (project) => {
    const content = {
      title: project.title,
      body: (
        <>
          <p>{project.description}</p>
          <h4 className="mt-4 font-semibold">Technologies Used:</h4>
          <ul className="list-disc ml-6">
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </>
      ),
    };
    setDialogContent(content);
    setDialogOpen(true);
  };

  const closeDialog = () => setDialogOpen(false);
  return (
    <>
      <div id="portfolio" className="text-white py-10 md:py-20">
        <TextStroke Title={"Projects"} TitleHeading={"My Projects"} />
        <div className="flex justify-center gap-4 sm:flex-col flex-row px-20">
          <div className="flex gap-10 flex-col justify-center sm:flex-row sm:pb-4">
            <PortfolioItem
              imgSrc={img1}
              projectContent={projects[0]}
              name="project 1"
              openDialog={openDialog}
            />
            <PortfolioItem
              imgSrc={img1}
              projectContent={projects[1]}
              name="project 2"
              openDialog={openDialog}
            />
            <PortfolioItem
              imgSrc={img1}
              projectContent={projects[2]}
              name="project 3"
              openDialog={openDialog}
            />
          </div>
          <div className="flex gap-10 flex-col justify-center sm:flex-row sm:pb-4">
            <PortfolioItem
              imgSrc={img1}
              projectContent={projects[3]}
              name="project 4"
              openDialog={openDialog}
            />
            <PortfolioItem
              imgSrc={img1}
              projectContent={projects[4]}
              name="project 5"
              openDialog={openDialog}
            />
            <PortfolioItem
              imgSrc={img1}
              projectContent={projects[5]}
              name="project 6"
              openDialog={openDialog}
            />
          </div>
        </div>
        <div className="flex justify-center items-center pt-8">
          <Link to={"/portfolio/projects"}>
            <button className="border-2 border-[rgb(0,157,102)] hover:bg-[rgb(0,157,102)] text-white py-2 px-6">
              <div className="flex justify-center items-center gap-3">
                <div> All Projects </div>
                <div>
                  <FaArrowRightLong color="[rgb(0,157,102)]" />
                </div>
              </div>
            </button>
          </Link>
        </div>
      </div>

      <Dialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        title={dialogContent.title}
      >
        {dialogContent.body}
      </Dialog>
    </>
  );
}

export default Portfolio;
