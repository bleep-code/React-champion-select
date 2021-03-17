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
            setTimeout(() => this.props.onChange(e.target.value), 0);
          }}
        />
      </div>
    );
  }
}

export default Search;
