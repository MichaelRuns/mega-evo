import React from 'react';
import { useState } from 'react';
import Background from './components/Background';
import Welcome from './components/welcome';
import ProjectPresent from './components/ProjectPresent';
import AboutBar from './components/AboutBar';
import SocialsBar from './components/SocialsBar';
function App() {
  const [greeting, setGreeting] = useState(true);
  return (
    <Background>
      <AboutBar/>
       <div className="h-screen flex items-center justify-center">
      <Welcome isOpen={greeting} setIsOpen={setGreeting}></Welcome>
      {!greeting && <ProjectPresent/>}
      </div>
      <SocialsBar/>
    </Background>
  
  );
}

export default App;
