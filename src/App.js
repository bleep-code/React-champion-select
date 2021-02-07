import FriendlyTeam from './Components/FriendlyTeam/FriendlyTeam';
import EnemyTeam from './Components/EnemyTeam/EnemyTeam';
import ChampionPicker from './Components/ChampionPicker/ChampionPicker';
import './App.css';

function App() {
  return (
    <div className="champion-select">
      <FriendlyTeam />
      <ChampionPicker />
      <EnemyTeam />
    </div>
  );
}

export default App;
