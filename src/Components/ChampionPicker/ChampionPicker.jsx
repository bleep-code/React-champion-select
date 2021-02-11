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
    this.state = { time: 60, intervalId: undefined };
    this.countDown = this.countDown.bind(this);
  }

  countDown() {
    this.setState({ time: this.state.time - 1 });
  }

  componentDidUpdate() {
    if (this.state.time === 0) {
      this.setState({ time: 60 });
      this.props.setLocked();
    }
  }

  render() {
    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section section">
          <Announcement turn={this.props.turn} />
          <Timer time={this.state.time} countDown={this.countDown} />
          <Search />
        </div>
        <div className="champion-picker__mid-section section">
          <Picker
            setChosen={this.props.setChosen}
            chosen={this.props.chosen}
            locked={this.props.locked}
          />
          <LockButton
            setLocked={this.props.setLocked}
            setTurn={this.props.setTurn}
            chosen={this.props.chosen}
          />
        </div>
        <div className="champion-picker__bottom-section section">
          <SummonerSpells />
        </div>
      </div>
    );
  }
}

export default ChampionPicker;
