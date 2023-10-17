import React, { useState } from "react";

const Tile = ({ title, text, description, imagePath}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative rounded-lg transition-transform cursor-pointer ${
        isHovered ? "scale-110" : "scale-100"
      } bg-zinc-100 p-4 ${
        isHovered ? "h-full w-full" : "h-1/2 w-1/2"
      } transition-all duration-300`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        window.open("https://www.cepton.com/products-2023/helius", '_blank')
      }}
    >
        <h2 className="text-xl font-semibold text-black mb-2">{text}</h2>
        <p className="text-gray-600 mt-2">{title}</p>
        {isHovered && <div>
           <p> {description}</p>
          </div>}
        <div className="h-full overflow-hidden justify-self-center"> {/* Adjust the height as needed */}
                <img
                    src={process.env.PUBLIC_URL + "/" + imagePath}
                    alt="mike"
                    className={`rounded object-cover border-2 border-black ${isHovered? "w-1/2" : "w-40 h-20"}`}
                />
            </div>
      </div>
  );
};

export default Tile;
