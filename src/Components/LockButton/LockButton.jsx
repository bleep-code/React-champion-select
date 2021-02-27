import './LockButton.css';

import React from 'react';

const _ = require('lodash');

class LockButton extends React.Component {
  render() {
    const {chosen, setLocked, onUpdate} = this.props;

    return (
      <div className="picker__lock-in--wrapper">
        <div
          className={`picker__lock-in--outer ${
            _.isEmpty(chosen) && 'disabled'
          }`}
        >
          <div
            className={`picker__lock-in--button`}
            onClick={() => {
              setLocked();
              setTimeout(onUpdate, 0);
            }}
          />
          <span className="picker__lock-in--button--text">Lock In</span>
        </div>
      </div>
    );
  }
}

export default LockButton;
