import './Search.scss';

import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="champion-picker__top-section--search">
        <input
          className="champion-picker__top-section--search__input"
          onChange={async (e) => {
            await this.props.onChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Search;
