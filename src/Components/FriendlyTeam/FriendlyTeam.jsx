import React from 'react';

import BansList from '../BansList/BansList';
import Team from '../Team/Team';

class FriendlyTeam extends React.Component {
  constructor(props) {
    super(props);

    this.state = { enemy: false };
  }
  render() {
    const { chosen, locked, turn } = this.props;
    return (
      <div className="friendly-team team">
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

export default FriendlyTeam;
