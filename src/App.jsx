import React from 'react';

import FriendlyTeam from './Components/FriendlyTeam/FriendlyTeam';
import EnemyTeam from './Components/EnemyTeam/EnemyTeam';
import ChampionPicker from './Components/ChampionPicker/ChampionPicker';
import CrashedGame from './Components/CrashedGame/CrashedGame';
import StartedGame from './Components/StartedGame/StartedGame';

import './App.css';

var _ = require('lodash');

class App extends React.Component {
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

  setChosen({ target }) {
    !!target && !_.isEmpty(target) && this.setState({ chosen: target });
  }

  setLocked() {
    const { chosen, locked, turn } = this.state;
    !_.isEmpty(chosen) &&
      this.setState({
        locked: [...locked, chosen],
        chosen: {},
        time: this.state.turn >= 10 ? 10 : 60,
        turn: turn + 1,
      });
  }

  countDown() {
    const { chosen, time, turn, isCrashed, isStarted, intervalId } = this.state;
    if (time <= 0 && turn >= 10) {
      clearInterval(intervalId);
      return this.setState({ isStarted: !isStarted });
    }
    if (time <= 0 && _.isEmpty(chosen)) {
      clearInterval(intervalId);
      return this.setState({ isCrashed: !isCrashed });
    }
    this.setState({ time: time - 1 });
  }

  componentDidMount() {
    const intervalId = setInterval(this.countDown, 1000);
    this.setState({ intervalId });
  }

  render() {
    const { chosen, locked, turn, time, isCrashed, isStarted } = this.state;
    return !!isCrashed ? (
      <CrashedGame />
    ) : !!isStarted ? (
      <StartedGame />
    ) : (
      <div
        className="champion-select"
        style={{ pointerEvents: turn === 11 && 'none' }}
      >
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

export default App;
