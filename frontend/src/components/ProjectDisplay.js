import Tile from "../headless/Tile";
const projects = [
  {
    title: "Helius+",
    text: "Point Cloud Perception",
    img: "SLIDER-Appen_image_annotation_05.jpeg"
  },
  {
    title: "Chidori",
    text: "DCGAN Image Generation",
    img: "mt_fuji.JPG"
  },
  {
    title: "Koito calibration station",
    text: "Robotics in Japan! Leadership",
    img: "koito_mishima.JPG"
  },
    // {
    //   title: "Pythia",
    //   text: "Applied ML to automate quality control on the production line",
    // }
    // Add more projects as needed
  ];
const ProjectDisplay = () => {
 return (
    <div className="col-span-3 flex justify-between p-2 -translate-y-2">
         {projects.map((project, index) => (
        <Tile key={index} title={project.title} text={project.text} desription={project.description} imagePath={project.img}/>
      ))}
    </div>
 );
};
export default ProjectDisplay;