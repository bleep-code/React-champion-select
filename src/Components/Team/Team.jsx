import React from 'react';
import Player from '../Player/Player';
import './Team.css';

var _ = require('lodash');

class Team extends React.Component {
  render() {
    const { chosen, locked, turn, enemy } = this.props;
    const Players = (isEnemy) =>
      _.fill(Array(10), undefined)
        .map((x, i) => {
          isEnemy = !enemy ? i % 2 === 0 : i % 2 !== 0;
          return (x = isEnemy && (
            <Player
              idx={i}
              locked={locked?.length >= i + 1 && locked[i]}
              chosen={chosen}
              isPicking={turn === i + 1}
              isPickingNext={turn === i}
              enemy={enemy}
            />
          ));
        })
        .filter((x) => x);

    return <div className="team__players">{Players()}</div>;
  }
}

export default Team;
