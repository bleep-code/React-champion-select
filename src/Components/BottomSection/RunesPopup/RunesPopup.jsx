import './RunesPopup.css';

import React from 'react';
import RuneSet from '../RuneSet/RuneSet';

class RunesPopup extends React.Component {
  render() {
    const { setChosen } = this.props;

    return (
      <div
        className="choose-runes__popup"
        onClick={(e) => {
          setChosen(e.target, 'runes');
        }}
      >
        <RuneSet name="Default 1" />
        <RuneSet name="Default 2" />
        <RuneSet name="Default 3" />
        <RuneSet name="Default 4" />
        <RuneSet name="Default 5" />
      </div>
    );
  }
}

export default RunesPopup;