import React from 'react';
import { Dashboard } from './pages/Dashboard'
import './AppVars.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <button>Menu</button>
        <div className="username">Manuela Beiser</div>
        <div className="location">HOME</div>
        <div className="logo">signHere</div>
      </nav>

      <div className="current-route">
        <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
