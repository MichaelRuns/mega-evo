import React from "react";
import { useContext } from "react";
import { DigizoidContext } from "./ContextProvider";

const Writings = [
    {title:"Background", Paragraph: "Hi! My name is Michael Vernau. I am a Software Engineer based in San Francisco. I graduated with my BS in Computer Science from Stanford, where I ran varsity Track and Field. These days, I'd describe myself as a full stack ML engineer. I grew up in Davis, where my parents are both veterinarian. Although my heart is in tech, animals are still really important to me. Perhaps one day I'll find a way to use my AI skill to help unhoused animals."},
    {title:"Experience", Paragraph: "I currently work on the Perception team at Cepton, a San Jose based Lidar company. Here, I serve as the AI lead on our Lidar based perception stack, Helius+. I'm also responsible for much of the Ux on our customer facing software products and marketing materials. Prior to Cepton, I worked as a Biocomputation Research Assistant at the Canary Center for Cancer research, where I helped develop scripts for data analysis."},
    {title: "Interests", Paragraph:"In my time in the industry, I've come to develop a passion for perception, especially computer vision. I'm also interested in the broader world of AI, especitally making the future of safe and usable AI tools"},
    {title: "Hobbies", Paragraph:"Card games. Running. Lifting. Restaurants. Vet Med"}

];
const ContentArea = () => {
    const {item} = useContext(DigizoidContext);
    return (
        <div className="col-span-2 rounded border grid grid-cols-2 border-2">
            <div className="h-full overflow-hidden "> {/* Adjust the height as needed */}
                <img
                    src={process.env.PUBLIC_URL + '/senior_headshot.jpg'}
                    alt="mike"
                    className="rounded object-cover border-2 border-black"
                />
            </div>
            <div><div className="text-white font-semibold p-5"> 
                {Writings[item % Writings.length].title}
            </div>
            <div className="text-white p-5"> 
                {Writings[item % Writings.length].Paragraph}
            </div></div>
            
        </div>
    );
};
export default ContentArea;
