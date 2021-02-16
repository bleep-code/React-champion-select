import React from 'react';
import Player from '../Player/Player';
import './Team.css';
class Team extends React.Component {
  render() {
    const { chosen, locked, turn } = this.props;

    return (
      <>
        <div className="team__players">
          <Player
            locked={!!locked && locked.length >= 1 && locked[0]}
            chosen={chosen}
            isPicking={turn === 1}
          ></Player>
          <Player
            locked={!!locked && locked.length >= 3 && locked[2]}
            chosen={chosen}
            isPicking={turn === 3}
            isPickingNext={turn === 2}
          ></Player>
          <Player
            locked={!!locked && locked.length >= 5 && locked[4]}
            chosen={chosen}
            isPicking={turn === 5}
            isPickingNext={turn === 4}
          ></Player>
          <Player
            locked={!!locked && locked.length >= 7 && locked[5]}
            chosen={chosen}
            isPicking={turn === 7}
            isPickingNext={turn === 6}
          ></Player>
          <Player
            locked={!!locked && locked.length >= 9 && locked[7]}
            chosen={chosen}
            isPicking={turn === 9}
            isPickingNext={turn === 8}
          ></Player>
        </div>
      </>
    );
  }
}

export default Team;
