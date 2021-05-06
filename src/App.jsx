import './App.css';

import React from 'react';

import LandingPage from './Components/Screens/LandingPage/LandingPage';

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
