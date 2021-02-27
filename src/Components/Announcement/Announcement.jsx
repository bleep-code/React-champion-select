import './Announcement.css';

import React from 'react';

class Announcement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <span className="champion-picker__top-section--announcement">
        {this.props.turn === 11
          ? 'Game will start in:'
          : this.props.turn % 2 !== 0
          ? 'Choose your champion!'
          : 'Opponent is picking...'}
      </span>
    );
  }
}

export default Announcement;
