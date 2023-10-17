import React from 'react';
import { useContext } from 'react';
import { DigizoidContext } from './ContextProvider';

const menuItems = [
  { name: 'Background', color: 'bg-blue-500'},
  { name: 'Experience', color: 'bg-red-500'},
  { name: 'Interests', color: 'bg-green-500'},
  { name: 'Hobbies', color: 'bg-yellow-500'},
];
const containerStyle = `col-span-1 h-1/2 w-1/2 text-black py-2 px-4 rounded flex items-center justify-center rounded-full`
const TopBar = () => {
  const context = useContext(DigizoidContext);
  return (
    <div className="row-span-1 col-span-5 flex flex-row justify-between items-center gap-x-10 p-6 ">
    <button className={containerStyle + ' bg-pink-300'}
            onClick={()=>{window.open("https://linktr.ee/michaelvernau", "_blank");}}>
        LinkTree
    </button>
        {menuItems.map((item_,idx) =>(
            <button key={idx}
                    className={containerStyle + ` ${context.item!==idx ? 'bg-white opacity-50': 'bg-white border border-black border-2 opacity-100'} -translate-x-4`}
                    onClick={()=>{
                      context.setItem(idx);
                    }}>
                      {item_.name}
            </button>
        ))}
    </div>
  );
};

export default TopBar;
