import React from 'react';
import '../App.css';

function Current() {
  return (
      <div>
          <h1>Our current episode is...</h1>
          <iframe src="https://widget.spreaker.com/player?episode_id=14803750&theme=light&autoplay=false&playlist=false&cover_image_url=https%3A%2F%2Fd3wo5wojvuv7l.cloudfront.net%2Fimages.spreaker.com%2Foriginal%2Fb88dafe6d941e7bfc1943c54ee2cc902.jpg" width="100%" height="800px" frameborder="0"></iframe>
    </div>
  );
}

export default Current;