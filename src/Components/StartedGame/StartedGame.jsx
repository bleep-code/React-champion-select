import './StartedGame.css';

import React from 'react';

class StartedGame extends React.Component {
  render() {
    return (
      <div className="started-game">
        <span class="started-game--message">Game started!</span>
      </div>
    );
  }
}

export default StartedGame;
