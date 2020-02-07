import React from 'react';
import './App.css';
import Home from './Home/Home'

function App() {
  return (
    <div className="App">
      <header> <div className="Head">
        <p>The <span className="snob">Snob</span> and The <span className="slob">Slob</span></p>
        </div></header>
      <nav>
        <div className="nav"> <a href="/">Home</a></div>
        <div className="nav"> <a href="about">About</a></div>
        <div className="nav"> <a href="backlog">Back Log</a></div>
        <div className="nav"> <a href="contact">Contact</a></div>
      </nav>
    <Home />
    </div>
  );
}

export default App;
