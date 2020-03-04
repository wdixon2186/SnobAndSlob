import React from 'react';
import '../App.css';
import {SocialIcon} from 'react-social-icons'
function Contact() {
  return (
      <div>
          <div className="section">
      <div className="Home">
        <h3>Contact Us</h3>
        <p>Wdixon2186@gmail.com</p>
        <div className="link">
        <SocialIcon className="icon" url="https://www.linkedin.com/in/williammdixon/" />
        <SocialIcon className="icon"  url="https://www.facebook.com/billy.dixon.56" />
        <SocialIcon className="icon"  url="https://wdixon2186.github.io/Portfolio/" />
        <SocialIcon className="icon"  url="https://twitter.com/Wdixondev" />
      </div>
      </div>
      </div>
    </div>
  );
}

export default Contact;