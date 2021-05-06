import React from 'react';

import BansList from '../BansList/BansList';
import Team from './Team';

class EnemyTeam extends React.Component {
  render() {
    const { bansCount, banningPhase, bannedChamps } = this.props;

    return (
      <div className="team team--enemy">
        <BansList
          bansCount={bansCount}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          enemy={true}
        />
        <Team enemy={true} {...this.props} />
      </div>
    );
  }
}

export default EnemyTeam;
