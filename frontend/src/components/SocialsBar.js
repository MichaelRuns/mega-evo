import React from "react";
import {TableIcon, ThumbDownIcon, GiftIcon} from "@heroicons/react/outline";

const socials = [
    {name: 'LinkedIn', href: 'https://www.linkedin.com/in/michael-vernau/', icon: TableIcon},
    {name: 'Github', href: 'https://www.github.com/MichaelRuns', icon: ThumbDownIcon},
    {name: 'Strava', href: 'https://www.strava.com/athletes/10388600', icon: GiftIcon},
];
const SocialsBar = () => {
    return (
        <div className="flex flex-row justify-between text-white bg-transparent">
            {socials.map((item, idx) => (
                <button key={idx}>
                    <item.icon/>
                    <p>{item.name}</p>
                </button>
            ))}
        </div>
    );
};
export default SocialsBar;