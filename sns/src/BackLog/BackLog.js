import React from 'react';
import '../App.css';
import Current from '../Current/Current';

function BackLog() {
  return (
      <div>
          <Current />
          <h1>API call to display all episodes.</h1>
    </div>
  );
}

export default BackLog;