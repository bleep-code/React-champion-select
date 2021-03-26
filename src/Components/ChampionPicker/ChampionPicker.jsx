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

    this.state = {
      champions: [],
      searchPhrase: '',
      fetchedChampions: [],
    };

    this.onUpdate = this.onUpdate.bind(this);
    this.searchFor = this.searchFor.bind(this);
    this.renderChampions = this.renderChampions.bind(this);
  }

  async fetchChampions() {
    let {data: fetchedChampions} = await axios.get(
      'http://ddragon.leagueoflegends.com/cdn/11.3.1/data/en_US/champion.json'
    );
    fetchedChampions = _.flatMap(fetchedChampions.data);
    this.setState({fetchedChampions});
  }

  renderChampions(filterCriteria) {
    const {chosen, locked, setChosen, bannedChamps, banningPhase} = this.props;

    let champions = this.state.fetchedChampions
      .map(({id, name, title, image, tags, blurb}) => (
        <Champion
          id={id}
          name={name}
          title={title}
          image={image.full}
          tags={tags}
          blurb={blurb}
          key={id}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          chosen={chosen}
          locked={locked}
          setChosen={setChosen}
          searchPhrase={this.state.searchPhrase}
          onUpdate={this.onUpdate}
        />
      ))
      .filter((x) => {
        if (filterCriteria) {
          x = x.props.name.toLowerCase().includes(filterCriteria.toLowerCase());

          return x;
        }

        return x;
      });

    this.setState({champions});
  }

  searchFor(searchPhrase) {
    this.setState({searchPhrase});
    this.renderChampions(searchPhrase);
  }

  onUpdate(filterCriteria) {
    this.renderChampions(filterCriteria);
  }

  componentDidMount() {
    this.fetchChampions().then(() => this.renderChampions());
  }

  render() {
    const {turn, time, chosen, setLocked, banningPhase} = this.props;

    const {champions} = this.state;

    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section">
          <Announcement turn={turn} banningPhase={banningPhase} />
          <Timer time={time} />
          <Search
            renderChampions={this.renderChampions}
            onChange={this.searchFor}
          />
        </div>
        <div className="champion-picker__mid-section">
          <Picker champions={champions} />
          <LockButton
            setLocked={setLocked}
            chosen={chosen}
            banningPhase={banningPhase}
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
