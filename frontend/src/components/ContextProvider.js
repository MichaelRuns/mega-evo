import React from "react";
import { createContext, useState} from "react";


const DigizoidContext = createContext();
const ContextProvider = ({ children }) => {
    const [item, setItem] = useState(0);
    return (
        <DigizoidContext.Provider value={{item, setItem}}>{children}</DigizoidContext.Provider>
        
    );
};
export {DigizoidContext, ContextProvider}