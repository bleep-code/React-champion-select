import React from 'react';
import FriendlyTeam from './Components/FriendlyTeam/FriendlyTeam';
import EnemyTeam from './Components/EnemyTeam/EnemyTeam';
import ChampionPicker from './Components/ChampionPicker/ChampionPicker';
import CrashedGame from './Components/CrashedGame/CrashedGame';
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
        time: 60,
        turn: turn + 1,
      });
  }

  countDown() {
    if (this.state.time === 0 && _.isEmpty(this.state.chosen)) {
      this.setState({ isCrashed: !this.state.isCrashed });
    }
    this.setState({ time: this.state.time - 1 });
  }

  componentDidMount() {
    const intervalId = setInterval(this.countDown, 1000);
    this.setState({ intervalId });
  }

  componentDidUpdate() {
    this.state.time < 0 && clearInterval(this.state.intervalId);
  }

  render() {
    const { chosen, locked, turn, time, isCrashed } = this.state;
    return !!isCrashed ? (
      <CrashedGame />
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
          countDown={this.countDown}
        />
        <EnemyTeam locked={locked} chosen={chosen} turn={turn} />
      </div>
    );
  }
}

export default App;
