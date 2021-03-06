import './FormField.scss';

import React from 'react';

import _ from 'lodash';

import ToggleSwitch from '../../../../Common/ToggleSwitch/ToggleSwitch';
class FormField extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input_value: undefined,
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(value, min, max) {
    if (value < min || value > max) {
      this.setState({ input_value: max });
      return max;
    }

    this.setState({ input_value: +value });
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
      const [min, max] = inputConstraints;

      return (
        <div className="form-field">
          <span className="form-field--question">{question}</span>

          <input
            className="form-field--input"
            onInput={(e) => {
              e.target.value = this.handleInput(e.target.value, min, max);

              onChange(this.state.input_value || max);
            }}
            type="number"
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
