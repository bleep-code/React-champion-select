import './Spell.css';

import React from 'react';

import { urls } from '../../Fixtures/fixtures.json';

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
      setHovered,
    } = this.props;

    return (
      <img
        src={`${urls.spellImg + image.full}`}
        alt={name}
        onClick={async () => {
          if (isOpenLeft) {
            await setChosen(
              { name, description, cooldownBurn, image },
              'spells-left'
            );
          }

          if (isOpenRight) {
            await setChosen(
              { name, description, cooldownBurn, image },
              'spells-right'
            );
          }
        }}
        onMouseEnter={() => setHovered(name, description, cooldownBurn)}
      />
    );
  }
}
export default Spell;
