import './ChampionPicker.css';

import React from 'react';
import axios from 'axios';
import _ from 'lodash';

import Announcement from '../Announcement/Announcement';
import Timer from '../Timer/Timer';
import Search from '../Search/Search';
import ChampionPool from '../ChampionPool/ChampionPool';
import LockButton from '../LockButton/LockButton';
import BottomSection from '../BottomSection/BottomSection';
import Champion from '../Champion/Champion';

import { urls } from '../../Fixtures/fixtures.json';

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
    this.automaticallyChooseChampions = this.automaticallyChooseChampions.bind(
      this
    );
  }

  async fetchChampions() {
    let { data: fetchedChampions } = await axios.get(urls.champions);

    fetchedChampions = _.flatMap(fetchedChampions.data);
    this.setState({ fetchedChampions });
  }

  renderChampions(filterCriteria) {
    const { setChosen, banningPhase } = this.props;
    const { searchPhrase } = this.state;

    let champions = this.state.fetchedChampions
      .map(({ id, name, image }) => {
        const { chosen, lockedChamps, bannedChamps } = this.props;

        const status = {
          chosen: chosen.name === name,
          locked: lockedChamps?.find((x) => x.name === name) ? true : false,
          banned: bannedChamps?.find((x) => x.name === name) ? true : false,
        };

        return (
          <Champion
            key={id}
            name={name}
            image={image.full}
            status={status}
            setChosen={setChosen}
            banningPhase={banningPhase}
            searchPhrase={searchPhrase}
            onUpdate={this.onUpdate}
          />
        );
      })
      .filter((x) => {
        if (filterCriteria) {
          x = x.props.name.toLowerCase().includes(filterCriteria.toLowerCase());

          return x;
        }

        return x;
      });

    this.setState({ champions });
    return champions;
  }

  searchFor(searchPhrase) {
    this.setState({ searchPhrase });
    this.renderChampions(searchPhrase);
  }

  async automaticallyChooseChampion() {
    const { searchPhrase } = this.state;
    const { setChosen } = this.props;

    const filterChampions = () => {
      let champions = this.renderChampions()
        .map((x) => {
          if (x.props.status.locked || x.props.status.banned) {
            return undefined;
          }

          return x;
        })
        .filter((x) => x);

      return champions;
    };

    const chooseRandomChampion = () => {
      const champions = filterChampions();
      const rng = Math.floor(Math.random() * champions.length);

      return {
        name: champions[rng].props.name,
        image: champions[rng].props.image,
      };
    };

    await setChosen(chooseRandomChampion());
    await this.onUpdate(searchPhrase);
  }

  async automaticallyChooseChampions() {
    const {
      playersCount,
      bansCount,
      banningPhase,
      bannedChamps,
      lockedChamps,
      setLocked,
      chooseAllPlayers,
    } = this.props;

    if (chooseAllPlayers) {
      return;
    }

    if (banningPhase) {
      if (bannedChamps.length === 1) {
        // i is equal to 1 because one champion is already picked
        for (let i = 1; i < bansCount; i++) {
          setTimeout(async () => {
            await this.automaticallyChooseChampion();
            await setLocked();
            await this.onUpdate();
          }, 500 * i);
        }
      }
      return;
    }

    if (lockedChamps.length === 1) {
      for (let i = 1; i < playersCount; i++) {
        setTimeout(async () => {
          await this.automaticallyChooseChampion();
          await setLocked();
          await this.onUpdate();
        }, 500 * i);
      }
    }
  }

  onUpdate(filterCriteria) {
    this.renderChampions(filterCriteria);
  }

  async componentDidMount() {
    await this.fetchChampions();
    this.renderChampions();
  }

  render() {
    const {
      turn,
      time,
      chosen,
      setLocked,
      banningPhase,
      bansCount,
      playersCount,
    } = this.props;

    const { champions, searchPhrase } = this.state;

    return (
      <div className="champion-picker">
        <div className="champion-picker__top-section">
          <Announcement
            turn={turn}
            banningPhase={banningPhase}
            bansCount={bansCount}
            playersCount={playersCount}
          />
          <Timer time={time} />
          <Search
            renderChampions={this.renderChampions}
            onChange={this.searchFor}
          />
        </div>
        <div className="champion-picker__mid-section">
          <ChampionPool champions={champions} />
          <LockButton
            chosen={chosen}
            setLocked={setLocked}
            banningPhase={banningPhase}
            searchPhrase={searchPhrase}
            onUpdate={this.onUpdate}
            automaticallyChooseChampions={this.automaticallyChooseChampions}
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
