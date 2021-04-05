import './SpellsPopup.css';

import React from 'react';

import Spell from '../Spell/Spell';

import _ from 'lodash';
import axios from 'axios';

class SpellsPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fetchedSpells: [],
      spells: [],
      hovered: { name: undefined, description: undefined, cooldownBurn: undefined },
    };

    this.setHovered = this.setHovered.bind(this);
  }

  async fetchSpells() {
    let { data: fetchedSpells } = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/11.5.1/data/en_US/summoner.json'
    );
    fetchedSpells = _.flatMap(fetchedSpells.data);
    this.setState({ fetchedSpells });
  }

  renderSpells() {
    const spells = this.state.fetchedSpells.map(({ id, name, description, cooldownBurn, image, modes }) => {
      let spell;

      if (modes.includes('CLASSIC')) {
        spell = (
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
            setHovered={this.setHovered}
          />
        );
      }

      return spell;
    });

    this.setState({ spells });
  }

  setHovered(name, description, cooldownBurn) {
    this.setState({ hovered: { name, description, cooldownBurn } });
  }

  spellName() {
    const { isOpenLeft, chosenLeft, isOpenRight, chosenRight } = this.props;
    const { hovered } = this.state;

    if (isOpenLeft) {
      return hovered?.name || chosenLeft.name;
    }

    if (isOpenRight) {
      return hovered?.name || chosenRight.name;
    }
  }

  spellDescription() {
    const { isOpenLeft, chosenLeft, isOpenRight, chosenRight } = this.props;
    const { hovered } = this.state;

    if (isOpenLeft) {
      return hovered?.description || chosenLeft.description;
    }

    if (isOpenRight) {
      return hovered?.description || chosenRight.description;
    }
  }

  spellCooldown() {
    const { isOpenLeft, chosenLeft, isOpenRight, chosenRight } = this.props;
    const { hovered } = this.state;

    if (isOpenLeft) {
      return hovered?.cooldownBurn || chosenLeft.cooldownBurn;
    }

    if (isOpenRight) {
      return hovered.cooldownBurn || chosenRight.cooldownBurn;
    }
  }

  componentDidMount() {
    this.fetchSpells().then(() => this.renderSpells());
  }

  render() {
    const { isOpen } = this.props;

    const { spells } = this.state;

    return (
      <div className="choose-summoners__popup" style={{ display: !isOpen && 'none' }}>
        <span className="choose-summoners__popup--name">{this.spellName()}</span>
        <span className="choose-summoners__popup--description">{this.spellDescription()}</span>
        <span className="choose-summoners__popup--base-cooldown">
          {`Base cooldown: ${(this.spellName() === 'Teleport' && '420-240') || this.spellCooldown()}`}
        </span>
        <span className="choose-summoners__popup--delimiter" />
        <div className="choose-summoners__popup--spells-container">{spells}</div>
      </div>
    );
  }
}
export default SpellsPopup;
