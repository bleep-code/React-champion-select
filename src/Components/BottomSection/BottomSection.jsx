import './BottomSection.css';

import React from 'react';
import _ from 'lodash';

import Spells from '../Spells/Spells';
import Runes from '../Runes/Runes';
import Extras from '../Extras/Extras';

import {defaultSummoners} from '../../Fixtures/fixtures.json';

class BottomSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      spellsChosenLeft: defaultSummoners.heal,
      spellsChosenRight: defaultSummoners.flash,
      spellsIsOpenLeft: false,
      spellsIsOpenRight: false,
      runesIsOpen: false,
    };

    this.setChosen = this.setChosen.bind(this);
    this.openPopup = this.openPopup.bind(this);
  }

  setChosen(chosen, side) {
    const {spellsChosenLeft, spellsChosenRight} = this.state;

    if (side.includes('spells')) {
      if (side === 'spells-left' && !_.isEqual(chosen, spellsChosenRight)) {
        this.setState({spellsChosenLeft: chosen});
      }

      if (side === 'spells-right' && !_.isEqual(chosen, spellsChosenLeft)) {
        this.setState({spellsChosenRight: chosen});
      }

      // ifs below are responsible for changing order of summoners in case
      // player chooses value that he already chose

      if (_.isEqual(chosen, spellsChosenRight) && side === 'spells-left') {
        this.setState({spellsChosenRight: spellsChosenLeft});
        this.setState({spellsChosenLeft: chosen});
      }

      if (_.isEqual(chosen, spellsChosenLeft) && side === 'spells-right') {
        this.setState({spellsChosenLeft: spellsChosenRight});
        this.setState({spellsChosenRight: chosen});
      }

      this.setState({spellsIsOpenLeft: false, spellsIsOpenRight: false});
    }
  }

  openPopup(side) {
    const {spellsIsOpenLeft, spellsIsOpenRight, runesIsOpen} = this.state;

    //close all popups on opening new
    this.setState({
      spellsIsOpenLeft: false,
      spellsIsOpenRight: false,
      runesIsOpen: false,
    });

    if (side === 'spells-left') {
      this.setState({spellsIsOpenLeft: !spellsIsOpenLeft});
    }

    if (side === 'spells-right') {
      this.setState({spellsIsOpenRight: !spellsIsOpenRight});
    }

    if (side === 'runes') {
      this.setState({runesIsOpen: !runesIsOpen});
    }
  }

  render() {
    const {
      spellsIsOpenLeft,
      spellsChosenLeft,
      spellsIsOpenRight,
      spellsChosenRight,
      runesIsOpen,
    } = this.state;

    const spellsIsOpen = spellsIsOpenLeft || spellsIsOpenRight ? true : false;

    return (
      <div className="champion-picker__bottom-section bottom-section">
        <Runes isOpen={runesIsOpen} openPopup={this.openPopup} />
        {/* Key new Date() is set, so it always gets a new prop and its rendered properly */}
        <Spells
          key={new Date()}
          isOpen={spellsIsOpen}
          chosenLeft={spellsChosenLeft}
          chosenRight={spellsChosenRight}
          isOpenRight={spellsIsOpenRight}
          isOpenLeft={spellsIsOpenLeft}
          setChosen={this.setChosen}
          openPopup={this.openPopup}
        />
        <span className="bottom-section__delimiter" />
        <Extras />
      </div>
    );
  }
}

export default BottomSection;
