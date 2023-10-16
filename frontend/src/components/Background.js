import React from 'react'
const Background = ({children}) => {
    return (
        <div className="w-full h-full absolute top-0 left-0 bg-color bg-gradient-to-r from-blue-400 to-slate-600 grid grid-rows-[20%,80%] grid-cols-5">
           {children}
        </div>
    );
}
export default Background
