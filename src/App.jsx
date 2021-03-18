import React from 'react';

import ConfigurePhase from './Components/ConfigurePhase/ConfigurePhase';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <ConfigurePhase />;
  }
}

export default App;
