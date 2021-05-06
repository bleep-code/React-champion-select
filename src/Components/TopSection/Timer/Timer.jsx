import './Timer.scss';

import React from 'react';

class Timer extends React.Component {
  render() {
    return (
      <div className="champion-picker__top-section__timer">
        <span>{this.props.time}</span>
      </div>
    );
  }
}

export default Timer;
