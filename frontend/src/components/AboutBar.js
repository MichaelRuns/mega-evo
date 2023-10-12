import { SparklesIcon, ChevronRightIcon} from "@heroicons/react/outline";
import React from "react";
import { useState } from "react";
import { Transition } from "@headlessui/react";
const AboutBar = () => {
    const [extended, setExtended] = useState(false);
    return (
        <div className="flex flex-row gap-4 text-white font-semibold items-center mt-4">
        <div className='w-50 h-50 text-white cursor-grab' onClick={()=>setExtended(!extended)}>
            <div className="flex flex-row">
                <SparklesIcon/>
                <ChevronRightIcon/>
            </div>
            <p className='text-nowrap'> about</p>
        </div>
        <Transition show={extended}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
            <div className="flex flex-row gap-4">
                <p> Resume</p>
                <p> Background </p>
                <p> Goals </p>
                <p> Athletics</p>
                <p> Passions </p>
                <p> Family </p>
            </div>
        </Transition>
        </div>
    );
}
export default AboutBar