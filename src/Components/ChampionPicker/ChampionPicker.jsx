import React from 'react';
import axios from 'axios';
import Announcement from '../Announcement/Announcement';
import Timer from '../Timer/Timer';
import Search from '../Search/Search';
import Picker from '../Picker/Picker';
import LockButton from '../LockButton/LockButton';
import SummonerSpells from '../SummonerSpells/SumonerSpells';
import Champion from '../Champion/Champion';

import './ChampionPicker.css';

var _ = require('lodash');

class ChampionPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { champions: [], fetchedChampions: [] };
    this.onUpdate = this.onUpdate.bind(this);
  }

  fetchChampions() {
    // this should be reworked to save static data, so it won't request every update
    return axios
      .get(
        'http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json'
      )
      .then(({ data: { data } }) => _.flatMap(data))
      .then((fetchedChampions) => this.setState({ fetchedChampions }));
  }

  setChampions() {
    const { chosen, locked, setChosen } = this.props;

    const champions = this.state.fetchedChampions.map(
      ({ id, name, title, image, tags, blurb }) => (
        <Champion
          id={id}
          name={name}
          title={title}
          image={image.full}
          tags={tags}
          blurb={blurb}
          key={id}
          chosen={chosen}
          locked={locked}
          setChosen={setChosen}
          onUpdate={this.onUpdate}
        />
      )
    );

    this.setState({ champions });
  }

  componentDidMount() {
    this.fetchChampions().then((fetchedChampions) =>
      this.setChampions(fetchedChampions)
    );
  }

  onUpdate() {
    this.setChampions();
  }

  render() {
    const { turn, time, chosen, setLocked } = this.props;
    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section section">
          <Announcement turn={turn} />
          <Timer time={time} />
          <Search />
        </div>
        <div className="champion-picker__mid-section section">
          <Picker champions={this.state.champions} />
          <LockButton
            setLocked={setLocked}
            chosen={chosen}
            onUpdate={this.onUpdate}
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
