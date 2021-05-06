import './ChampionPool.scss';

import React from 'react';

class ChampionPool extends React.Component {
  render() {
    return (
      <div className="champion-picker__mid-section__champion-pool champion-pool">
        {this.props.champions}
      </div>
    );
  }
}

export default ChampionPool;
