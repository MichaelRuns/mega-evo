import Tile from "../headless/Tile";
const projects = [
  {
    title: "Helius+",
    text: "Point Cloud Perception",
    img: "SLIDER-Appen_image_annotation_05.jpeg",
    description: "lorem ipsum"
  },
  {
    title: "Chidori",
    text: "DCGAN Image Generation",
    img: "mt_fuji.JPG",
    description: "lorem ipsum"
  },
  {
    title: "Koito calibration station",
    text: "Robotics in Japan! Leadership",
    img: "koito_mishima.JPG",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
  },
    // {
    //   title: "Pythia",
    //   text: "Applied ML to automate quality control on the production line",
    // }
    // Add more projects as needed
  ];
const ProjectDisplay = () => {
 return (
    <div className="col-span-3 flex justify-between gap-1 p-2 -translate-y-2">
         {projects.map((project, index) => (
        <Tile key={index} title={project.title} text={project.text} description={project.description} imagePath={project.img}/>
      ))}
    </div>
 );
};
export default ProjectDisplay;