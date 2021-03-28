import './Champion.css';

import React from 'react';

class Champion extends React.Component {
  championState() {
    const {banningPhase, bannedChamps, chosen, locked, name} = this.props;

    const lockedChampionsNames = locked?.map((x) => x.name);
    const bannedChampionsNames = bannedChamps?.map((x) => x.name);

    const classNames = ['picker__champion'];

    if (bannedChampionsNames.includes(name)) {
      classNames.push('banned');
    }

    if (lockedChampionsNames.includes(name)) {
      classNames.push('locked');
    }

    if (chosen?.name === name) {
      if (banningPhase) {
        classNames.push('chosen--banning');
      } else classNames.push('chosen');
    }

    return classNames.join(' ');
  }

  render() {
    const {name, image, setChosen, searchPhrase, onUpdate} = this.props;

    return (
      <div
        className={this.championState()}
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
