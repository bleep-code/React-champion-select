import React from 'react';

import Announcement from '../Announcement/Announcement';
import Timer from '../Timer/Timer';
import Search from '../Search/Search';
import Picker from '../Picker/Picker';
import LockButton from '../LockButton/LockButton';
import SummonerSpells from '../SummonerSpells/SumonerSpells';

import './ChampionPicker.css';
class ChampionPicker extends React.Component {
  render() {
    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section section">
          <Announcement />
          <Timer />
          <Search />
        </div>
        <div className="champion-picker__mid-section section">
          <Picker />
          <LockButton />
        </div>
        <div className="champion-picker__bottom-section section">
          <SummonerSpells />
        </div>
      </div>
    );
  }
}

export default ChampionPicker;
