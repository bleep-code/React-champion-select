import './LandingPage.css';

import React from 'react';

import Configurator from '../Configurator/Configurator';
import ChampionSelect from '../ChampionSelect/ChampionSelect';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classicMode: false,
      customMode: false,
    };
  }

  renderClassic() {
    this.setState({classicMode: !this.state.classicMode});
  }

  renderCustom() {
    this.setState({customMode: !this.state.customMode});
  }

  render() {
    const {classicMode, customMode} = this.state;

    if (classicMode) {
      return <ChampionSelect />;
    }

    if (customMode) {
      return <Configurator />;
    }

    return (
      <div className="start-view">
        <div
          className="start-view__classic-mode"
          onClick={() => this.renderClassic()}
        >
          <i className="far fa-compass" />
          <span>Explore</span>
        </div>
        <div
          className="start-view__custom-mode"
          onClick={() => this.renderCustom()}
        >
          <i className="far fa-folder" />
          <span>Customize</span>
        </div>
      </div>
    );
  }
}

export default LandingPage;
