import React from 'react'
const Background = ({children}) => {
    return (
        <div className="w-full h-screen absolute top-0 left-0 bg-color bg-gradient-to-r from-teal-400 via-cyan-200 to-pink-100">
           {children}
        </div>
    );
}
export default Background
