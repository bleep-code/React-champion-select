import React from 'react';
import Player from '../Player/Player';
import './Team.css';
class Team extends React.Component {
  render() {
    const { chosen, locked, turn } = this.props;

    return (
      <>
        <div className="team__players">
          <Player locked={locked} chosen={chosen} turn={turn}></Player>
          <Player></Player>
          <Player></Player>
          <Player></Player>
          <Player></Player>
        </div>
      </>
    );
  }
}

export default Team;
