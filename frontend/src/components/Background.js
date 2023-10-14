import React from 'react'
const Background = ({children}) => {
    return (
        <div className="w-full h-full absolute top-0 left-0 bg-color bg-gradient-to-r from-slate-400 via-cyan-500 to-slate-600">
           {children}
        </div>
    );
}
export default Background
