import './Picker.css';

import React from 'react';

class Picker extends React.Component {
  render() {
    return (
      <div className="champion-picker__mid-section__picker picker">
        {this.props.champions}
      </div>
    );
  }
}

export default Picker;
