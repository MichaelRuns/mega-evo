import React, { useState } from "react";
import Tile from "../headless/Tile";
import { Transition } from "@headlessui/react";
const projects = [
    {
      title: "Helius+",
      text: "Point Cloud perception and tracking for smart infrastructure",
    },
    {
      title: "Chidori",
      text: "Generative AI images w/ web deployment",
    },
    {
      title: "Koito 5 station calibration station",
      text: "Robotics in Japan! multithreading! Leadership!",
    },
    {
      title: "Pythia",
      text: "Applied ML to automate qualtity control on the production line",
    }
    // Add more projects as needed
  ];

const ProjectPresent = () => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {projects.map((project, index) => (
        <Tile key={index} title={project.title} text={project.text}/>
      ))}
    </div>
  );
};

export default ProjectPresent;
