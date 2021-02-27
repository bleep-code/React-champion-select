import './Team.css';

import React from 'react';

import Player from '../Player/Player';

const _ = require('lodash');

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setPlayers() {
    const { chosen, locked, turn, enemy } = this.props;
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
    return <div className="team__players">{this.setPlayers()}</div>;
  }
}

export default Team;
