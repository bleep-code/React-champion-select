import React from 'react';
import FriendlyTeam from './Components/FriendlyTeam/FriendlyTeam';
import EnemyTeam from './Components/EnemyTeam/EnemyTeam';
import ChampionPicker from './Components/ChampionPicker/ChampionPicker';
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
    };
    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
    this.countDown = this.countDown.bind(this);
    this.setTurn = this.setTurn.bind(this);
  }

  setChosen(e) {
    !!e.target && this.setState({ chosen: e.target });
  }

  setLocked() {
    if (_.isEmpty(this.state.chosen)) {
      console.log('what are you doing bro');
      // render a <broken app> here
    } else {
      console.log(this.state.chosen);
      this.setState({
        locked: [...this.state.locked, this.state.chosen],
        chosen: {},
        time: 60,
      });
    }
  }

  setTurn() {
    this.setState({ turn: this.state.turn + 1 });
  }

  countDown() {
    this.setState({ time: this.state.time - 1 });
  }

  componentDidUpdate() {
    if (this.state.time === 0) {
      this.setLocked();
    }
  }

  render() {
    const { chosen, locked, turn, time } = this.state;
    return (
      <div
        className="champion-select"
        style={{ pointerEvents: this.state.turn === 11 && 'none' }}
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
          setTurn={this.setTurn}
        />
        <EnemyTeam locked={locked} chosen={chosen} turn={turn} />
      </div>
    );
  }
}

export default App;
