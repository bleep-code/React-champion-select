import './Champion.css';

import React from 'react';

class Champion extends React.Component {
  render() {
    const {
      chosen,
      locked,
      name,
      image,
      setChosen,
      searchPhrase,
      onUpdate,
    } = this.props;

    const lockedNames = locked?.map((x) => x.name);

    return (
      <div
        className={`picker__champion ${
          chosen?.name === name
            ? 'chosen'
            : (lockedNames?.includes(name) && 'locked') || ''
        }`}
        onClick={() => {
          setChosen({name, image});
          setTimeout(() => onUpdate(searchPhrase), 0);
        }}
      >
        <img
          src={`http://ddragon.leagueoflegends.com/cdn/11.3.1/img/champion/${image}`}
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
