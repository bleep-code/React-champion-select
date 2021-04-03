import './LandingPage.css';

import React from 'react';

import Configurator from '../Configurator/Configurator';
import ChampionSelect from '../ChampionSelect/ChampionSelect';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classicMode: false,
      shouldStart: false,

      isConfiguratorOpened: false,

      chooseAllPlayers: false,

      customizePlayersCount: false,
      playersCount: 10,

      banningPhase: true,
      bansCount: 10,

      customizeMove: false,
      moveTime: 60,
    };

    this.toggleConfigurator = this.toggleConfigurator.bind(this);
    this.toggleBanningPhase = this.toggleBanningPhase.bind(this);
    this.toggleChooseAllPlayers = this.toggleChooseAllPlayers.bind(this);
    this.toggleCustomizeMove = this.toggleCustomizeMove.bind(this);
    this.toggleCustomizePlayersCount = this.toggleCustomizePlayersCount.bind(this);
    this.toggleShouldStart = this.toggleShouldStart.bind(this);
    this.setBansCount = this.setBansCount.bind(this);
    this.setMoveTime = this.setMoveTime.bind(this);
    this.setPlayersCount = this.setPlayersCount.bind(this);
  }

  renderClassic() {
    this.setState({ classicMode: !this.state.classicMode });
  }

  toggleConfigurator() {
    this.setState({ isConfiguratorOpened: !this.state.isConfiguratorOpened });
  }

  toggleShouldStart() {
    this.setState({ shouldStart: !this.state.shouldStart });
  }

  toggleChooseAllPlayers() {
    this.setState({ chooseAllPlayers: !this.state.chooseAllPlayers });
  }

  toggleBanningPhase() {
    this.setState({ banningPhase: !this.state.banningPhase });
  }

  toggleCustomizeMove() {
    this.setState({ customizeMove: !this.state.customizeMove });
  }

  toggleCustomizePlayersCount() {
    this.setState({ customizePlayersCount: !this.state.customizePlayersCount });
  }

  setBansCount(e) {
    this.setState({ bansCount: 2 * parseInt(e.target.value) });
  }

  setMoveTime(e) {
    this.setState({ moveTime: parseInt(e.target.value) });
  }

  setPlayersCount(e) {
    this.setState({ playersCount: 2 * parseInt(e.target.value) });
  }

  render() {
    const {
      classicMode,
      isConfiguratorOpened,
      shouldStart,
      chooseAllPlayers,
      banningPhase,
      bansCount,
      customizeMove,
      moveTime,
      customizePlayersCount,
      playersCount,
    } = this.state;

    if (classicMode) {
      return (
        <ChampionSelect
          banningPhase={true}
          bansCount={10}
          playersCount={10}
          moveTime={60}
          chooseAllPlayers={true}
        />
      );
    }

    return (
      <div className="start-view">
        {isConfiguratorOpened && (
          <Configurator
            toggleConfigurator={this.toggleConfigurator}
            shouldStart={shouldStart}
            toggleShouldStart={this.toggleShouldStart}
            chooseAllPlayers={chooseAllPlayers}
            toggleChooseAllPlayers={this.toggleChooseAllPlayers}
            banningPhase={banningPhase}
            toggleBanningPhase={this.toggleBanningPhase}
            bansCount={bansCount}
            setBansCount={this.setBansCount}
            customizeMove={customizeMove}
            toggleCustomizeMove={this.toggleCustomizeMove}
            moveTime={moveTime}
            setMoveTime={this.setMoveTime}
            customizePlayersCount={customizePlayersCount}
            toggleCustomizePlayersCount={this.toggleCustomizePlayersCount}
            playersCount={playersCount}
            setPlayersCount={this.setPlayersCount}
          />
        )}
        {!isConfiguratorOpened && (
          <>
            <div className="start-view__classic-mode" onClick={() => this.renderClassic()}>
              <i className="far fa-compass" />
              <span className="start-view__classic-mode--name">Explore</span>
              <span className="start-view__classic-mode--desc">
                Use the basic configuration, play around with league's champion select, by banning and
                choosing for every single player!
              </span>
            </div>
            <div className="start-view__custom-mode" onClick={this.toggleConfigurator}>
              <i className="far fa-folder" />
              <span className="start-view__custom-mode--name">Customize</span>
              <span className="start-view__custom-mode--desc">
                Advance your experience with league's client by customized number of players, bans, set a time
                for a move or turn off a banning phase!
              </span>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default LandingPage;
