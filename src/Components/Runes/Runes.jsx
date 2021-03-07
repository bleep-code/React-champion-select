import './Runes.css';

import React from 'react';

import RunesPopup from '../RunesPopup/RunesPopup';

class Runes extends React.Component {
  render() {
    const {isOpen} = this.props;
    return (
      <>
        <div className="bottom-section--edit-runes">
          <i className="fas fa-pencil-alt" />
        </div>
        <div
          className="bottom-section--choose-runes"
          onClick={() => this.props.openPopup('runes')}
        >
          {isOpen && <RunesPopup isOpen={isOpen} />}
        </div>
      </>
    );
  }
}

export default Runes;
