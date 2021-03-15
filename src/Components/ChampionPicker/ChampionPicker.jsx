import './ChampionPicker.css';

import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import Announcement from '../Announcement/Announcement';
import Timer from '../Timer/Timer';
import Search from '../Search/Search';
import Picker from '../Picker/Picker';
import LockButton from '../LockButton/LockButton';
import BottomSection from '../BottomSection/BottomSection';
import Champion from '../Champion/Champion';

class ChampionPicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {champions: [], fetchedChampions: []};

    this.onUpdate = this.onUpdate.bind(this);
  }

  async fetchChampions() {
    let {data: fetchedChampions} = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json'
    );
    fetchedChampions = _.flatMap(fetchedChampions.data);
    this.setState({fetchedChampions});
  }

  renderChampions() {
    const {chosen, locked, setChosen} = this.props;

    const champions = this.state.fetchedChampions.map(
      ({id, name, title, image, tags, blurb}) => (
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

    this.setState({champions});
  }

  componentDidMount() {
    this.fetchChampions().then(() => this.renderChampions());
  }

  onUpdate() {
    this.renderChampions();
  }

  render() {
    const {turn, time, chosen, setLocked} = this.props;
    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section">
          <Announcement turn={turn} />
          <Timer time={time} />
          <Search />
        </div>
        <div className="champion-picker__mid-section">
          <Picker champions={this.state.champions} />
          <LockButton
            setLocked={setLocked}
            chosen={chosen}
            onUpdate={this.onUpdate}
          />
        </div>
        <div className="champion-picker__bottom-section">
          <BottomSection />
        </div>
      </div>
    );
  }
}

export default ChampionPicker;
