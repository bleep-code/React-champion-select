import './Search.css';

import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="champion-picker__top-section--search">
        <input
          className="champion-picker__top-section--search__input"
          onChange={(e) => {
            this.props.filterChampions(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Search;
