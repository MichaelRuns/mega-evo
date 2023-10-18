import React from 'react';

const Background = ({ children }) => {
  return (
      <div className="w-full h-full absolute top-0 left-0 grid grid-rows-[20%,80%] grid-cols-5 overflow-hidden"
      style={{
        backgroundImage: 'url(/const1.jpg)',
      }}>
        {children}
      </div>
  );
};

export default Background;
