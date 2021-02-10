import React from 'react';
import './Champion.css';
class Champion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosen: false,
    };
  }

  render() {
    return (
      <div
        className={`picker__champion ${
          this.props.chosen === this.props.name ? 'chosen' : ''
        }`}
        onClick={(e) => {
          this.props.onClick(e);
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
