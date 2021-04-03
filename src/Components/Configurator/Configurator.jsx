import './Configurator.css';

import React from 'react';

import ChampionSelect from '../ChampionSelect/ChampionSelect';
import FormField from '../FormField/FormField';

import fixtures from './fixtures.json';

class Configurator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldStart: false,

      chooseAllPlayers: false,

      customizePlayersCount: false,
      playersCount: 10,

      banningPhase: true,
      bansCount: 10,

      customizeMove: false,
      moveTime: 60,
    };
  }

  render() {
    const {
      shouldStart,
      chooseAllPlayers,
      banningPhase,
      bansCount,
      customizeMove,
      moveTime,
      customizePlayersCount,
      playersCount,
    } = this.state;

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
          onClick={this.props.toggleConfigurator}
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
          onChange={() => this.setState({ banningPhase: !banningPhase })}
          child={
            banningPhase && (
              <FormField
                question={fixtures.banningPhase.followUp}
                type="input"
                onChange={(e) => {
                  this.setState({ bansCount: 2 * parseInt(e.target.value) });
                }}
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
          onChange={() =>
            this.setState({ customizePlayersCount: !customizePlayersCount })
          }
          child={
            customizePlayersCount && (
              <FormField
                question={fixtures.playersCount.followUp}
                type="input"
                onChange={(e) => {
                  this.setState({ playersCount: 2 * parseInt(e.target.value) });
                }}
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
          onChange={() => this.setState({ customizeMove: !customizeMove })}
          child={
            customizeMove && (
              <FormField
                question={fixtures.move.followUp}
                type="input"
                onChange={(e) => {
                  this.setState({ moveTime: parseInt(e.target.value) });
                }}
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
          onChange={() =>
            this.setState({ chooseAllPlayers: !chooseAllPlayers })
          }
        />
        <div
          id="start-button"
          onClick={() => this.setState({ shouldStart: !shouldStart })}
        >
          <i className="fas fa-play" />
        </div>
      </div>
    );
  }
}

export default Configurator;
