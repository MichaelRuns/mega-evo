import { SparklesIcon, ChevronUpIcon, ChevronRightIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const AboutBar = () => {
  const [extended, setExtended] = useState(true);

  const paragraphs = [
    "Resume",
    "Background",
    "Goals",
    "Athletics",
    "Passions",
    "LinkTree",
  ];

  return (
    <div className="flex flex-row justify-between gap-4 text-white font-semibold items-center mt-3 mr-3 w-full">
      <div
        className={`w-50 h-50 ${extended ? "text-pink-300" : "text-white"} cursor-grab`}
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
          enterTo="-translate-x-10 scale-100"
          leave="transition-transform transition-scale duration-500"
          leaveFrom="translate-x-0 scale-100"
          leaveTo="-translate-x-full scale-0"
        >
          <div className=" w-40 flex flex-row items-center justify-between text-center cursor-grab border-zinc-300 bg-white border rounded-full text-zinc-700 p-2 opacity-80 hover:opacity-100 hover:hover:bg-zinc-100">
            {text}
            <ChevronDownIcon className="w-5"/>
          </div>
        </Transition>
      ))}
    </div>
  );
};

export default AboutBar;
