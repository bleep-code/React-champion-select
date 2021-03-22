import React from 'react';

import LandingPage from './Components/LandingPage/LandingPage';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return <LandingPage />;
  }
}

export default App;
