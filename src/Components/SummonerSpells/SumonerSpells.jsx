import './SummonerSpells.css';

import React from 'react';

class SummonerSpells extends React.Component {
  render() {
    return (
      <div className="champion-picker__bottom-section--summoner-spells summoner-spells">
        <div className="summoner-spells--edit-runes" />
        <select className="summoner-spells--choose-runes"></select>
        <div className="summoner-spells--choose-summoners choose-summoners">
          <div className="choose-summoners__summoner-spell--left" />
          <div className="choose-summoners__summoner-spell--right" />
        </div>
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
