import React from "react";
import Tile from "../headless/Tile";
const projects = [
    {
      title: "Helius+",
      text: "Point Cloud Perception",
    },
    {
      title: "Chidori",
      text: "DCGAN Image Generation",
    },
    {
      title: "Koito calibration station",
      text: "Robotics in Japan! Leadership",
    },
    // {
    //   title: "Pythia",
    //   text: "Applied ML to automate quality control on the production line",
    // }
    // Add more projects as needed
  ];

const ProjectPresent = () => {
  return (
    <div className="flex flex-row gap-2">
      {projects.map((project, index) => (
        <Tile key={index} title={project.title} text={project.text}/>
      ))}
    </div>
  );
};

export default ProjectPresent;
