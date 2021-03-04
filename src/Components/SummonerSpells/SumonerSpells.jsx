import './SummonerSpells.css';

import React from 'react';

import Spells from '../Spells/Spells';

const _ = require('lodash');
const {defaultSummoners} = require('../../Fixtures/fixtures.json');

class SummonerSpells extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpenLeft: false,
      chosenLeft: {
        name: defaultSummoners.heal.name,
        image: defaultSummoners.heal.image,
        description: defaultSummoners.heal.description,
      },
      isOpenRight: false,
      chosenRight: {
        name: defaultSummoners.flash.name,
        image: defaultSummoners.flash.image,
        description: defaultSummoners.flash.description,
      },
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
      <div className="champion-picker__bottom-section--summoner-spells summoner-spells">
        <div className="summoner-spells--edit-runes" />
        <select className="summoner-spells--choose-runes"></select>

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
        <span className="summoner-spells--delimiter" />
        <div className="summoner-spells--choose-extras">
          <div className="summoner-spells--choose-minion" />
          <div className="summoner-spells--choose-emote" />
        </div>
      </div>
    );
  }
}

export default SummonerSpells;
