import React from 'react';
import './Champion.css';
class Champion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { chosen, locked, name } = this.props;

    return (
      <div
        className={`picker__champion ${
          locked?.includes(name)
            ? 'locked'
            : chosen?.innerText === name
            ? 'chosen'
            : ''
        }`}
        onClick={(e) => {
          this.props.onClick(e);
        }}
      >
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${this.props.image}`}
          alt={name}
          className="picker__champion--image"
        />
        <span className="picker__champion--name">{name}</span>
        <i className="fas fa-ban" />
      </div>
    );
  }
}

export default Champion;
