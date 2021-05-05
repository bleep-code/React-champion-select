import './Configurator.css';

import React from 'react';

import ChampionSelect from '../ChampionSelect/ChampionSelect';
import FormField from '../FormField/FormField';

import fixtures from './fixtures.json';

class Configurator extends React.Component {
  render() {
    const {
      toggleConfigurator,
      shouldStart,
      toggleShouldStart,
      chooseAllPlayers,
      toggleChooseAllPlayers,
      banningPhase,
      toggleBanningPhase,
      bansCount,
      setBansCount,
      customizeMove,
      toggleCustomizeMove,
      moveTime,
      setMoveTime,
      customizePlayersCount,
      toggleCustomizePlayersCount,
      playersCount,
      setPlayersCount,
    } = this.props;

    if (shouldStart) {
      return (
        <ChampionSelect
          chooseAllPlayers={chooseAllPlayers}
          playersCount={playersCount}
          banningPhase={banningPhase}
          bansCount={banningPhase ? bansCount : 0}
          moveTime={moveTime}
        />
      );
    }

    return (
      <div className="configurator">
        <i
          class="fas fa-times configurator__close-icon"
          onClick={toggleConfigurator}
        />
        <div className="configurator__welcome-message">
          <span className="configurator__welcome-message--hello">
            {fixtures.hello}
          </span>
          <span className="configurator__welcome-message--desc">
            {fixtures.description}
          </span>
        </div>
        <FormField
          question={fixtures.banningPhase.q}
          leftLabel={fixtures.banningPhase.labels[0]}
          rightLabel={fixtures.banningPhase.labels[1]}
          isToggled={banningPhase}
          onChange={toggleBanningPhase}
          child={
            banningPhase && (
              <FormField
                question={fixtures.banningPhase.followUp}
                type="input"
                onChange={setBansCount}
                placeholder={60}
              />
            )
          }
        />
        <FormField
          question={fixtures.playersCount.q}
          leftLabel={fixtures.playersCount.labels[0]}
          rightLabel={fixtures.playersCount.labels[1]}
          isToggled={customizePlayersCount}
          onChange={toggleCustomizePlayersCount}
          child={
            customizePlayersCount && (
              <FormField
                question={fixtures.playersCount.followUp}
                type="input"
                onChange={setPlayersCount}
                placeholder={'0-5'}
              />
            )
          }
        />
        <FormField
          question={fixtures.move.q}
          leftLabel={fixtures.move.labels[0]}
          rightLabel={fixtures.move.labels[1]}
          isToggled={customizeMove}
          onChange={toggleCustomizeMove}
          child={
            customizeMove && (
              <FormField
                question={fixtures.move.followUp}
                type="input"
                onChange={setMoveTime}
                placeholder={'0-5'}
              />
            )
          }
        />
        <FormField
          question={fixtures.allPlayers.q}
          leftLabel={fixtures.allPlayers.labels[1]}
          rightLabel={fixtures.allPlayers.labels[0]}
          isToggled={chooseAllPlayers}
          onChange={toggleChooseAllPlayers}
        />
        <div id="start-button" onClick={toggleShouldStart}>
          <i className="fas fa-play" />
        </div>
      </div>
    );
  }
}

export default Configurator;
