import './Player.css';

import React from 'react';
import _ from 'lodash';

import {
  availableNicknames,
  availableRoles,
} from '../../Fixtures/fixtures.json';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.name =
      availableNicknames[Math.floor(Math.random() * availableNicknames.length)];
    this.role =
      availableRoles[Math.floor(Math.random() * availableRoles.length)];
  }

  pickingStatus() {
    const { banningPhase, isPicking, isPickingNext } = this.props;

    if (isPicking) {
      if (banningPhase) {
        return 'Banning...';
      }
      return 'Picking...';
    }

    if (isPickingNext) {
      if (banningPhase) {
        return 'Banning next...';
      }
      return 'Picking next...';
    }

    return '';
  }

  friendlyName() {
    const {
      banningPhase,
      bannedChamp,
      chosen,
      lockedChamps,
      isPicking,
    } = this.props;

    if (banningPhase && bannedChamp) {
      return bannedChamp.name;
    }

    if (lockedChamps) {
      return lockedChamps.name;
    }

    if (isPicking && !_.isEmpty(chosen)) {
      return chosen?.name;
    }

    return this.name;
  }

  playerImage() {
    const {
      banningPhase,
      bannedChamp,
      chosen,
      lockedChamps,
      isPicking,
    } = this.props;

    if (banningPhase && bannedChamp) {
      return bannedChamp.image;
    }

    if (lockedChamps) {
      return lockedChamps.image;
    }

    if (isPicking && !_.isEmpty(chosen)) {
      return chosen.image;
    }
  }

  pickingSign() {
    const { enemy, isPicking, isPickingNext } = this.props;

    if (isPicking) {
      return { opacity: 1, backgroundColor: enemy && 'red' };
    }

    if (isPickingNext) {
      return {
        opacity: 1,
        backgroundColor: enemy ? 'red' : 'var(--friendly-blue)',
      };
    }

    return { opacity: 0 };
  }

  render() {
    const { idx, lockedChamps, isPicking, isPickingNext, enemy } = this.props;

    return (
      <div
        className={`team__players__player player ${
          !enemy ? 'player' : 'enemy-player'
        }`}
      >
        <div className="player__picking-sign" style={this.pickingSign()} />
        <div
          className="player__summoner-spells"
          style={{ display: (enemy || !lockedChamps) && 'none' }}
        >
          <div className="player_summoner-spells--upper" />
          <div className="player_summoner-spells--lower" />
        </div>
        <div
          className={`${!enemy ? 'player__image' : 'enemy-player__image'} `}
          style={{
            backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${this.playerImage()})`,
          }}
        />
        <div
          className={`${!enemy ? `player__details` : 'enemy-player__details'}`}
          style={{
            color: isPicking && !enemy && 'gold',
          }}
        >
          <span
            className={`${
              !enemy
                ? 'player__details--is-picking'
                : 'enemy-player__details--name'
            }`}
            style={{
              color: isPickingNext && 'var(--picking-status-gold)',
            }}
          >
            {this.pickingStatus() || (enemy && lockedChamps?.name)}
          </span>
          <span
            className={`${
              !enemy
                ? 'player__details--position'
                : 'enemy-player__details--summoner-text'
            }`}
          >
            {!enemy ? this.role : `Summoner ${idx}`}
          </span>
          <span
            className="player__details--name"
            style={{
              color: isPicking && 'gold',
            }}
          >
            {!enemy && this.friendlyName()}
          </span>
        </div>
      </div>
    );
  }
}

export default Player;
