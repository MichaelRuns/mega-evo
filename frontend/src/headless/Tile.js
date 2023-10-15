import React, { useState } from "react";
import { PlusIcon, MinusCircleIcon } from "@heroicons/react/solid";

const Tile = ({ title, text, desription}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg transition-transform ${
        isHovered ? "scale-105" : "scale-100"
      } bg-zinc-100 p-4 ${
        isHovered ? "h-full" : "h-1/3"
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-2">{text}</h2>
        {/* Hero Icon (You can replace this with your custom HeroIcon) */}
        {!isHovered? <PlusIcon className="w-8 h-8 text-black" /> : <MinusCircleIcon className="w-8 h-8 text-black" />}
        {/* Text */}
        <p className="text-gray-600 mt-2">{title}</p>
        {isHovered && <p> {desription}</p>}
      </div>
  );
};

export default Tile;
