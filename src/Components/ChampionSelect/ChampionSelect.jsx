import './ChampionSelect.css';

import React from 'react';
import _ from 'lodash';

import FriendlyTeam from '../FriendlyTeam/FriendlyTeam';
import EnemyTeam from '../EnemyTeam/EnemyTeam';
import ChampionPicker from '../ChampionPicker/ChampionPicker';
import CrashedGame from '../CrashedGame/CrashedGame';
import StartedGame from '../StartedGame/StartedGame';

class ChampionSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      banningPhase: true,
      isCrashed: false,
      isStarted: false,

      chosen: {},
      locked: [],
      bannedChamps: [],

      turn: 1,
      time: 60,
      intervalId: undefined,
    };

    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  setChosen(chosen) {
    this.setState({chosen});
  }

  setLocked() {
    const {chosen, locked, turn, banningPhase, bannedChamps} = this.state;

    if (!_.isEmpty(chosen)) {
      if (banningPhase) {
        return this.setState({
          bannedChamps: [...bannedChamps, chosen],
          chosen: {},
          time: turn >= 10 ? 10 : 60,
          turn: turn + 1,
        });
      }

      return this.setState({
        locked: [...locked, chosen],
        chosen: {},
        time: turn >= 10 ? 10 : 60,
        turn: turn + 1,
      });
    }
  }

  setBanned() {
    const {banningPhase} = this.state;

    this.setState({
      banningPhase: !banningPhase,
      turn: 0,
      time: 60,
    });

    this.componentDidMount();
  }

  countDown() {
    const {
      chosen,
      time,
      turn,
      isCrashed,
      isStarted,
      intervalId,
      banningPhase,
    } = this.state;

    if (time <= 0 && turn >= 10) {
      clearInterval(intervalId);

      if (banningPhase) {
        return this.setBanned();
      }

      return this.setState({isStarted: !isStarted});
    }

    if (time <= 0 && _.isEmpty(chosen)) {
      clearInterval(intervalId);

      return this.setState({isCrashed: !isCrashed});
    }

    this.setState({time: time - 1});
  }

  componentDidMount() {
    const intervalId = setInterval(this.countDown, 1000);
    this.setState({intervalId});
  }

  render() {
    const {
      banningPhase,
      bannedChamps,
      chosen,
      locked,
      turn,
      time,
      isCrashed,
      isStarted,
    } = this.state;

    if (isCrashed) {
      return <CrashedGame />;
    }

    if (isStarted) {
      return <StartedGame />;
    }

    return (
      <div className={`champion-select ${turn === 11 ? 'locked-app' : ''}`}>
        <FriendlyTeam
          locked={locked}
          chosen={chosen}
          turn={turn}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
        />
        <ChampionPicker
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          locked={locked}
          chosen={chosen}
          turn={turn}
          time={time}
          setChosen={this.setChosen}
          setLocked={this.setLocked}
        />
        <EnemyTeam
          locked={locked}
          chosen={chosen}
          turn={turn}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
        />
      </div>
    );
  }
}

export default ChampionSelect;
