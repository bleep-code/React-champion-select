import './FormField.scss';

import React from 'react';

import ToggleSwitch from '../../../../Common/ToggleSwitch/ToggleSwitch';
class FormField extends React.Component {
  handleInput(value, min, max) {
    if (value < min || value > max) {
      alert('These are not allowed values!');
      return value.split('').slice(0, value.length - 1);
    }

    console.log(value);
    console.log(typeof value);

    return +value;
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
      inputConstraints,
    } = this.props;

    if (type === 'input') {
      return (
        <div className="form-field">
          <span className="form-field--question">{question}</span>

          <input
            className="form-field--input"
            onChange={onChange}
            type="number"
            placeholder={placeholder}
            onInput={(e) =>
              (e.target.value = this.handleInput(
                e.target.value,
                inputConstraints[0],
                inputConstraints[1]
              ))
            }
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
