import './Champion.css';

import React from 'react';

class Champion extends React.Component {
  render() {
    const { chosen, locked, name, setChosen, onUpdate } = this.props;

    const lockedNames = locked?.map((x) => x.children[1].innerText);

    return (
      <div
        className={`picker__champion ${
          chosen?.innerText === name
            ? 'chosen'
            : '' || (lockedNames?.includes(name) && 'locked')
        }`}
        onClick={(e) => {
          setChosen(e);
          setTimeout(onUpdate, 0);
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
