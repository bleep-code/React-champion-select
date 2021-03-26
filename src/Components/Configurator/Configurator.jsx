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
      banningPhase: true,
      customizeMove: false,
      moveTime: 60,
      playersCount: 10,
    };
  }

  render() {
    const {
      chooseAllPlayers,
      banningPhase,
      customizeMove,
      moveTime,
      customizePlayersCount,
      playersCount,
    } = this.state;

    return (
      <div className="configurator-outer">
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
            onToggle={() =>
              this.setState({chooseAllPlayers: !chooseAllPlayers})
            }
          />
          <FormField
            question={fixtures.banningPhase.q}
            leftLabel={fixtures.banningPhase.labels[0]}
            rightLabel={fixtures.banningPhase.labels[1]}
            isToggled={banningPhase}
            onToggle={() => this.setState({banningPhase: !banningPhase})}
          />
          <FormField
            question={fixtures.playersCount.q}
            leftLabel={fixtures.playersCount.labels[0]}
            rightLabel={fixtures.playersCount.labels[1]}
            isToggled={customizePlayersCount}
            onToggle={() =>
              this.setState({customizePlayersCount: !customizePlayersCount})
            }
          />
          <FormField
            question={fixtures.move.q}
            leftLabel={fixtures.move.labels[0]}
            rightLabel={fixtures.move.labels[1]}
            isToggled={customizeMove}
            onToggle={() => this.setState({customizeMove: !customizeMove})}
          />
        </div>
      </div>
    );
  }
}

export default Configurator;
