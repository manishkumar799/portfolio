import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function Projects() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="h-[100vh] w-full flex flex-col gap-5 justify-center items-center">
        <div className="text-white">Work in Progress..................</div>
        <div>
          <button
            className="border-2 border-white bg-slate-50 shadow-xl"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
