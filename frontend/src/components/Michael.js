import React from "react";
import {PhotographIcon} from "@heroicons/react/solid";
import { Tab } from "@headlessui/react";
const tabitemClass = "mr-2 border border-white rounded-md px-3 py-2 font-medium text-sm"
const tabPanelClass = ""
const Michael = () => {
    return (
        <div className="rounded bg-zinc-100 w-2/3 h-full flex flex-row">
            <img className="h-60 rounded p-1" src={process.env.PUBLIC_URL + '/senior_headshot.jpg'} alt="Mike"/>
            <div className="container">
                <Tab.Group>
                    <Tab.List className=" p-4 flex">
                    <Tab className={tabitemClass}>Background</Tab>
                    <Tab className={tabitemClass}>Experience</Tab>
                    <Tab className={tabitemClass}>Interests</Tab>
                    <Tab className={tabitemClass}>Hobbies</Tab>

                    </Tab.List>

                    <Tab.Panels className="ml-2 border">
                    <Tab.Panel className={tabPanelClass}> Me go Stanford. Code things at Cepton. sniff glue.</Tab.Panel>
                    <Tab.Panel className={tabPanelClass}>I am the AI lead on the perception team at Cepton. I also do a lot of
                    fullstack work on our applications for non technical customers</Tab.Panel>
                    <Tab.Panel className={tabPanelClass}>Want do AI. want to make beautiful and useable things. Interested in bio-integration</Tab.Panel>
                    <Tab.Panel className={tabPanelClass}>me love running and all things card games. Speak japanese (poorly)</Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
</div>

        </div>
    );
};
export default Michael;