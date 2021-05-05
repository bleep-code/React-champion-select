import './Timer.css';

import React from 'react';

class Timer extends React.Component {
  render() {
    return (
      <div className="champion-picker__top-section--timer">
        <span>{this.props.time}</span>
      </div>
    );
  }
}

export default Timer;
