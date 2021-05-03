import './Champion.css';

import React from 'react';

class Champion extends React.Component {
  championState() {
    const { status, banningPhase } = this.props;

    const classNames = ['picker__champion'];

    if (status.banned) {
      classNames.push('banned');
    }

    if (status.locked) {
      classNames.push('locked');
    }

    if (status.chosen) {
      if (banningPhase) {
        classNames.push('chosen--banning');
      } else classNames.push('chosen');
    }

    return classNames.join(' ');
  }

  render() {
    const { name, image, setChosen, searchPhrase, onUpdate } = this.props;

    return (
      <div
        className={this.championState()}
        onClick={async () => {
          await setChosen({ name, image });
          await onUpdate(searchPhrase);
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
