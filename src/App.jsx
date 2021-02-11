import React from 'react';
import FriendlyTeam from './Components/FriendlyTeam/FriendlyTeam';
import EnemyTeam from './Components/EnemyTeam/EnemyTeam';
import ChampionPicker from './Components/ChampionPicker/ChampionPicker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: undefined,
      locked: [],
      turn: 1,
    };
    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
    this.setTurn = this.setTurn.bind(this);
  }

  setChosen(e) {
    this.setState({ chosen: e.target });
  }

  setLocked() {
    this.setState({
      locked: [...this.state.locked, this.state.chosen.innerText],
    });
    this.setState({ chosen: {} });
  }

  setTurn() {
    this.setState({ turn: this.state.turn + 1 });
  }

  render() {
    return (
      <div className="champion-select">
        <FriendlyTeam locked={this.state.locked} chosen={this.state.chosen} />
        <ChampionPicker
          locked={this.state.locked}
          chosen={this.state.chosen}
          setChosen={this.setChosen}
          setLocked={this.setLocked}
          setTurn={this.setTurn}
        />
        <EnemyTeam locked={this.state.locked} chosen={this.state.chosen} />
      </div>
    );
  }
}

export default App;
