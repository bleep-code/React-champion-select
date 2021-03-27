import './EnemyTeam.css';

import React from 'react';

import BansList from '../BansList/BansList';
import Team from '../Team/Team';

class EnemyTeam extends React.Component {
  render() {
    const {
      playersCount,
      bansCount,
      banningPhase,
      bannedChamps,
      turn,
      chosen,
      locked,
    } = this.props;

    return (
      <div className="enemy-team team">
        <BansList
          bansCount={bansCount}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          enemy={true}
        />
        <Team
          playersCount={playersCount}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          locked={locked}
          chosen={chosen}
          turn={turn}
          enemy={true}
        />
      </div>
    );
  }
}

export default EnemyTeam;
