import './ChampionSelect.css';

import React from 'react';
import _ from 'lodash';

import FriendlyTeam from '../FriendlyTeam/FriendlyTeam';
import EnemyTeam from '../EnemyTeam/EnemyTeam';
import ChampionPicker from '../ChampionPicker/ChampionPicker';
import CrashedGame from '../CrashedGame/CrashedGame';
import StartedGame from '../StartedGame/StartedGame';
//# TODO - obsłużyc 1 zamiast wszystkich
//# TODO CAP picking status to bansCount

class ChampionSelect extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chooseAllPlayers: this.props.chooseAllPlayers,
      banningPhase: this.props.banningPhase,

      isCrashed: false,
      isStarted: false,

      chosen: {},
      locked: [],
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
      locked,
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
        locked: [...locked, chosen],
        chosen: {},
        time: turn >= playersCount ? 10 : moveTime,
        turn: turn + 1,
      });
    }
  }

  setBanned() {
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
        return this.setBanned();
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
      <div className={`champion-select ${this.lockApp()}`}>
        <FriendlyTeam
          playersCount={playersCount}
          bansCount={bansCount}
          locked={locked}
          chosen={chosen}
          turn={turn}
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
        />
        <ChampionPicker
          banningPhase={banningPhase}
          bannedChamps={bannedChamps}
          bansCount={bansCount}
          locked={locked}
          chosen={chosen}
          turn={turn}
          time={time}
          setChosen={this.setChosen}
          setLocked={this.setLocked}
        />
        <EnemyTeam
          playersCount={playersCount}
          bansCount={bansCount}
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
