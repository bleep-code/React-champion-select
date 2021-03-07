import './RuneSet.css';

import React from 'react';

class RuneSet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {name} = this.props;
    return <div className="bottom-section--choose-runes__rune-set">{name}</div>;
  }
}

export default RuneSet;
