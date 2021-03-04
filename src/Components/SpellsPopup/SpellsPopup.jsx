import './SpellsPopup.css';

import React from 'react';

class SpellsPopup extends React.Component {
  spellName() {
    const {isOpenLeft, chosenLeft, isOpenRight, chosenRight} = this.props;

    if (isOpenLeft) {
      return chosenLeft.name;
    }

    if (isOpenRight) {
      return chosenRight.name;
    }
  }

  spellDescription() {
    const {isOpenLeft, chosenLeft, isOpenRight, chosenRight} = this.props;

    if (isOpenLeft) {
      return chosenLeft.description;
    }

    if (isOpenRight) {
      return chosenRight.description;
    }
  }

  spellCooldown() {
    const {isOpenLeft, chosenLeft, isOpenRight, chosenRight} = this.props;

    if (isOpenLeft) {
      return chosenLeft.cooldownBurn;
    }

    if (isOpenRight) {
      return chosenRight.cooldownBurn;
    }
  }

  render() {
    const {isOpen, spells} = this.props;

    return (
      <div
        className="choose-summoners__popup"
        style={{display: !isOpen && 'none'}}
      >
        <span className="choose-summoners__popup--name">
          {this.spellName()}
        </span>
        <span className="choose-summoners__popup--description">
          {this.spellDescription()}
        </span>
        <span className="choose-summoners__popup--base-cooldown">
          Base cooldown:
          {(this.spellName() === 'Teleport' && '420-240') ||
            this.spellCooldown()}
        </span>
        <span className="choose-summoners__popup--delimiter" />
        <div className="choose-summoners__popup--spells-container">
          {spells}
        </div>
      </div>
    );
  }
}
export default SpellsPopup;
