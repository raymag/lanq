import React from 'react';
import Game from './components/Game';

import EnglishQA from './data/EnglishQA';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Lan<span className="highlight">Q</span></h1>
      </header>
      <main>
        <Game questionsList={EnglishQA} />
      </main>
    </div>
  );
}

export default App;
