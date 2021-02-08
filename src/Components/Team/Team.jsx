import React from 'react';
import Player from '../Player/Player';
import './Team.css';
class Team extends React.Component {
  render() {
    return (
      <>
        <div className="team__players">
          <Player></Player>
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
