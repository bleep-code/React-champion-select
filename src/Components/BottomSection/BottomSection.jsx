import './BottomSection.css';

import React from 'react';

import Spells from '../Spells/Spells';

const _ = require('lodash');
const {defaultSummoners} = require('../../Fixtures/fixtures.json');

class BottomSection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenLeft: false,
      chosenLeft: defaultSummoners.heal,
      isOpenRight: false,
      chosenRight: defaultSummoners.flash,
    };

    this.setChosen = this.setChosen.bind(this);
    this.openPopup = this.openPopup.bind(this);
  }

  setChosen(chosen, side) {
    if (side === 'left' && !_.isEqual(chosen, this.state.chosenRight)) {
      this.setState({chosenLeft: chosen});
    }

    if (side === 'right' && !_.isEqual(chosen, this.state.chosenLeft)) {
      this.setState({chosenRight: chosen});
    }

    // ifs below are responsible for changing order of summoners in case
    // player chooses value that he already chose

    if (_.isEqual(chosen, this.state.chosenRight) && side === 'left') {
      this.setState({chosenRight: this.state.chosenLeft});
      this.setState({chosenLeft: chosen});
    }

    if (_.isEqual(chosen, this.state.chosenLeft) && side === 'right') {
      this.setState({chosenLeft: this.state.chosenRight});
      this.setState({chosenRight: chosen});
    }

    this.setState({isOpenLeft: false, isOpenRight: false});
  }

  openPopup(side) {
    const {isOpenLeft, isOpenRight} = this.state;

    if (side === 'left') {
      isOpenRight && this.setState({isOpenRight: !isOpenRight});
      this.setState({isOpenLeft: !isOpenLeft});
    }

    if (side === 'right') {
      isOpenLeft && this.setState({isOpenLeft: !isOpenLeft});
      this.setState({isOpenRight: !isOpenRight});
    }
  }

  render() {
    const {isOpenLeft, chosenLeft, isOpenRight, chosenRight} = this.state;

    const isOpen = isOpenLeft || isOpenRight ? true : false;

    return (
      <div className="champion-picker__bottom-section bottom-section">
        <div className="bottom-section--edit-runes" />
        <select className="bottom-section--choose-runes"></select>

        {/* Key new Date() is set, so it always gets a new prop and its rendered properly */}

        <Spells
          key={new Date()}
          isOpenLeft={isOpenLeft}
          chosenLeft={chosenLeft}
          isOpenRight={isOpenRight}
          chosenRight={chosenRight}
          isOpen={isOpen}
          setChosen={this.setChosen}
          openPopup={this.openPopup}
        />
        <span className="bottom-section--delimiter" />
        <div className="bottom-section--choose-extras">
          <div className="bottom-section--choose-minion" />
          <div className="bottom-section--choose-emote" />
        </div>
      </div>
    );
  }
}

export default BottomSection;
