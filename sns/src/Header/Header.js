import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom'
import About from '../About/About'

function Header() {
  return (
    <div className="App">
      <header> <div className="Head">
        <p>The <span className="snob">Snob</span> and The <span className="slob">Slob</span></p>
        </div></header>
      <nav>
        <div className="nav"> <Link to={"/"}>Home</Link></div>
        <div className="nav"> <Link to={"/about"}>About</Link></div>
        <div className="nav"> <Link to={"/backlog"}>Back Log</Link></div>
        <div className="nav"> <Link to={"/contact"}>Contact</Link></div>
      </nav>
    </div>
  );
}

export default Header;