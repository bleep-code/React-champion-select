import './FormField.scss';

import React from 'react';

import _, { debounce } from 'lodash';

import ToggleSwitch from '../../../../Common/ToggleSwitch/ToggleSwitch';
class FormField extends React.Component {
  handleInput(value, min, max) {
    if (value < min || value > max) {
      alert('These are not allowed values!');
      return value.split('').slice(0, value.length - 1);
    }

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
      const setInputValue = (e) => {
        return (e.target.value = this.handleInput(
          e.target.value,
          inputConstraints[0],
          inputConstraints[1]
        ));
      };

      const debouncedSetInputValue = _.debounce(setInputValue, 250);

      return (
        <div className="form-field">
          <span className="form-field--question">{question}</span>

          <input
            className="form-field--input"
            onChange={onChange}
            type="number"
            placeholder={placeholder}
            onInput={(e) => debouncedSetInputValue(e)}
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
