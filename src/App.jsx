import React from 'react';
import './App.scss';
import Main from './components/main/Main';
import Side from './components/side/Side';
import Wrapper from './components/wrapper/Wrapper';

function App() {
  
  return (
    <div className="App">
      <Wrapper>
        <Side/>
        <Main/>
      </Wrapper>      
    </div>
  );
}

export default App;
