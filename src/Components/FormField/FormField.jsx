import './FormField.css';

import React from 'react';

import ToggleSwitch from '../ToggleSwitch/ToggleSwitch';
class FormField extends React.Component {
  inputValueCheck(value) {
    if (value < 0 || value > 5) {
      alert('These are not allowed values!');
      // #TODO handle OOR values
    }
  }

  render() {
    const {
      leftLabel,
      rightLabel,
      question,
      type,
      isToggled = false,
      onChange,
      child,
      placeholder,
    } = this.props;

    if (type === 'input') {
      return (
        <div className="form-field">
          <span className="form-field--question">{question}</span>

          <input
            className="form-field--input"
            onChange={onChange}
            type="number"
            onInput={(e) => this.inputValueCheck(e.target.value)}
            placeholder={placeholder}
          />

          {child}
        </div>
      );
    }

    return (
      <div className="form-field">
        <span className="form-field--question">{question}</span>

        <ToggleSwitch
          leftLabel={leftLabel}
          rightLabel={rightLabel}
          isToggled={isToggled}
          onChange={onChange}
        />

        {child}
      </div>
    );
  }
}

export default FormField;
