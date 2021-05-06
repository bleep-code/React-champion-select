import './CrashedGame.scss';

import React from 'react';

class CrashedGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = { time: 10, intervalId: undefined };

    this.countDown = this.countDown.bind(this);
  }

  countDown() {
    const { time, intervalId } = this.state;

    if (time <= 0) {
      clearInterval(intervalId);
      return window.location.reload();
    }

    this.setState({ time: time - 1 });
  }

  componentDidMount() {
    const intervalId = setInterval(this.countDown, 1000);
    this.setState({ intervalId });
  }

  render() {
    return (
      <div className="crashed-game">
        <span className="crashed-game--message">
          I am sorry, you did not choose a champion!
        </span>
        <span className="crashed-game--refresh">
          Please refresh the page, or wait {this.state.time}s.
        </span>
      </div>
    );
  }
}

export default CrashedGame;
