import React from 'react';
import Player from '../Player/Player';
import './Team.css';
class Team extends React.Component {
  render() {
    const { chosen, locked, turn, enemy } = this.props;
    const passedProps = enemy ? '' : 's';

    return (
      <>
        <div className="team__players">
          <Player
            locked={locked.length >= 1 && locked[0]}
            chosen={chosen}
            isPicking={turn === 1}
            enemy={enemy}
          />
          <Player
            locked={locked.length >= 3 && locked[2]}
            chosen={chosen}
            isPicking={turn === 3}
            isPickingNext={turn === 2}
            enemy={enemy}
          />
          <Player
            locked={locked.length >= 5 && locked[4]}
            chosen={chosen}
            isPicking={turn === 5}
            isPickingNext={turn === 4}
            enemy={enemy}
          />
          <Player
            locked={locked.length >= 7 && locked[5]}
            chosen={chosen}
            isPicking={turn === 7}
            isPickingNext={turn === 6}
            enemy={enemy}
          />
          <Player
            locked={locked.length >= 9 && locked[7]}
            chosen={chosen}
            isPicking={turn === 9}
            isPickingNext={turn === 8}
            enemy={enemy}
          />
        </div>
      </>
    );
  }
}

export default Team;
