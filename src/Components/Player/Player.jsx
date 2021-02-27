import './Player.css';

import React from 'react';

import {availableNicknames, availableRoles} from '../../Fixtures/fixtures.json';

const _ = require('lodash');

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
    const {idx, chosen, locked, isPicking, isPickingNext, enemy} = this.props;

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

    const enemyName = !!enemy ? locked?.innerText : '';

    const borderColor = !enemy ? 'gold' : 'red';

    const summonerSpellsDisplay = (!!enemy || !locked) && 'none';

    return (
      <div
        className="team__players--player player"
        style={{
          flexDirection: !enemy ? 'row' : 'row-reverse',
        }}
      >
        <div
          className="player__picking-sign"
          style={{opacity: isPicking ? 1 : 0}}
        />
        <div
          className="player__summoner-spells"
          style={{marginLeft: '3%', display: summonerSpellsDisplay}}
        >
          <div className="player_summoner-spells--upper" />
          <div className="player_summoner-spells--lower" />
        </div>
        <div
          className="player__image"
          style={{
            backgroundImage: `url(${bgImage})`,
            borderColor,
            margin: '0 5%',
          }}
        />
        <div
          className="player__details"
          style={{
            color: isPicking && 'gold',
            alignItems: !!enemy && 'flex-end',
          }}
        >
          <span
            className="player__details--is-picking"
            style={{
              left: !enemy ? '0' : 'calc(100-2%)',
              fontSize: !!enemy && '28px',
              fontWeight: !!enemy && 500,
            }}
          >
            {pickingStatus || (!!enemy && enemyName)}
          </span>
          <span
            className="player__details--position"
            style={{
              fontSize: !enemy && '28px',
              fontWeight: !enemy && 500,
            }}
          >
            {!enemy ? this.role : `Summoner ${idx}`}
          </span>
          <span
            className="player__details--name"
            style={{
              fontSize: enemy && '28px',
              fontWeight: enemy && 500,
            }}
          >
            {!enemy && name}
          </span>
        </div>
      </div>
    );
  }
}

export default Player;
