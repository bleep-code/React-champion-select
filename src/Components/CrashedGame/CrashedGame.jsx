import './CrashedGame.css';

import React from 'react';

class CrashedGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="crashed-game">
        <span class="crashed-game--message">
          I am sorry, you did not choose a champion!
        </span>
        <span class="crashed-game--refresh">
          Please refresh the page, or wait 10s.
        </span>
      </div>
    );
  }
}

export default CrashedGame;
