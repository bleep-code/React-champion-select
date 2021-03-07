import './Spells.css';

import React from 'react';
import _ from 'lodash';

import SpellsPopup from '../SpellsPopup/SpellsPopup';
import Spell from '../Spell/Spell';

import axios from 'axios';

import {urls} from '../../Fixtures/fixtures.json';

class Spells extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedSpells: [],
      spells: [],
    };
  }

  async fetchSpells() {
    let {data: fetchedSpells} = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/summoner.json'
    );
    fetchedSpells = _.flatMap(fetchedSpells.data);
    this.setState({fetchedSpells});
  }

  setSpells() {
    const spells = this.state.fetchedSpells.map(
      ({id, name, description, cooldownBurn, image, modes}) => {
        if (modes.includes('CLASSIC')) {
          return (
            <Spell
              id={id}
              key={id}
              name={name}
              image={image}
              description={description}
              cooldownBurn={cooldownBurn}
              isOpenLeft={this.props.isOpenLeft}
              isOpenRight={this.props.isOpenRight}
              setChosen={this.props.setChosen}
              onUpdate={this.onUpdate}
            />
          );
        }
      }
    );

    this.setState({spells});
  }

  componentDidMount() {
    this.fetchSpells().then(() => this.setSpells());
  }

  render() {
    const {
      isOpen,
      isOpenLeft,
      chosenLeft,
      isOpenRight,
      chosenRight,
      openPopup,
    } = this.props;

    return (
      <>
        <div
          className={`bottom-section--choose-summoners choose-summoners ${
            isOpen ? 'open' : ''
          }`}
        >
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
            spells={this.state.spells}
          />
        )}
      </>
    );
  }
}

export default Spells;
