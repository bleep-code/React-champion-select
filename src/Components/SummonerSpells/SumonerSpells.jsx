import './SummonerSpells.css';

import React from 'react';

class SummonerSpells extends React.Component {
  render() {
    return (
      <div className="champion-picker__bottom-section--summoner-spells summoner-spells">
        <div className="summoner-spells--edit-runes"></div>
        <select className="summoner-spells--choose-runes"></select>
        <div className="summoner-spells--choose-summoners">
          <div className="choose-summoners__summoner-spell--left"></div>
          <div className="choose-summoners__summoner-spell--right"></div>
        </div>
        <span className="summoner-spells--delimiter"></span>
        <div className="summoner-spells--choose-minion"></div>
        <div className="summoner-spells--choose-emote"></div>
      </div>
    );
  }
}

export default SummonerSpells;
