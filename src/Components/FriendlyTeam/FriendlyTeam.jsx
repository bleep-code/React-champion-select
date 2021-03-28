import React from 'react';

import BansList from '../BansList/BansList';
import Team from '../Team/Team';

class FriendlyTeam extends React.Component {
  render() {
    const {bansCount, banningPhase, bannedChamps} = this.props;

    return (
      <div className="friendly-team team">
        <BansList
          bansCount={bansCount}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          enemy={false}
        />
        <Team enemy={false} {...this.props} />
      </div>
    );
  }
}

export default FriendlyTeam;
