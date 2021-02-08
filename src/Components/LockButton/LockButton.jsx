import React from 'react';
import './LockButton.css';
class LockButton extends React.Component {
  render() {
    return (
      <div className="picker__lock-in--wrapper">
        <div className="picker__lock-in--outer">
          <div className="picker__lock-in--button"></div>
          <span className="picker__lock-in--button--text">Lock In</span>
        </div>
      </div>
    );
  }
}

export default LockButton;
