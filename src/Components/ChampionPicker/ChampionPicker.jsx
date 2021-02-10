import React from 'react';

import Announcement from '../Announcement/Announcement';
import Timer from '../Timer/Timer';
import Search from '../Search/Search';
import Picker from '../Picker/Picker';
import LockButton from '../LockButton/LockButton';
import SummonerSpells from '../SummonerSpells/SumonerSpells';

import './ChampionPicker.css';
class ChampionPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosen: undefined, locked: [] };
    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
  }

  setChosen(e) {
    this.setState({ chosen: e.target });
  }

  setLocked() {
    // this.setState({ locked: undefined });
    console.log(this.state.locked);
  }

  render() {
    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section section">
          <Announcement />
          <Timer />
          <Search />
        </div>
        <div className="champion-picker__mid-section section">
          <Picker setChosen={this.setChosen} chosen={this.state.chosen} />
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
