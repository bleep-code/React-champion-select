import './Ban.css';

import React from 'react';

import { urls } from '../../../Fixtures/fixtures.json';

class Ban extends React.Component {
  render() {
    const { bannedChamp } = this.props;

    return (
      <div
        className="bans__single-ban"
        style={{
          backgroundImage: `url(${urls.championImg + bannedChamp?.image})`,
        }}
      />
    );
  }
}

export default Ban;
