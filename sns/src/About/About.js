import React from "react";
import "../App.css";
import Contact from '../Contact/Contact'

function About() {
  return (
    <div>
      <div className="section">
        <div className="Home">
          <h3>The Podcast</h3>
          <p className="us">
            This is a movie based podcast that is meant to talk and explore new
            and old movies. We will put out 2 episodes a month based on the
            films we are seeing and want to talk about.
          </p>
        </div>
        <div className="Home">
          <h3>Who are we?</h3>
          <img className="cali" src="https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/549298_4929457227338_1845315861_n.jpg?_nc_cat=104&_nc_sid=210fed&_nc_ohc=p8JxxQU-crcAX-yC0h4&_nc_ht=scontent.fapa1-2.fna&oh=3b4c98b8baebf1d313e42827cf35aa0d&oe=5E95EB8B"></img>
          <p className="we">
            The Snob references William Dixon (Blue hoodie), a movie lover and maker, who
            professionally is a web developer. This website was actually made by
            him so as you see improvements over time, that's just him getting
            better at his craft.
            <br></br>
            <br></br>
            The Slob references Jason MacDonald (Grey hoodie), also a movie lover, who works
            as a revenue accountant, and lives with his wife. Both boys met in
            highschool and quickly bonded over their love of story telling. They
            have been friends ever since and have spent hours upon hours talking
            about movies.
          </p>
        </div>
        <Contact />
      </div>
    </div>
  );
}

export default About;
