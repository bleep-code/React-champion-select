import React from 'react';
import './Champion.css';
class Champion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: false,
      locked: false,
    };
  }

  render() {
    return (
      <div
        className={`picker__champion ${this.state.chosen ? 'chosen' : null}`}
        onClick={() => {
          !this.state.chosen && this.setState({ chosen: true });
          console.log(this.state.chosen);
          // add support for clearing all of the other chosen classes
        }}
      >
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${this.props.image}`}
          alt={this.props.name}
          className="picker__champion--image"
        />
        <span className="picker__champion--name">{this.props.name}</span>
      </div>
    );
  }
}

export default Champion;
