import './ToggleSwitch.css';

import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { leftLabel, rightLabel, isToggled = false, onChange } = this.props;

    return (
      <div className="toggle-switch-wrapper">
        <span className="toggle-switch--label-left">{leftLabel}</span>
        <label className="toggle-switch">
          <input type="checkbox" checked={isToggled} onChange={onChange} />
          <span className="toggle-switch__slider" />
        </label>
        <span className="toggle-switch--label-right">{rightLabel}</span>
      </div>
    );
  }
}

export default ToggleSwitch;
