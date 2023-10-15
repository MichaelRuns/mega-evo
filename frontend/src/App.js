import React from 'react';
import Background from './components/Background';
import TopBar from './components/TopBar';
import ContentArea from './components/ContentArea';
import ProjectDisplay from './components/ProjectDisplay';
import { ContextProvider } from './components/ContextProvider';
function App() {
  return (
    <ContextProvider>
      <Background>
        <TopBar/>
        <ContentArea/>
        <ProjectDisplay/>
      </Background>
    </ContextProvider>
  
  );
}

export default App;
