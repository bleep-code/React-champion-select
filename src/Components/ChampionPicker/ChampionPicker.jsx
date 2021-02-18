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
    this.state = {};
  }

  render() {
    const {
      turn,
      time,
      chosen,
      locked,
      countDown,
      setChosen,
      setLocked,
    } = this.props;
    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section section">
          <Announcement turn={turn} />
          <Timer time={time} countDown={countDown} />
          <Search />
        </div>
        <div className="champion-picker__mid-section section">
          <Picker setChosen={setChosen} chosen={chosen} locked={locked} />
          <LockButton setLocked={setLocked} chosen={chosen} />
        </div>
        <div className="champion-picker__bottom-section section">
          <SummonerSpells />
        </div>
      </div>
    );
  }
}

export default ChampionPicker;
