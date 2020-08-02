import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h3>Click the button to diplay the names of all 807 Pokemon using the <a target='black' href='https://pokeapi.co/'>Pokemon API</a>!</h3>
      <button>Fetch Pokemon</button>

      <div id="box">

      </div>
    </div>
  );
}

export default App;
