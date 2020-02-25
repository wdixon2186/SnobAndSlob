import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
import BackLog from "./BackLog/BackLog";
import Contact from "./Contact/Contact";
import Show from "./Show/Show";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { episode: null };
    this.setName = this.setName.bind(this);
  }

  setName(episode) {
    this.setState({ episode: episode });
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/about" component={About} />
          <Route path="/backlog" component={BackLog} />
          <Route path="/contact" component={Contact} />
          <Route
            path="/show/:title" component={Show}
            // render={routerProps => (
            //   <Show
            //     match={routerProps.match}
            //     setName={this.setName}
            //     episode={this.setState.episode}
            //     episodeName={this.state.episode}
            //   />
            // )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
