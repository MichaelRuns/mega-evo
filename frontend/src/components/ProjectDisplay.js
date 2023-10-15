import ProjectPresent from "./ProjectPresent";
import Tile from "../headless/Tile";
const projects = [
    {
      title: "Helius+",
      text: "Point Cloud Perception",
      description: "Served as the AI lead on a lidar-only perception & tracking system for smart infrastructure."
    },
    {
      title: "Chidori",
      text: "DCGAN Image Generation",
      description: "Deployed a webapp equiped with a bespoke DCGAN to generate bird images."
    },
    {
      title: "Koito calibration station",
      text: "Robotics in Japan! Leadership",
        description: "Led a foregin integration project in japan to automate and accelerate the calibration of lidars over 10x"
    },
    // {
    //   title: "Pythia",
    //   text: "Applied ML to automate quality control on the production line",
    // }
    // Add more projects as needed
  ];
const ProjectDisplay = () => {
 return (
    <div className="col-span-3 flex justify-between p-2">
         {projects.map((project, index) => (
        <Tile key={index} title={project.title} text={project.text} desription={project.description}/>
      ))}
    </div>
 );
};
export default ProjectDisplay;