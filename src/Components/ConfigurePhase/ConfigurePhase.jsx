import './ConfigurePhase.css';

import React from 'react';

import Configurator from '../Configurator/Configurator';
import ChoosingPhase from '../ChoosingPhase/ChoosingPhase';

class ConfigurePhase extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classicMode: false,
      customMode: false,
    };
  }

  render() {
    const {classicMode, customMode} = this.state;

    if (classicMode) {
      return <ChoosingPhase />;
    }

    if (customMode) {
      return <Configurator />;
    }

    return (
      <div className="start-view">
        <div
          className="start-view__classic-mode"
          onClick={() => {
            this.setState({classicMode: !classicMode});
          }}
        >
          <i class="far fa-compass" />
          <span>Explore</span>
        </div>
        <div
          className="start-view__custom-mode"
          onClick={() => {
            this.setState({customMode: !customMode});
          }}
        >
          <i class="far fa-folder" />
          <span>Customize</span>
        </div>
      </div>
    );
  }
}

export default ConfigurePhase;
