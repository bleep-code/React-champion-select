import React from 'react';
import Player from '../Player/Player';
import './Team.css';
class Team extends React.Component {
  render() {
    const { chosen, locked, turn, enemy } = this.props;

    return (
      <>
        <div className="team__players">
          <Player
            locked={locked?.length >= 1 && locked[0]}
            chosen={chosen}
            isPicking={!enemy ? turn === 1 : turn === 2}
            enemy={enemy}
          />
          <Player
            locked={locked?.length >= 3 && locked[2]}
            chosen={chosen}
            isPicking={!enemy ? turn === 3 : turn === 4}
            isPickingNext={!enemy ? turn === 2 : turn === 3}
            enemy={enemy}
          />
          <Player
            locked={locked?.length >= 5 && locked[4]}
            chosen={chosen}
            isPicking={!enemy ? turn === 5 : turn === 6}
            isPickingNext={!enemy ? turn === 4 : turn === 5}
            enemy={enemy}
          />
          <Player
            locked={locked?.length >= 7 && locked[5]}
            chosen={chosen}
            isPicking={!enemy ? turn === 7 : turn === 8}
            isPickingNext={!enemy ? turn === 6 : turn === 7}
            enemy={enemy}
          />
          <Player
            locked={locked?.length >= 9 && locked[7]}
            chosen={chosen}
            isPicking={!enemy ? turn === 9 : turn === 10}
            isPickingNext={!enemy ? turn === 8 : turn === 9}
            enemy={enemy}
          />
        </div>
      </>
    );
  }
}

export default Team;
