import React from 'react';
import '../App.css';

function Current() {
  return (
      <div>
          <h3>Our current episode is...</h3>
          <div className="epi">
          <iframe src="https://widget.spreaker.com/player?episode_id=14803750&theme=light&autoplay=false&playlist=false&cover_image_url=https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Foriginal%2Fb88dafe6d941e7bfc1943c54ee2cc902.jpg" width="100%" height="600px" frameborder="0"></iframe>
          </div>
    </div>
  );
}

export default Current;