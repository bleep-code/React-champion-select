import React from 'react';
import './LockButton.css';
var _ = require('lodash');
class LockButton extends React.Component {
  render() {
    const { chosen, setLocked } = this.props;

    return (
      <div className="picker__lock-in--wrapper">
        <div
          className={`picker__lock-in--outer ${
            _.isEmpty(chosen) && 'disabled'
          }`}
        >
          <div className={`picker__lock-in--button`} onClick={setLocked} />
          <span className="picker__lock-in--button--text">Lock In</span>
        </div>
      </div>
    );
  }
}

export default LockButton;
