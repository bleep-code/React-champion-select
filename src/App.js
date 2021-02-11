import React from 'react';
import FriendlyTeam from './Components/FriendlyTeam/FriendlyTeam';
import EnemyTeam from './Components/EnemyTeam/EnemyTeam';
import ChampionPicker from './Components/ChampionPicker/ChampionPicker';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosen: undefined, locked: [] };
    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
  }

  setChosen(e) {
    this.setState({ chosen: e.target });
  }

  setLocked() {
    this.setState({
      locked: [...this.state.locked, this.state.chosen.innerText],
    });
    console.log(this.state.locked);
  }
  render() {
    return (
      <div className="champion-select">
        <FriendlyTeam />
        <ChampionPicker
          setChosen={this.setChosen}
          setLocked={this.setLocked}
          locked={this.state.locked}
          chosen={this.state.chosen}
        />
        <EnemyTeam />
      </div>
    );
  }
}

export default App;
