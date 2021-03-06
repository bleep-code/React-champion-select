import './ChampionSelect.scss';

import React from 'react';
import _ from 'lodash';

import FriendlyTeam from '../Teams/Team/FriendlyTeam';
import EnemyTeam from '../Teams/Team/EnemyTeam';
import CrashedGame from '../Screens/CrashedGame/CrashedGame';
import StartedGame from '../Screens/StartedGame/StartedGame';
import ChampionPicker from '../ChampionPicker/ChampionPicker';

class ChampionSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chooseAllPlayers: this.props.chooseAllPlayers,
      banningPhase: this.props.banningPhase,

      isCrashed: false,
      isStarted: false,

      chosen: {},
      lockedChamps: [],
      bannedChamps: [],
      playersCount: this.props.playersCount,
      bansCount: this.props.bansCount,

      turn: 1,
      time: this.props.moveTime,
      intervalId: undefined,
    };

    this.setChosen = this.setChosen.bind(this);
    this.setLocked = this.setLocked.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  setChosen(chosen) {
    this.setState({ chosen });
  }

  setLocked() {
    const {
      chosen,
      lockedChamps,
      turn,
      banningPhase,
      bannedChamps,
      bansCount,
      playersCount,
    } = this.state;

    const { moveTime } = this.props;

    if (!_.isEmpty(chosen)) {
      if (banningPhase) {
        return this.setState({
          bannedChamps: [...bannedChamps, chosen],
          chosen: {},
          time: turn >= bansCount ? 10 : moveTime,
          turn: turn + 1,
        });
      }

      return this.setState({
        lockedChamps: [...lockedChamps, chosen],
        chosen: {},
        time: turn >= playersCount ? 10 : moveTime,
        turn: turn + 1,
      });
    }
  }

  toggleBanningPhase() {
    const { banningPhase } = this.state;

    const { moveTime } = this.props;

    this.setState({
      banningPhase: !banningPhase,
      turn: 1,
      time: moveTime,
    });

    this.componentDidMount();
  }

  lockApp() {
    const { bansCount, playersCount, turn } = this.state;

    if (bansCount && turn >= bansCount + 1) {
      return 'locked-app';
    }

    if (turn >= playersCount + 1) {
      return 'locked-app';
    }

    return '';
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
      bansCount,
    } = this.state;

    if (time <= 0 && turn >= bansCount) {
      clearInterval(intervalId);

      if (banningPhase) {
        return this.toggleBanningPhase();
      }

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
    const {
      playersCount,
      bansCount,
      banningPhase,
      bannedChamps,
      chosen,
      lockedChamps,
      turn,
      time,
      isCrashed,
      isStarted,
      chooseAllPlayers,
    } = this.state;

    if (isCrashed) {
      return <CrashedGame />;
    }

    if (isStarted) {
      return <StartedGame />;
    }

    return (
      <div className={`champion-select ${this.lockApp()}`}>
        <FriendlyTeam
          playersCount={playersCount}
          bansCount={bansCount}
          lockedChamps={lockedChamps}
          chosen={chosen}
          turn={turn}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
        />
        <ChampionPicker
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          bansCount={bansCount}
          playersCount={playersCount}
          chooseAllPlayers={chooseAllPlayers}
          lockedChamps={lockedChamps}
          chosen={chosen}
          turn={turn}
          time={time}
          setChosen={this.setChosen}
          setLocked={this.setLocked}
        />
        <EnemyTeam
          playersCount={playersCount}
          bansCount={bansCount}
          lockedChamps={lockedChamps}
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
