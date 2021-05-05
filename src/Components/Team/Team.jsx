import './Team.css';

import React from 'react';
import _ from 'lodash';

import Player from '../Player/Player';

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderPlayers() {
    const {
      playersCount,
      chosen,
      lockedChamps,
      turn,
      enemy,
      banningPhase,
      bannedChamps,
    } = this.props;

    return _.fill(Array(playersCount)).map((player, index) => {
      // isEnemy method limits team component to certain indexes,
      // so each team can be counted from 1 method, there's no need to use two that looks the same.
      const isEnemy = () => {
        if (!enemy) {
          return index % 2 === 0;
        }

        return index % 2 !== 0;
      };

      player = isEnemy() && (
        <Player
          key={index}
          idx={(index + 1) / 2}
          banningPhase={banningPhase}
          bannedChamp={bannedChamps?.length - 1 >= index && bannedChamps[index]}
          chosen={chosen}
          lockedChamps={
            lockedChamps?.length - 1 >= index && lockedChamps[index]
          }
          isPicking={turn === index + 1}
          isPickingNext={turn === index}
          enemy={enemy}
        />
      );

      return player;
    });
  }

  render() {
    return <div className="team__players">{this.renderPlayers()}</div>;
  }
}

export default Team;
