import Tile from "../headless/Tile";
import { DigizoidContext } from "./ContextProvider";
import React from "react";
import { useContext} from "react";
const projects = [
  {
    title: "Helius+",
    text: "Point Cloud Perception",
    img: "SLIDER-Appen_image_annotation_05.jpeg",
    description: "lorem ipsum",
    link: "https://www.cepton.com/products-2023/helius"
  },
  {
    title: "Chidori",
    text: "DCGAN Image Generation",
    img: "chidori.png",
    description: "lorem ipsum",
    link: "http://chidori.michaelvernau.com/"
  },
  {
    title: "Koito calibration station",
    text: "Automated Lidar Calibration",
    img: "koito_squish.JPG",
    description: "lorem ipsum lorem ipsum lorem ipsum"
  },
    // {
    //   title: "Pythia",
    //   text: "Applied ML to automate quality control on the production line",
    // }
    // Add more projects as needed
  ];
const ProjectDisplay = () => {
  const context = useContext(DigizoidContext);
 return (
    <div className="col-span-3 flex justify-between gap-1 p-2 -translate-y-2">
         {context.projects.map((project, index) => (
        <Tile key={index} title={project.title} text={project.text} description={project.description} imagePath={project.img} link={project.link}/>
      ))}
    </div>
 );
};
export default ProjectDisplay;