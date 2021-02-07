import React from 'react';
import BansList from '../BansList/BansList';
import Team from '../Team/Team';
class FriendlyTeam extends React.Component {
  render() {
    return (
      <div className="friendly-team team">
        Friendly Team
        <BansList />
        <Team />
      </div>
    );
  }
}

export default FriendlyTeam;
