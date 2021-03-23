import './Player.css';

import React from 'react';
import _ from 'lodash';

import {availableNicknames, availableRoles} from '../../Fixtures/fixtures.json';

class Player extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.name = availableNicknames[Math.floor(Math.random() * availableNicknames.length)];
    this.role = availableRoles[Math.floor(Math.random() * availableRoles.length)];
  }

  pickingStatus() {
    const {banningPhase, isPicking, isPickingNext} = this.props;

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
    const {banningPhase, bannedChamp, chosen, locked, isPicking} = this.props;

    if (banningPhase && bannedChamp) {
      return bannedChamp.name;
    }

    if (locked) {
      return locked.name;
    }

    if (isPicking && !_.isEmpty(chosen)) {
      return chosen?.name;
    }

    return this.name;
  }

  playerImage() {
    const {banningPhase, bannedChamp, chosen, locked, isPicking} = this.props;

    if (banningPhase && bannedChamp) {
      return bannedChamp.image;
    }

    if (locked) {
      return locked.image;
    }

    if (isPicking && !_.isEmpty(chosen)) {
      return chosen.image;
    }
  }

  pickingSign() {
    const {enemy, isPicking, isPickingNext} = this.props;

    if (isPicking) {
      return {opacity: 1, backgroundColor: enemy && 'red'};
    }

    if (isPickingNext) {
      return {
        opacity: 1,
        backgroundColor: enemy ? 'red' : 'var(--friendly-blue)',
      };
    }

    return {opacity: 0};
  }

  render() {
    const {idx, locked, isPicking, isPickingNext, enemy} = this.props;

    return (
      <div
        className="team__players__player player"
        style={{
          flexDirection: !enemy ? 'row' : 'row-reverse',
        }}
      >
        <div className="player__picking-sign" style={this.pickingSign()} />
        <div className="player__summoner-spells" style={{display: (enemy || !locked) && 'none'}}>
          <div className="player_summoner-spells--upper" />
          <div className="player_summoner-spells--lower" />
        </div>
        <div
          className="player__image"
          style={{
            backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${this.playerImage()})`,
            borderColor: !enemy ? 'gold' : 'red',
          }}
        />
        <div
          className="player__details"
          style={{
            color: isPicking && !enemy && 'gold',
            alignItems: enemy && 'flex-end',
          }}
        >
          <span
            className={`${enemy ? 'player__details--enemy-name' : 'player__details--is-picking'}`}
            style={{
              left: !enemy ? '0' : 'calc(100-2%)',
              color: isPickingNext && 'var(--picking-status-gold)',
            }}
          >
            {this.pickingStatus() || (enemy && locked?.name)}
          </span>
          <span className={`${enemy ? 'player__details--enemy-summoner' : 'player__details--position'}`}>
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
