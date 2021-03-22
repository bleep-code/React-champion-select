import React from 'react';

import BansList from '../BansList/BansList';
import Team from '../Team/Team';

class FriendlyTeam extends React.Component {
  render() {
    const {banningPhase, bannedChamps, chosen, locked, turn} = this.props;

    return (
      <div className="friendly-team team">
        <BansList />
        <Team
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
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
