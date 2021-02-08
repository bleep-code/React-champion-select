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

  onClick(e) {
    // Adam don't kill me plz, explain the other way
    const chosen = document.querySelector('.chosen');
    !!chosen && chosen.classList.remove('chosen');
    e.target && e.target.classList.add('chosen');
  }

  render() {
    return (
      <div className={`picker__champion`} onClick={this.onClick}>
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
