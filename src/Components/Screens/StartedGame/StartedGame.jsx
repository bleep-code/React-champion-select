import './StartedGame.scss';

import React from 'react';

class StartedGame extends React.Component {
  render() {
    return (
      <div className="started-game">
        <span className="started-game--message">Game started!</span>
      </div>
    );
  }
}

export default StartedGame;
