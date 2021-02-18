import React from 'react';
import BansList from '../BansList/BansList';
import Team from '../Team/Team';
class EnemyTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enemy: true };
  }
  render() {
    return (
      <div className="enemy-team team">
        <BansList />
        <Team enemy={this.state.enemy} />
      </div>
    );
  }
}

export default EnemyTeam;
