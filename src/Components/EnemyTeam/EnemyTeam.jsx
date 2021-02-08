import React from 'react';
import BansList from '../BansList/BansList';
import Team from '../Team/Team';
class EnemyTeam extends React.Component {
  render() {
    return (
      <div className="friendly-team team">
        <BansList />
        <Team />
      </div>
    );
  }
}

export default EnemyTeam;
