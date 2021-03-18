import React from 'react';

import Configurator from './Components/Configurator/Configurator';
import BanningPhase from './Components/BanningPhase/BanningPhase';
import ChoosingPhase from './Components/ChoosingPhase/ChoosingPhase';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      configuratorPhase: false,
      banningPhase: false,
      choosingPhase: true,
    };
  }

  render() {
    const {configuratorPhase, banningPhase, choosingPhase} = this.state;

    if (configuratorPhase) return <Configurator />;
    if (banningPhase) return <BanningPhase />;
    if (choosingPhase) return <ChoosingPhase />;
  }
}

export default App;
