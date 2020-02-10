import React from 'react';
import '../App.css';
import Header from '../Header/Header'

function About() {
  return (
      <div>
      <div className="section">
    <div className="Home">
        <h3>The Podcast</h3>
    <p className="us">
        This is a movie based podcast that is meant
        to talk and explore new and old movies. 
        We will put out 2 episodes a month based on
        the films we are seeing and want to talk about. 
    </p>
    </div>
    <div className="Home">
        <h3>Who are we?</h3>
    <p className="we">
 The Snob references William Dixon, a movie lover and maker,
 who professionally is a web developer. This website was actually 
 made by him so as you see imporvements over time, that's just him
 getting better at his craft. 
 <br>
 </br>
 <br></br>
 The Slob references Jason MacDonald, also a movie lover, who
 works as a revenue accountant, and lives with his Fiance.
 Both boys met in highschool and quickly bonded over their 
 love of story telling. They have been friends ever since and 
 have spent hours upon hours talking about movies. 
    </p>
    </div>
    </div>
    </div>
  );
}

export default About;