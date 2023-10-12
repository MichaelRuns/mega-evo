import React from "react";
import MegaDialog from "../headless/MegaDialog";

const Welcome = ({isOpen, setIsOpen}) => {

  return (
        <MegaDialog isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    buttonText={"Nice to Meet you!"}
                    content={
                            <div className="flex flex-col p-4">
                                <h1 className="text-2xl text-center">Hey!</h1>
                                <p className="text-sm">My name is Michael Vernau. Welcome to my portfolio!
                                Here you can find information about me and links to my projects. </p>
                            </div>
                        }/>
      
  );
};

export default Welcome;
