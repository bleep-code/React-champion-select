import './Announcement.css';

import React from 'react';

class Announcement extends React.Component {
  announcmentMessage() {
    const {turn} = this.props;

    if (turn === 11) {
      return 'Game will start in:';
    }

    if (turn % 2 === 0) {
      return 'Oponent is picking...';
    }

    return 'Choose your champion!';
  }
  render() {
    return (
      <span className="champion-picker__top-section--announcement">
        {this.announcmentMessage()}
      </span>
    );
  }
}

export default Announcement;
