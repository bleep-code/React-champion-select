import React from 'react';
import './StartedGame.css';

class StartedGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="started-game">
        <span class="started-game--message">Game started!</span>
      </div>
    );
  }
}

export default StartedGame;
