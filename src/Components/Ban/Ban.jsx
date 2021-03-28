import './Ban.css';

import React from 'react';

class Ban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="bans__single-ban"
        style={{
          backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${this.props.bannedChamp?.image})`,
        }}
      ></div>
    );
  }
}

export default Ban;
