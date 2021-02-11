import React from 'react';
import './Player.css';

import _ from 'lodash';
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { chosen, locked, turn } = this.props;

    return (
      <div className="team__players--player player">
        <div className="player__picking-sign"></div>
        <div className="player__summoner-spells">
          <div className="player_summoner-spells--upper"></div>
          <div className="player_summoner-spells--lower"></div>
        </div>
        <div
          className="player__image"
          style={{
            backgroundImage: `url(${
              !_.isEmpty(chosen) && chosen?.children[0]?.src
            })`,
          }}
        ></div>
        <div className="player__details">
          <span className="player__details--is-picking">Status of picking</span>
          <span className="player__details--position">Bottom</span>
          <span className="player__details--name">Trundle</span>
        </div>
      </div>
    );
  }
}

export default Player;
