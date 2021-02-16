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
    };
    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
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
      this.setState({
        locked: [...this.state.locked, this.state.chosen],
      });
      this.setState({ chosen: {} });
    }
  }

  setTurn() {
    this.setState({ turn: this.state.turn + 1 });
  }

  render() {
    const { chosen, locked, turn } = this.state;
    return (
      <div
        className="champion-select"
        style={{ pointerEvents: this.state.turn === 10 && 'none' }}
      >
        <FriendlyTeam locked={locked} chosen={chosen} turn={turn} />
        <ChampionPicker
          locked={locked}
          chosen={chosen}
          turn={turn}
          setChosen={this.setChosen}
          setLocked={this.setLocked}
          setTurn={this.setTurn}
        />
        <EnemyTeam locked={locked} chosen={chosen} turn={turn} />
      </div>
    );
  }
}

export default App;
