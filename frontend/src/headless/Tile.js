import React, { useState } from "react";
import { PlusIcon } from "@heroicons/react/solid";

const Tile = ({ title, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg transition-transform ${
        isHovered ? "scale-110" : "scale-100"
      } bg-zinc-100 p-4 ${
        isHovered ? "h-full" : "h-40"
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
        {/* Title */}
        <h2 className="text-xl font-semibold text-black mb-2">{title}</h2>
        {/* Hero Icon (You can replace this with your custom HeroIcon) */}
        <PlusIcon className="w-8 h-8 text-black" />
        {/* Text */}
        <p className="text-gray-600 mt-2">{text}</p>
      </div>
  );
};

export default Tile;
