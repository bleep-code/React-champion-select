import React from 'react';

import BansList from '../BansList/BansList';
import Team from '../Team/Team';

class FriendlyTeam extends React.Component {
  render() {
    const {
      playersCount,
      bansCount,
      banningPhase,
      bannedChamps,
      chosen,
      locked,
      turn,
    } = this.props;

    return (
      <div className="friendly-team team">
        <BansList
          bansCount={bansCount}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          enemy={false}
        />
        <Team
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          playersCount={playersCount}
          locked={locked}
          chosen={chosen}
          turn={turn}
          enemy={false}
        />
      </div>
    );
  }
}

export default FriendlyTeam;
