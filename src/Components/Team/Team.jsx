import './Team.css';

import React from 'react';
import _ from 'lodash';

import Player from '../Player/Player';

class Team extends React.Component {
  renderPlayers() {
    const {chosen, locked, turn, enemy} = this.props;
    return _.fill(Array(10), undefined).map((x, i) => {
      const isEnemy = !enemy ? i % 2 === 0 : i % 2 !== 0;
      return (x = isEnemy && (
        <Player
          key={i}
          idx={(i + 1) / 2}
          locked={locked?.length >= i + 1 && locked[i]}
          chosen={chosen}
          isPicking={turn === i + 1}
          isPickingNext={turn === i}
          enemy={enemy}
        />
      ));
    });
  }
  render() {
    return <div className="team__players">{this.renderPlayers()}</div>;
  }
}

export default Team;
