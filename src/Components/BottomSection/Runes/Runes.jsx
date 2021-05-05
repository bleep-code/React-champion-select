import './Runes.css';

import React from 'react';

import RunesPopup from '../RunesPopup/RunesPopup';

class Runes extends React.Component {
  render() {
    const { isOpen, openPopup, chosen, setChosen } = this.props;

    return (
      <>
        <div
          className="bottom-section--edit-runes"
          onClick={() => alert('TODO')}
          //#TODO handle edit runes
        >
          <i className="fas fa-pencil-alt" />
        </div>
        <div
          className="bottom-section--choose-runes"
          onClick={() => openPopup('runes')}
        >
          {chosen?.innerText || 'Default 1'}
          {/* Code above is temporary, just to model out behavior */}
          {isOpen && (
            <RunesPopup chosen={chosen} isOpen={isOpen} setChosen={setChosen} />
          )}
        </div>
      </>
    );
  }
}

export default Runes;
