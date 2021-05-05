import './BansList.css';

import React from 'react';

import _ from 'lodash';

import Ban from '../Ban/Ban';

class BansList extends React.Component {
  renderBans() {
    const { enemy, bansCount, bannedChamps } = this.props;

    // new Array(length) won't work here, cause of the fact, that you won't be able to operate with it
    // so it's replaced with lodash's _.fill, which is filling array of fixed length with undefineds (by defualt), hence you can iterate
    const bansArray = _.fill(Array(bansCount));

    return bansArray.map((ban, index) => {
      // method below limits banslist component to certain indexes,
      // so each team can be counted from 1 method, there's no need to use two that looks the same.
      const shouldBeFriendlyOrEnemy = () => {
        if (!enemy) {
          return index % 2 === 0;
        }

        return index % 2 !== 0;
      };

      ban = shouldBeFriendlyOrEnemy() && (
        <Ban
          key={index}
          bannedChamp={bannedChamps?.length - 1 >= index && bannedChamps[index]}
        />
      );

      return ban;
    });
  }

  render() {
    const { enemy, bansCount } = this.props;

    return (
      <div
        className="team__bans-list bans"
        style={{
          flexDirection: !enemy ? 'row' : 'row-reverse',
          visibility: !bansCount && 'hidden',
        }}
      >
        {this.renderBans()}
      </div>
    );
  }
}

export default BansList;
