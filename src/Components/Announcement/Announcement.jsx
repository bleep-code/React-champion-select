import './Announcement.css';

import React from 'react';

class Announcement extends React.Component {
  announcmentMessage() {
    const { turn, banningPhase, bansCount, playersCount } = this.props;

    if (turn === bansCount + 1 || turn === playersCount + 1) {
      if (banningPhase) {
        return 'Choosing phase will start in:';
      }

      return 'Game will start in:';
    }

    if (turn % 2 === 0) {
      if (banningPhase) {
        return 'Oponent is banning';
      }

      return 'Oponent is picking...';
    }

    if (banningPhase) {
      return 'Ban a champion!';
    }

    return 'Choose your champion!';
  }

  render() {
    return <span className="champion-picker__top-section__announcement">{this.announcmentMessage()}</span>;
  }
}

export default Announcement;
