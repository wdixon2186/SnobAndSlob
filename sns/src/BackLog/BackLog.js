// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Search from "../Search/Search";
// import axios from "axios";

// // imported in App.js
// export default class BackLog extends Component {
//   constructor() {
//     super();
//     this.state = {
//       ListOfEpisodes: [],
//       filter: ""
//     };
//     this.filterByEpisode = this.filterByEpisode.bind(this);
//   }

//   componentDidMount() {
//     axios
//       .get("http://127.0.0.1:8000/")
//       .then(res => {
//         this.setState({ ListOfEpisodes: res.data });
//       })
//       .catch(err => {
//         console.error(err);
//       });
//   }

//   filterByEpisode(e) {
//     this.setState({ filter: e.target.value.substr(0, 20) });
//   }

//   render() {
//     if (this.state.ListOfEpisodes === null) {
//       return null;
//     }

//     // Filter city list based on user input in search bar
//     let filtered = this.state.ListOfEpisodes.sort((a, b) => {
//       return a.number - b.number.rank;
//     }).filter(Episode => {
//       return (
//         Episode.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !==
//           -1 ||
//         Episode.title.toLowerCase().indexOf(this.state.filter.toLowerCase()) !==
//           -1
//       );
//     });

//     // Map through cities and display list sorted by rank
//     let backlog = filtered.map(episode => {
//       return (
//         <div key={episode.title}>
//           {episode.title}
//           {episode.upload}

//            <audio ref="audio_tag" src={episode.upload} controls autoPlay />
//           <p>
//             {/* Link to individual city pages */}
//             <Link to={`/show/${episode.title}`}>
//               {/* List each city's rank, name, and state */}
//               {episode.title}
//             </Link>
//           </p>
//         </div>
//       );
//     });

//     return (
//       <div>
//         <div>
//           <Search filter={this.filterByEpisode} value={this.state.filter} />
//         </div>
//         <div className="listView">{backlog}</div>
//       </div>
//     );
//   }
// }

import React from 'react'
import Current from '../Current/Current'
import Contact from '../Contact/Contact'

function BackLog(){
  return(<div>
    <Current />
    <div className="AQP">
    <h4> A Quiet Place</h4>
    <iframe src="https://widget.spreaker.com/player?episode_id=14547332&theme=light&autoplay=false&playlist=false&cover_image_url=https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Foriginal%2Fb88dafe6d941e7bfc1943c54ee2cc902.jpg" width="95%" height="400px" frameborder="0"></iframe>
    <p>This week The Snob And The Slob talk about John Krazinski's A Quiet Place. A movie where everyone was scared to take a bite of their popcorn the theater was so quiet.</p>
    </div>
    <div className="RPO">
    <h4> Ready Player One</h4>
    <iframe src="https://widget.spreaker.com/player?episode_id=14488631&theme=light&autoplay=false&playlist=false&cover_image_url=https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Foriginal%2Fb88dafe6d941e7bfc1943c54ee2cc902.jpg" width="95%" height="400px" frameborder="0"></iframe>
    <p>The Boys talk about Spielbergs enermous video game movie and the slightly less big, Wes Anderson's Isle of Dogs. Do we love dogs? Listen and find out! </p>
    </div>
    <Contact />
  </div>)
}

export default BackLog