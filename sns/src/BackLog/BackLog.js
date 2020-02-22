import React, { Component } from "react";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
import axios from "axios";

// imported in App.js
export default class BackLog extends Component {
  constructor() {
    super();
    this.state = {
      ListOfEpisodes: [],
      filter: ""
    };
    this.filterByEpisode = this.filterByEpisode.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8000/")
      .then(res => {
        this.setState({ ListOfEpisodes: res.data });
      })
      .catch(err => {
        console.error(err);
      });
  }

  filterByEpisode(e) {
    this.setState({ filter: e.target.value.substr(0, 20) });
  }

  render() {
    if (this.state.ListOfEpisodes === null) {
      return null;
    }

    // Filter city list based on user input in search bar
    let filtered = this.state.ListOfEpisodes.sort((a, b) => {
      return a.number - b.number.rank;
    }).filter(Episode => {
      return (
        Episode.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !==
          -1 ||
        Episode.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !==
          -1
      );
    });

    // Map through cities and display list sorted by rank
    let backlog = filtered.map(episode => {
      return (
        <div key={episode.title}>
          <p>
            {/* Link to individual city pages */}
            <Link to={`/show/${episode.title}`}>
              {/* List each city's rank, name, and state */}
              {episode.title}
            </Link>
          </p>
        </div>
      );
    });

    return (
      <div>
        <div>
          <Search filter={this.filterByEpisode} value={this.state.filter} />
        </div>
        <div className="listView">{backlog}</div>
      </div>
    );
  }
}
