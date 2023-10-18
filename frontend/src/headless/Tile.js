import React, { useState, useContext } from "react";
import { DigizoidContext } from "../components/ContextProvider";
const Tile = ({ title, text, description, imagePath, link}) => {
  const [isHovered, setIsHovered] = useState(false);
  const context = useContext(DigizoidContext);
  return (
    <div
      className={`relative rounded-lg transition-transform ${link && "cursor-pointer"} ${
        isHovered ? "scale-110" : "scale-100"
      } bg-zinc-100  p-2 ${
        isHovered ? "h-full w-full" : "h-1/2 w-1/2"
      } transition-all duration-300 grid grid-rows-${isHovered?"[10%,40%,10%,40%] z-50":"[30%,70%]"} grid-cols-[100%]`}
      onMouseEnter={() => {
        setIsHovered(true);
        context.setAnyItemHovered(true);}}
      onMouseLeave={() => {
        setIsHovered(false);
        context.setAnyItemHovered(false);
      }}
      onClick={() => {
        link &&
        window.open(link, '_blank')
      }}
    >
       <div className="flex justify-center items-center h-full w-full">
                <div className="font-semibold text-sm md:text-xl"> {text} </div>
        </div>
        <div className="h-full overflow-hidden row-span-1 flex justify-center"> {/* Adjust the height as needed */}
                <img
                    src={process.env.PUBLIC_URL + "/" + imagePath}
                    alt="mike"
                    className={`rounded object-cover border-2 border-black h-full`}
                />
            </div>
            {isHovered &&<div className="flex justify-center items-center h-full w-full font-semibold italic text-sm">
                  <div> {title}</div>
            </div>
            }
            {isHovered &&<div className="flex justify-center h-full w-full">
              <div className="text-[7px] md:text-base">{description}</div>
            </div>}
      </div>
  );
};

export default Tile;
