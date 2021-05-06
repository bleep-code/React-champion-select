import './Player.scss';

import React from 'react';
import _ from 'lodash';

import { nicknames, roles, urls } from '../../../Fixtures/fixtures.json';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.name = nicknames[Math.floor(Math.random() * nicknames.length)];
    this.role = roles[Math.floor(Math.random() * roles.length)];
  }

  pickingStatus() {
    const { banningPhase, isPicking, isPickingNext } = this.props;

    if (isPicking) {
      return banningPhase ? 'Banning..' : 'Picking..';
    }

    if (isPickingNext) {
      return banningPhase ? 'Banning next..' : 'Picking next';
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
        className={`team__players__player ${
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
            backgroundImage: `url(${urls.championImg + this.playerImage()})`,
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
