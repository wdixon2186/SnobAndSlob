import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Header from './Header/Header'
import Home from './Home/Home'
import About from './About/About';
import BackLog from './BackLog/BackLog';
import Contact from './Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/backlog" component={BackLog} />
        <Route path="/contact" component={Contact} />
        
      </Switch>
    </div>
  );
}

export default App;
