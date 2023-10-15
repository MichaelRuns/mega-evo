import React from 'react';
import Background from './components/Background';
import TopBar from './components/TopBar';
import ContentArea from './components/ContentArea';
import ProjectDisplay from './components/ProjectDisplay';
function App() {
  return (
    <Background>
      <TopBar/>
      <ContentArea/>
      <ProjectDisplay/>
    </Background>
  
  );
}

export default App;
