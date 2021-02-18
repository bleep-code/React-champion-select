import React from 'react';
import BansList from '../BansList/BansList';
import Team from '../Team/Team';
class EnemyTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = { enemy: true };
  }
  render() {
    const { turn, chosen, locked } = this.props;
    return (
      <div className="enemy-team team">
        <BansList />
        <Team
          locked={locked}
          chosen={chosen}
          turn={turn}
          enemy={this.state.enemy}
        />
      </div>
    );
  }
}

export default EnemyTeam;
