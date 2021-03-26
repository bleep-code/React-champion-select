import './Configurator.css';

import React from 'react';

import FormField from '../FormField/FormField';

import fixtures from './fixtures.json';

class Configurator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chooseAllPlayers: true,

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
      chooseAllPlayers,
      banningPhase,
      bansCount,
      customizeMove,
      moveTime,
      customizePlayersCount,
      playersCount,
    } = this.state;

    return (
      <div
        className="configurator-outer"
        onClick={() => console.log(bansCount)}
      >
        <div
          className="configurator"
          style={{color: 'white', fontSize: '24px'}}
        >
          <div className="configurator__welcome-message">
            <span className="configurator__welcome-message--hello">
              {fixtures.hello}
            </span>
            <span className="configurator__welcome-message--desc">
              {fixtures.description}
            </span>
          </div>
          <FormField
            question={fixtures.allPlayers.q}
            leftLabel={fixtures.allPlayers.labels[0]}
            rightLabel={fixtures.allPlayers.labels[1]}
            isToggled={chooseAllPlayers}
            onChange={() =>
              this.setState({chooseAllPlayers: !chooseAllPlayers})
            }
          />
          <FormField
            question={fixtures.banningPhase.q}
            leftLabel={fixtures.banningPhase.labels[0]}
            rightLabel={fixtures.banningPhase.labels[1]}
            isToggled={banningPhase}
            onChange={() => this.setState({banningPhase: !banningPhase})}
            child={
              banningPhase && (
                <FormField
                  question={fixtures.banningPhase.followUp}
                  type="input"
                  onChange={(e) => {
                    this.setState({bansCount: e.target.value});
                  }}
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
              this.setState({customizePlayersCount: !customizePlayersCount})
            }
            child={
              customizePlayersCount && (
                <FormField
                  question={fixtures.playersCount.followUp}
                  type="input"
                  onChange={(e) => {
                    this.setState({bansCount: e.target.value});
                  }}
                />
              )
            }
          />

          <FormField
            question={fixtures.move.q}
            leftLabel={fixtures.move.labels[0]}
            rightLabel={fixtures.move.labels[1]}
            isToggled={customizeMove}
            onChange={() => this.setState({customizeMove: !customizeMove})}
            child={
              customizeMove && (
                <FormField
                  question={fixtures.move.followUp}
                  type="input"
                  onChange={(e) => {
                    this.setState({moveTime: e.target.value});
                  }}
                />
              )
            }
          />
        </div>
      </div>
    );
  }
}

export default Configurator;
