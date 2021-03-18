import './ChoosingPhase.css';

import React from 'react';
import _ from 'lodash';

import FriendlyTeam from '../FriendlyTeam/FriendlyTeam';
import EnemyTeam from '../EnemyTeam/EnemyTeam';
import ChampionPicker from '../ChampionPicker/ChampionPicker';
import CrashedGame from '../CrashedGame/CrashedGame';
import StartedGame from '../StartedGame/StartedGame';

class ChoosingPhase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chosen: {},
      locked: [],
      turn: 1,
      time: 60,
      intervalId: undefined,
      isCrashed: false,
      isStarted: false,
    };

    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  setChosen(chosen) {
    this.setState({chosen});
  }

  setLocked() {
    const {chosen, locked, turn} = this.state;
    if (!_.isEmpty(chosen)) {
      this.setState({
        locked: [...locked, chosen],
        chosen: {},
        time: turn >= 10 ? 10 : 60,
        turn: turn + 1,
      });
    }
  }

  countDown() {
    const {chosen, time, turn, isCrashed, isStarted, intervalId} = this.state;
    if (time <= 0 && turn >= 10) {
      clearInterval(intervalId);
      return this.setState({isStarted: !isStarted});
    }
    if (time <= 0 && _.isEmpty(chosen)) {
      clearInterval(intervalId);
      return this.setState({isCrashed: !isCrashed});
    }
    this.setState({time: time - 1});
  }

  // componentDidMount() {
  //   const intervalId = setInterval(this.countDown, 1000);
  //   this.setState({intervalId});
  // }

  render() {
    const {chosen, locked, turn, time, isCrashed, isStarted} = this.state;
    if (isCrashed) {
      return <CrashedGame />;
    }
    if (isStarted) {
      return <StartedGame />;
    }
    return (
      <div className={`champion-select ${turn === 11 ? 'locked-app' : ''}`}>
        <FriendlyTeam locked={locked} chosen={chosen} turn={turn} />
        <ChampionPicker
          locked={locked}
          chosen={chosen}
          turn={turn}
          time={time}
          setChosen={this.setChosen}
          setLocked={this.setLocked}
        />
        <EnemyTeam locked={locked} chosen={chosen} turn={turn} />
      </div>
    );
  }
}

export default ChoosingPhase;
