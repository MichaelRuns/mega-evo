import React from "react";
import { useContext } from "react";
import { DigizoidContext } from "./ContextProvider";

const Writings = [
    {title:"Background", Paragraph: "Hi! My name is Michael Vernau. I am a Software Engineer based in San Francisco. I graduated with my BS in Computer Science from Stanford, where I ran varsity Track and Field. These days, I'd describe myself as a full stack ML engineer. I grew up in Davis, where my parents are both veterinarians. Although my heart is in tech, animals are still really important to me. Perhaps one day I'll find a way to use my AI skill to help unhoused animals."},
    {title:"Experience", Paragraph: "I currently work on the Perception team at Cepton, a San Jose based Lidar company. Here, I serve as the AI lead on our Lidar based perception stack, Helius+. I'm also responsible for much of the Ux on our customer facing software products and marketing materials. Prior to Cepton, I worked as a Biocomputation Research Assistant at the Canary Center for Cancer research, where I helped develop scripts for data analysis."},
    {title: "Interests", Paragraph:"In my time in the industry, I've come to develop a passion for perception, especially computer vision, which has grown to a full blown adoration for AI. I'm an experienced AI developer in Tensorflow, Pytorch, an ONNX, and I can work in C++, C#, C, Python, and Javascript(especially React). I'm always consuming content in statistics, discrete math, and game theory, beacause I love how it shapes the way I see the world."},
    {title: "Hobbies", Paragraph:"Like most ex-athletes, I love to stay active. I mostly run, and am currently training for marathons, although in my retirement from elite racing, I've also picked up swimming. I'm fascinated by card games, from playing cards to trading card games, so you might find me at the local game shop on the weekend. I try my best to read when I can, although my tastes in books has never evolved past the sci-fi/fantasy of my childhood."}

];
const ContentArea = () => {
    const context = useContext(DigizoidContext);
    return (
        <div className=" col-span-5 md:col-span-2 rounded border grid grid-cols-2 grid-rows-[90%,10%] border-2 bg-slate-500 items-center">
            <div className="h-full overflow-hidden flex items-start border-b"> {/* Adjust the height as needed */}
                <img
                    src={process.env.PUBLIC_URL + '/senior_headshot.jpg'}
                    alt="mike"
                    className="rounded object-cover border-2 border-black"
                />
            </div>
            <div className="border-b h-full">
                <div className="text-white font-semibold opacity-100 p-1 md:p-5 text-xs md:text-xl"> 
                    {Writings[context.item % Writings.length].title}
                </div>
                <div className="text-white sm:p-2 md:p-5 text-xs md:text-base"> 
                {Writings[context.item % Writings.length].Paragraph}
                </div>  
            </div>
            <div className="col-span-2 flex flex-row justify-center gap-x-10 items-center"> 
            <div className={`rounded text-black bg-black cursor-pointer`}
            onClick={()=>{window.open("https://linktr.ee/michaelvernau", "_blank");}}
                        >{"L"}</div> 
                    {Writings.map((writing, idx) =>(
                        <div 
                        className={`rounded cursor-pointer ${context.item!==idx? "bg-white opacity-50 text-white":"bg-white text-white"}`}
                        onClick={()=>context.setItem(idx)}
                        >
                            {idx}
                        </div>
                    ))}
            </div>
        </div>
    );
};
export default ContentArea;
