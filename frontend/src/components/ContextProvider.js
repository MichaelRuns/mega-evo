import React from "react";
import { createContext, useState, useEffect} from "react";


const DigizoidContext = createContext();
const projects_ = [
    {
      title: "Helius+",
      text: "Point Cloud Perception",
      img: "SLIDER-Appen_image_annotation_05.jpeg",
      description: "My primary project and reponsibility at Cepton. Helius+ is a lidar based tracking platform, allowing users to configure a scene of many machines and lidars. Helius+ then merges the point clouds, and tracks the objects through time. On the team, I was the AI lead, repsonsible for the deep learning suite (used for object classification), as well as the frontend app for configurations. We use a react front end connected via websocket to a distributed C++ backend.",
      link: "https://www.cepton.com/products-2023/helius"
    },
    {
      title: "Chidori",
      text: "DCGAN Image Generation",
      img: "chidori.png",
      description: "A react app using a bespoke DC-GAN to generate images of birds. The app is hosted on Heroku and uses a fastapi backend to forward pass and serve images. The model was trained in pytorch using the birds525 dataset. See the website or my github for code and details. ",
      link: "http://chidori.michaelvernau.com/"
    },
    {
      title: "Cepton-Koito Calibration Station",
      text: "Automated Lidar Calibration",
      img: "koito_squish.JPG",
      description: "A manufacturing system which automates the intrinsic calibration of 5 lidars in parallel. Put simply, this involves finding correct values for temperature, distance, etc. I served as one of 4 engineers on the team, and one of the two engineers that was deployed in japan. While in japan, my primary responsibility was parallelizing the code to run on 5 lidars at once (from 1), and working with the robotics team for integration. This project used C#, WPF, docker, and python. "
    },
      {
        title: "Pythia",
        text: "AI for Manufacturing QC",
        img: "APD_NG.jpg",
        description: "A C# application that automates the detection of faulty APDs on the production line. I served as the only engineer on the project. We used a WPF C# application to run on the device, and a ONNX CNN trained in tensorflow for the model."
      }
      // Add more projects as needed
    ];
const ContextProvider = ({ children }) => {
    const [item, setItem] = useState(0);
    const [anyItemHovered, setAnyItemHovered] = useState(false);
    const [projectOffset, setProjectOffset] = useState(0);
    const [projects, setProjects] = useState(projects_);
    useEffect(() => {
        if (!anyItemHovered){
            const timer  = setInterval(() => {
                setProjectOffset((prevOffset) => (prevOffset + 1) % projects.length);
            }, 2000);
            return ()=>{clearInterval(timer);};
        }
    }, [projects.length, anyItemHovered]);

    useEffect(() => {
        setProjects(projects_.slice(projectOffset).concat(projects_.slice(0, projectOffset)).slice(0,3));
    }, [projectOffset]);
    return (
        <DigizoidContext.Provider value={{item, anyItemHovered,setItem, setAnyItemHovered, projects}}>{children}</DigizoidContext.Provider>
        
    );
};
export {DigizoidContext, ContextProvider}