import React from 'react';
import './Player.css';
import {
  availableNicknames,
  availableRoles,
} from '../../Fixtures/fixtures.json';

import _ from 'lodash';
class Player extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.name =
      availableNicknames[Math.floor(Math.random() * availableNicknames.length)];
    this.role =
      availableRoles[Math.floor(Math.random() * availableRoles.length)];
  }

  render() {
    const { chosen, locked, isPicking, isPickingNext } = this.props;

    return (
      <div
        className="team__players--player player"
        onClick={this.availableNicknames}
      >
        <div className="player__picking-sign"></div>
        <div className="player__summoner-spells">
          <div className="player_summoner-spells--upper"></div>
          <div className="player_summoner-spells--lower"></div>
        </div>
        <div
          className="player__image"
          style={{
            backgroundImage: `url(${
              isPicking && !_.isEmpty(chosen) && chosen?.children[0]?.src
            })`,
          }}
        ></div>
        <div className="player__details">
          <span className="player__details--is-picking">
            {isPicking ? 'Picking ..' : isPickingNext ? 'Picking next..' : ''}
          </span>
          <span className="player__details--position">{this.role}</span>
          <span className="player__details--name">
            {(isPicking && chosen?.innerText) || this.name}
          </span>
        </div>
      </div>
    );
  }
}

export default Player;
