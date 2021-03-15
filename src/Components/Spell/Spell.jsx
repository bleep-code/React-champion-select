import './Spell.css';

import React from 'react';

import {urls} from '../../Fixtures/fixtures.json';

class Spell extends React.Component {
  render() {
    const {
      name,
      image,
      description,
      cooldownBurn,
      isOpenLeft,
      isOpenRight,
      setChosen,
      onUpdate,
    } = this.props;
    return (
      <img
        src={`${urls.spellImg + image.full}`}
        alt={name}
        onClick={() => {
          if (isOpenLeft) {
            setChosen({name, description, cooldownBurn, image}, 'spells-left');
          }
          if (isOpenRight) {
            setChosen({name, description, cooldownBurn, image}, 'spells-right');
          }
          setTimeout(onUpdate, 0);
        }}
      />
    );
  }
}
export default Spell;
