import './FormField.css';

import React from 'react';

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
class FormField extends React.Component {
  render() {
    const {
      leftLabel,
      rightLabel,
      question,
      isToggled = false,
      onToggle,
    } = this.props;

    return (
      <div className="form-field">
        <span className="form-field--question">{question}</span>
        <ToggleSwitch
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          isToggled={isToggled}
          onToggle={onToggle}
        />
      </div>
    );
  }
}

export default FormField;
