import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

// imported in App.js
export default class List extends Component {
  constructor() {
    super();
    this.state = {
      redirect: false,
      ep: ""
    };
    this.setRedirect = this.setRedirect.bind(this);
    this.renderRedirect = this.renderRedirect.bind(this);
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    });
  };

  renderRedirect = () => {
    let url = `/show/${this.props.title}`;
    if (this.state.redirect === true) {
      return <Redirect to={url} />;
    }
  };

  componentDidMount() {
    const showEpisode = this.props.match.params.title;
    const URL = `http://127.0.0.1:8000/${showEpisode}`;
    axios
      .get(URL)
      .then(res => {
        this.props.setName(res.data);
        let ep = res.data;
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.redirect !== prevState.redirect) {
      const showEpisode = this.props.match.params.title;
      const URL = `http://127.0.0.1:8000/${showEpisode}`;
      axios
        .get(URL)
        .then(res => {
          this.props.setName(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    const episode = this.props.title;
    // Delay render until after componentDidMount
    if (episode === null) {
      return <p>Loading</p>;
    }

    return (
      <div>
        <h2 className="episodeName">
          {this.number}, {this.title}
        
        </h2>
        <audio ref="audio_tag" src={this.upload} controls autoPlay />
        <p>{this.description}</p>
      </div>
    );
  }
}
