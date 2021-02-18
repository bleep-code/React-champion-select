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
            locked={
              !enemy
                ? locked?.length >= 1 && locked[0]
                : locked?.length >= 2 && locked[1]
            }
            chosen={chosen}
            isPicking={!enemy ? turn === 1 : turn === 2}
            enemy={enemy}
          />
          <Player
            locked={
              !enemy
                ? locked?.length >= 3 && locked[2]
                : locked?.length >= 4 && locked[3]
            }
            chosen={chosen}
            isPicking={!enemy ? turn === 3 : turn === 4}
            isPickingNext={!enemy ? turn === 2 : turn === 3}
            enemy={enemy}
          />
          <Player
            locked={
              !enemy
                ? locked?.length >= 5 && locked[4]
                : locked?.length >= 6 && locked[5]
            }
            chosen={chosen}
            isPicking={!enemy ? turn === 5 : turn === 6}
            isPickingNext={!enemy ? turn === 4 : turn === 5}
            enemy={enemy}
          />
          <Player
            locked={
              !enemy
                ? locked?.length >= 7 && locked[6]
                : locked?.length >= 8 && locked[7]
            }
            chosen={chosen}
            isPicking={!enemy ? turn === 7 : turn === 8}
            isPickingNext={!enemy ? turn === 6 : turn === 7}
            enemy={enemy}
          />
          <Player
            locked={
              !enemy
                ? locked?.length >= 9 && locked[8]
                : locked?.length >= 10 && locked[9]
            }
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
