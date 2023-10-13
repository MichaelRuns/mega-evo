import { SparklesIcon, ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";

const AboutBar = () => {
  const [extended, setExtended] = useState(false);

  const paragraphs = [
    "Resume",
    "Background",
    "Goals",
    "Athletics",
    "Passions",
    "Family",
  ];

  return (
    <div className="flex flex-row justify-between gap-4 text-white font-semibold items-center mt-4 mr-3 w-full">
      <div
        className={`w-50 h-50 ${extended ? "text-pink-400" : "text-white"} cursor-grab`}
        onClick={() => setExtended(!extended)}
      >
        <div className="flex flex-row">
          <SparklesIcon />
          {extended? <ChevronRightIcon /> : <ChevronUpIcon />}
        </div>
        <p className="text-nowrap">about</p>
      </div>
      {paragraphs.map((text, index) => (
        <Transition
          key={index}
          show={extended}
          as={Fragment}
          enter="transition-transform transition-scale duration-500"
          enterFrom="-translate-x-full scale-0"
          enterTo="translate-x-0 scale-100"
          leave="transition-transform transition-scale duration-500"
          leaveFrom="translate-x-0 scale-100"
          leaveTo="-translate-x-full scale-0"
        >
          <p>{text}</p>
        </Transition>
      ))}
    </div>
  );
};

export default AboutBar;
