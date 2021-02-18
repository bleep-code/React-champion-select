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
    const { chosen, locked, isPicking, isPickingNext, enemy } = this.props;

    const pickingStatus = isPicking
      ? 'Picking ..'
      : isPickingNext
      ? 'Picking next..'
      : '';

    const bgImage = !!locked
      ? locked.children[0].src
      : isPicking && !_.isEmpty(chosen) && chosen?.children[0]?.src;

    const name = !!locked
      ? locked.innerText
      : (isPicking && chosen?.innerText) || this.name;

    const borderColor = !!enemy ? 'red' : 'gold';

    return (
      <div
        className="team__players--player player"
        onClick={this.availableNicknames}
      >
        <div
          className="player__picking-sign"
          style={{ opacity: isPicking ? 1 : 0 }}
        />
        <div className="player__summoner-spells">
          <div className="player_summoner-spells--upper" />
          <div className="player_summoner-spells--lower" />
        </div>
        <div
          className="player__image"
          style={{
            backgroundImage: `url(${bgImage})`,
            borderColor,
          }}
        ></div>
        <div className="player__details">
          <span className="player__details--is-picking">{pickingStatus}</span>
          <span className="player__details--position">{this.role}</span>
          <span className="player__details--name">{name}</span>
        </div>
      </div>
    );
  }
}

export default Player;
