import './LandingPage.css';

import React from 'react';

import Configurator from '../Configurator/Configurator';
import ChampionSelect from '../ChampionSelect/ChampionSelect';

class LandingPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classicMode: false,

      configuratorOpen: false,
    };

    this.toggleConfigurator = this.toggleConfigurator.bind(this);
  }

  renderClassic() {
    this.setState({ classicMode: !this.state.classicMode });
  }

  toggleConfigurator() {
    this.setState({ configuratorOpen: !this.state.configuratorOpen });
  }

  render() {
    const { classicMode, configuratorOpen } = this.state;

    if (classicMode) {
      return <ChampionSelect />;
    }

    return (
      <div className="start-view">
        {configuratorOpen && (
          <Configurator toggleConfigurator={this.toggleConfigurator} />
        )}
        {!configuratorOpen && (
          <>
            <div
              className="start-view__classic-mode"
              onClick={() => this.renderClassic()}
            >
              <i className="far fa-compass" />
              <span>Explore</span>
            </div>
            <div
              className="start-view__custom-mode"
              onClick={this.toggleConfigurator}
            >
              <i className="far fa-folder" />
              <span>Customize</span>
            </div>
          </>
        )}
      </div>
    );
  }
}

export default LandingPage;
