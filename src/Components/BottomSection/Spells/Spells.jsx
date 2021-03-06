import './Spells.scss';

import React from 'react';

import SpellsPopup from './SpellsPopup';

import { urls } from '../../../Fixtures/fixtures.json';

class Spells extends React.Component {
  render() {
    const {
      isOpen,
      isOpenLeft,
      chosenLeft,
      isOpenRight,
      chosenRight,
      openPopup,
      setChosen,
    } = this.props;

    return (
      <>
        <div className="bottom-section--choose-summoners choose-summoners">
          <div
            className="choose-summoners__summoner-spell--left"
            style={{
              backgroundImage: `url(${urls.spellImg + chosenLeft.image.full})`,
            }}
            onClick={() => openPopup('spells-left')}
          />
          <div
            className="choose-summoners__summoner-spell--right"
            style={{
              backgroundImage: `url(${urls.spellImg + chosenRight.image.full})`,
            }}
            onClick={() => openPopup('spells-right')}
          />
        </div>
        {isOpen && (
          <SpellsPopup
            isOpen={isOpen}
            isOpenLeft={isOpenLeft}
            chosenLeft={chosenLeft}
            isOpenRight={isOpenRight}
            chosenRight={chosenRight}
            setChosen={setChosen}
          />
        )}
      </>
    );
  }
}

export default Spells;
