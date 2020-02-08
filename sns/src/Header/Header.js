import React from 'react';
import '../App.css';
import {Router, Route, Link } from 'react-router-dom'
import About from '../About/About'

function Header() {
  return (
    <div className="App">
      <header> <div className="Head">
        <p>The <span className="snob">Snob</span> and The <span className="slob">Slob</span></p>
        </div></header>
      <nav>
          <Router>
        <div className="nav"> <a href="/">Home</a></div>
        <div className="nav"> <Link to={"/about"}>About</Link></div>
        <div className="nav"> <a href="backlog">Back Log</a></div>
        <div className="nav"> <a href="contact">Contact</a></div>
        <Route path="/about" component={About} />
        </Router>
      </nav>
    </div>
  );
}

export default Header;