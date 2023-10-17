import Tile from "../headless/Tile";
import { DigizoidContext } from "./ContextProvider";
import React from "react";
import { useContext} from "react";
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