import './BansList.css';

import React from 'react';

import _ from 'lodash';

import Ban from '../Ban/Ban';

class BansList extends React.Component {
  renderBans() {
    const {enemy, banningPhase, bannedChamps} = this.props;

    return _.fill(Array(10)).map((ban, index) => {
      // isEnemy method limits team component to certain indexes,
      // so each team can be counted from 1 method, there's no need to use two that looks the same.
      const isEnemy = () => {
        if (!enemy) {
          return index % 2 === 0;
        }

        return index % 2 !== 0;
      };

      ban = isEnemy() && (
        <Ban
          key={index}
          banningPhase={banningPhase}
          bannedChamp={bannedChamps?.length >= index + 1 && bannedChamps[index]}
          enemy={enemy}
        />
      );

      return ban;
    });
  }

  render() {
    const {enemy} = this.props;

    return (
      <div className="team__bans-list bans" style={{flexDirection: !enemy ? 'row' : 'row-reverse'}}>
        {this.renderBans()}
      </div>
    );
  }
}

export default BansList;
