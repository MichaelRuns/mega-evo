import React, { useState } from "react";
import { PlusIcon, MinusCircleIcon } from "@heroicons/react/solid";

const Tile = ({ title, text, desription, imagePath}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg transition-transform ${
        isHovered ? "scale-105" : "scale-100"
      } bg-zinc-100 p-4 ${
        isHovered ? "h-full" : "h-1/2"
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        window.open("https://www.cepton.com/products-2023/helius", '_blank')
      }}
    >
        <h2 className="text-xl font-semibold text-black mb-2">{text}</h2>
        <p className="text-gray-600 mt-2">{title}</p>
        <div className="h-full overflow-hidden justify-self-center"> {/* Adjust the height as needed */}
                <img
                    src={process.env.PUBLIC_URL + "/" + imagePath}
                    alt="mike"
                    className={`rounded object-cover border-2 border-black ${isHovered? "w-1/2" : "w-40 h-20"}`}
                />
            </div>
        {isHovered && <div>
           <p> {desription}</p>
          </div>}
      </div>
  );
};

export default Tile;
