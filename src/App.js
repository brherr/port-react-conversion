import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <video autoPlay loop muted id='video-background'>
        <source src='https://www.youtube.com/watch?v=Pnxyh3_0tE4' type='video/mp4' />
      </video>
    </div>
  );
}

export default App;
