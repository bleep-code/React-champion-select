import React from 'react';
import './LockButton.css';
var _ = require('lodash');
class LockButton extends React.Component {
  render() {
    return (
      <div className="picker__lock-in--wrapper">
        <div
          className={`picker__lock-in--outer ${
            _.isEmpty(this.props.chosen) && 'disabled'
          }`}
        >
          <div
            className={`picker__lock-in--button`}
            onClick={() => {
              this.props.setLocked();
              this.props.setTurn();
            }}
          />
          <span className="picker__lock-in--button--text">Lock In</span>
        </div>
      </div>
    );
  }
}

export default LockButton;
