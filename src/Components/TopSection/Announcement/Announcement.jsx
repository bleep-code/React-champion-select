import './Announcement.scss';

import React from 'react';

class Announcement extends React.Component {
  announcmentMessage() {
    const { turn, banningPhase, bansCount, playersCount } = this.props;

    if (banningPhase && turn === bansCount + 1) {
      return 'Choosing phase will start in:';
    }

    if (turn === playersCount + 1) {
      return 'Game will start in:';
    }

    if (turn % 2 === 0) {
      return banningPhase ? 'Opponent is banning..' : 'Opponent is picking...';
    }

    return banningPhase ? 'Ban a champion!' : 'Choose your champion!';
  }

  render() {
    return (
      <span className="champion-picker__top-section__announcement">
        {this.announcmentMessage()}
      </span>
    );
  }
}

export default Announcement;
