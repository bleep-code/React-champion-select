import './Runes.css';

import React from 'react';

class Runes extends React.Component {
  render() {
    return (
      <>
        <div className="bottom-section--edit-runes">
          <i class="fas fa-pencil-alt" />
        </div>
        <select className="bottom-section--choose-runes">
          <option>Default set of runes 1</option>
          <option selected>Default set of runes 2</option>
          <option>Default set of runes 3</option>
          <option>Default set of runes 4</option>
          <option>Default set of runes 5</option>
        </select>
      </>
    );
  }
}

export default Runes;
