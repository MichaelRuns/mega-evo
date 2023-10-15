import { SparklesIcon } from '@heroicons/react/outline';
import React from 'react';

const menuItems = [
  { name: 'Background', color: 'bg-blue-500'},
  { name: 'Experience', color: 'bg-red-500'},
  { name: 'Interests', color: 'bg-green-500'},
  { name: 'Hobbies', color: 'bg-yellow-500'},
];
const containerStyle = `col-span-1 h-1/2 w-1/2 text-black py-2 px-4 rounded flex items-center justify-center rounded-full`
const TopBar = () => {
  return (
    <div className="row-span-1 col-span-5 flex flex-row justify-between items-center gap-x-10 p-6 ">
    <button className={containerStyle + ' bg-pink-300'}>
        <SparklesIcon className="h-full"/>
    </button>
        {menuItems.map((item,idx) =>(
            <button key={idx} className={containerStyle + ` bg-white -translate-x-4`}>{item.name}</button>
        ))}
    </div>
  );
};

export default TopBar;
