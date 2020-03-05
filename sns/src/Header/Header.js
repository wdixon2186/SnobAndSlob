import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="App">
      <header>
        {" "}
        <div className="Head">
        </div>
      </header>
      <nav>
        <div className="nav">
          {" "}
          <Link to={"/SnobAndSlob/"}>Home</Link>
        </div>
        <div className="nav">
          {" "}
          <Link to={"/SnobAndSlob/about"}>About</Link>
        </div>
        <div className="nav">
          {" "}
          <Link to={"/SnobAndSlob/backlog"}>Back Log</Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
