import './EnemyTeam.css';

import React from 'react';

import BansList from '../BansList/BansList';
import Team from '../Team/Team';

class EnemyTeam extends React.Component {
  render() {
    const {banningPhase, bannedChamps, turn, chosen, locked} = this.props;

    return (
      <div className="enemy-team team">
        <BansList banningPhase={banningPhase} bannedChamps={bannedChamps} enemy={true} />
        <Team banningPhase={banningPhase} bannedChamps={bannedChamps} locked={locked} chosen={chosen} turn={turn} enemy={true} />
      </div>
    );
  }
}

export default EnemyTeam;
